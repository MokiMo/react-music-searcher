import React, { Fragment } from 'react';
import ErrorMessage from '../../components/UI/ErrorMessage';
import SearchMusic from './SearchMusic';
import DisplayMusic from './DisplayMusic/DisplayMusic';

// layout for searchmusic-route
const LayoutSearchMusic = () => (
  <Fragment>
    <ErrorMessage />
    <SearchMusic />
    <DisplayMusic />
    <br />
    <div />
  </Fragment>
);

export default LayoutSearchMusic;
