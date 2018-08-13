import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class SideDrawer extends Component {
  state = {
    open: false,
  };

  toggleDrawer = open => () => {
    this.setState({
      open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );
    return (
      <div>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={this.toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={this.state.open} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
            <Divider />
            <Typography variant="caption" align="center">
              *Demo routes. <br />
              Redirect to the start-page.
            </Typography>
          </div>
        </Drawer>
      </div>
    );
  }
}

SideDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SideDrawer);
