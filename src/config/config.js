import React from 'react';
import MusicNote from '@material-ui/icons/MusicNote';
import StarIcon from '@material-ui/icons/Star';
import DynamicImport from '../router/DynamicImport';
import Loading from '../containers/Loading/Loading';

const secret = process.env.isCI ? {} : require('./secret/local');

// eslint-disable-next-line prefer-destructuring
export const API_KEY = secret.API_KEY;

// Creating new route
// 1) new Async-component
// 2) add route to the route-array, path:component
// 3) add to sidebar
export const NotFoundPage = props => (
  <DynamicImport load={() => import('../containers/NotFound/NotFoundPage')}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);

const LayoutSearchMusic = props => (
  <DynamicImport
    load={() => import('../containers/MusicSearch/LayoutSearchMusic')}
  >
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);

const FavoriteMusic = props => (
  <DynamicImport
    load={() => import('../containers/FavoriteMusic/FavoriteMusic')}
  >
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);

const Dashboard = props => (
  <DynamicImport load={() => import('../containers/Dashboard/Dashboard')}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);

const Editor = props => (
  <DynamicImport load={() => import('../containers/MonacoEditor')}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);

export const routes = [
  { path: '/', component: Dashboard, exact: true },
  { path: '/searchmusic', component: LayoutSearchMusic },
  { path: '/favoritemusic', component: FavoriteMusic },
  { path: '/editor', component: Editor },
  { path: '*', component: NotFoundPage },
];

export const SidebarTop = [
  { text: 'Search Music', icon: <MusicNote />, route: 'searchmusic' },
  { text: 'Favorite Music', icon: <MusicNote />, route: 'favoritemusic' },
];

export const SidebarBot = [
  { text: 'Monaco Editor (VSCode)', icon: <StarIcon />, route: 'editor' },
];
