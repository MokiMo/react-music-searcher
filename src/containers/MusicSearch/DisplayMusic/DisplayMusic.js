import { connect } from 'react-redux';
import React, { Fragment } from 'react';
import MapMusic from './MapMusic';

function exists(music) {
  return music.length > 0;
}

const DisplayMusic = props => {
  const { tracks, albums, artists } = props;
  return (
    <Fragment>
      {exists(tracks) && <MapMusic tracks={tracks} name="tracks" />}
      {exists(albums) && <MapMusic tracks={albums} name="albums" />}
      {exists(artists) && <MapMusic tracks={artists} name="artists" />}
    </Fragment>
  );
};

function mapStateToProps(state) {
  return {
    tracks: state.musicSearch.tracks,
    albums: state.musicSearch.albums,
    artists: state.musicSearch.artists,
  };
}

export default connect(mapStateToProps)(DisplayMusic);
