import React, { Fragment } from 'react';
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

// Standard component for routes that don't exist
const NotFoundPage = ({ classes }) => (
  <Fragment>
    <Paper className={classes.Paper}>
      <Typography variant="display1" align="center" className={classes.Paper}>
        - <NavLink to="/searchmusic">Search Music</NavLink>
        <br />
        - <NavLink to="/favoritemusic">Favorite Music</NavLink>
      </Typography>

      <Typography variant="display1" align="center" className={classes.Paper}>
        - React<br />
        - Redux<br />
        - Redux Sagas <br />
        - React Router<br />
        - Code splitting<br />
        - Material UI <br />
        <br />
      </Typography>

      <Typography variant="caption" align="center" className={classes.Paper}>
        Disclaimer: This app was made solely to demonstrate basic knowledge.
        Alot of the used technologies, such as redux, redux sagas and axios are
        too much for a project like this. But they lay a nice foundation for
        scaling this app.<br />
        <br />
        React router in combination with redux handling the lifecycles for
        components, makes this very scalable and could turn into a
        enterprise-sized application easily, without perfomance issues.
      </Typography>
    </Paper>
  </Fragment>
);

NotFoundPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFoundPage);
