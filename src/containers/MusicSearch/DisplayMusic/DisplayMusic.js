import { connect } from 'react-redux';
import React, { Fragment } from 'react';
import MapMusic from './MapMusic';

const DisplayMusic = props => (
  <Fragment>
    {props.tracks.length > 0 && (
      <MapMusic tracks={props.tracks} name="tracks" />
    )}
    {props.albums.length > 0 && (
      <MapMusic tracks={props.albums} name="albums" />
    )}
    {props.artists.length > 0 && (
      <MapMusic tracks={props.artists} name="artists" />
    )}
  </Fragment>
);

function mapStateToProps(state) {
  return {
    tracks: state.musicSearch.tracks,
    albums: state.musicSearch.albums,
    artists: state.musicSearch.artists,
  };
}

export default connect(mapStateToProps)(DisplayMusic);
