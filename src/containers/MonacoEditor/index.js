import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Editor from './Editor';

// styles not needed right now, but potentially in future.
const styles = theme => ({
  Paper: {},
});

const editor = ({ classes }) => (
  <Paper className={classes.Paper}>
    <Editor />
  </Paper>
);

editor.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(editor);
