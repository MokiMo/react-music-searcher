import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Sidebar from '../Sidebar/Sidebar';
import authActions from '../../redux/auth/actions';

const { logout } = authActions;

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
};

export class Topbar extends Component {
  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = action => {
    this.setState({ anchorEl: null });
    if (action === 'logout') {
      this.props.logout();
    }
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div className={classes.root}>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Sidebar />
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            />
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                <MenuItem onClick={() => this.handleClose('logout')}>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Topbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(
  null,
  { logout }
)(withStyles(styles)(Topbar));
