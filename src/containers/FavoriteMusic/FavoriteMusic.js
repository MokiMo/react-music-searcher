import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import MapMusic from '../MusicSearch/DisplayMusic/MapMusic';

const FavoriteMusic = ({ favorites }) => (
  <Fragment>
    <MapMusic tracks={favorites} name="favorites" />
    <br />
  </Fragment>
);
function mapStateToProps(state) {
  return {
    favorites: state.musicSearch.favorites,
  };
}

export default connect(mapStateToProps)(FavoriteMusic);
