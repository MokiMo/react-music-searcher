import React from 'react';
import MusicNote from '@material-ui/icons/MusicNote';
import StarIcon from '@material-ui/icons/Star';
import DynamicImport from '../router/DynamicImport';
import Loading from '../containers/Loading/Loading';
import secret from './secret/local';

const secret = process.env.isCI ? {} : require('./secret/local');

export const API_KEY = process.env.LAST_FM_API_KEY || secret.LAST_FM_KEY || '';

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

export const routes = [
  { path: '/searchmusic', component: LayoutSearchMusic },
  { path: '/favoritemusic', component: FavoriteMusic },
  { path: '*', component: NotFoundPage },
];

export const SidebarTop = [
  { text: 'Search Music', icon: <MusicNote />, route: 'searchmusic' },
];

export const SidebarBot = [
  { text: 'Favorite Music', icon: <StarIcon />, route: 'favoritemusic' },
];
