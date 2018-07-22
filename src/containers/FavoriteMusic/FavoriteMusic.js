import React from 'react';
import { connect } from 'react-redux';

import MapMusic from '../MusicSearch/DisplayMusic/MapMusic';

const FavoriteMusic = ({ favorites }) => (
  <MapMusic tracks={favorites} name="favorites" />
);
function mapStateToProps(state) {
  return {
    favorites: state.musicSearch.favorites,
  };
}

export default connect(mapStateToProps)(FavoriteMusic);
