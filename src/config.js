import React from 'react';
import MusicNote from '@material-ui/icons/MusicNote';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import StarIcon from '@material-ui/icons/Star';
import MailIcon from '@material-ui/icons/Mail';
import DynamicImport from './router/DynamicImport';
import Loading from './containers/Loading/Loading';

const dev = true;
export const authenticated = !!dev;
export const API_KEY = process.env.LAST_FM_API_KEY || 'local_test_key';

// Creating new route
// 1) new Async-component
// 2) add route to the route-array, path:component
// 3) add to sidebar
export const NotFoundPage = props => (
  <DynamicImport load={() => import('./containers/NotFound/NotFoundPage')}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);

const LayoutSearchMusic = props => (
  <DynamicImport
    load={() => import('./containers/MusicSearch/LayoutSearchMusic')}
  >
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);

const FavoriteMusic = props => (
  <DynamicImport
    load={() => import('./containers/FavoriteMusic/FavoriteMusic')}
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
  { text: 'Favorite Music', icon: <StarIcon />, route: 'favoritemusic' },
];

export const SidebarBot = [
  { text: 'Profile*', icon: <MailIcon />, route: 'all_emails' },
  { text: 'About*', icon: <InboxIcon />, route: 'about' },
];
