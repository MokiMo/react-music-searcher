/* eslint-disable */
import React, { Component, Fragment } from 'react';
import ErrorMessage from '../../components/UI/ErrorMessage';
import SearchMusic from './SearchMusic';
import DisplayMusic from './DisplayMusic/DisplayMusic';

class MusicSearchLastFM extends Component {
  render() {
    return (
      <Fragment>
        <ErrorMessage />
        <SearchMusic />
        <DisplayMusic /><br/>
        <div/>
      </Fragment>
    );
  }
}

export default MusicSearchLastFM;
