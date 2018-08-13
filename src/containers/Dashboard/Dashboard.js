import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  Paper: {
    margin: 2 * theme.spacing.unit,
    padding: 1 * theme.spacing.unit,
    textAlign: 'center',
  },
});

const Dashboard = ({ classes }) => (
  <Paper className={classes.Paper}>
    <Typography
      variant="display1"
      align="center"
      className={classes.Paper}
      gutterBottom
    >
      Dashboard.
      <br />
      ...
      <br />
      ...
      <br />
      ...
      <br />
      Business Content
      <br />
      ...
      <br />
      ...
      <br />
      ...
    </Typography>
    <Typography variant="display1" align="center" className={classes.Paper}>
      Demo Features
      <br />- <NavLink to="/searchmusic">Search Music</NavLink>
      <br />- <NavLink to="/favoritemusic">Favorite Music</NavLink>
    </Typography>
  </Paper>
);

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
