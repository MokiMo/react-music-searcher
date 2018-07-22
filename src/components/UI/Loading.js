import React from 'react';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';

const loading = ({ isLoading }) =>
  isLoading ? <LinearProgress color="secondary" /> : null;

export default connect(state => ({
  isLoading: state.app.loading,
}))(loading);
