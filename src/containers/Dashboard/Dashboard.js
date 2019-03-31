import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  Paper: {
    margin: 2 * theme.spacing.unit,
    padding: 1 * theme.spacing.unit,
    textAlign: 'center',
  },
});

const Dashboard = props => {
  props.history.push('/searchmusic');
  return <div />;
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Dashboard));
