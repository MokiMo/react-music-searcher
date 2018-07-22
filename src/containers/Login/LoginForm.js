import React, { Component } from 'react';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom';
import appActions from '../../redux/app/actions';
import authActions from '../../redux/auth/actions';
import Loading from '../../components/UI/Loading';

const { startLoading, errorCaught, stopLoading } = appActions;

const { auth } = authActions;

const style = {
  Paper: {
    marginTop: 100,
  },
  Button: {
    marginTop: 20,
  },
  paddingTop: {
    paddingTop: 20,
  },
  paddingBot: {
    padding: 20,
  },
};

export class Login extends Component {
  state = {
    user: '1',
    pass: '1',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleCreate = e => {
    e.preventDefault();
    this.props.startLoading();
    const { user, pass } = this.state;
    const data = { user, pass };
    this.props.auth(data);
  };

  render() {
    const { user, pass } = this.state;
    const { authenticated } = this.props;

    if (authenticated) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <Grid container>
        <Grid item sm={4} />
        <Grid item sm={4}>
          <Paper style={style.Paper}>
            <Loading />
            <Typography
              variant="display1"
              align="center"
              style={style.paddingTop}
              gutterBottom
            >
              ADMIN-DB
            </Typography>
            <Typography variant="title" align="center" gutterBottom>
              Anmeldung
            </Typography>
            <Typography
              variant="subheading"
              align="center"
              style={style.Button}
              gutterBottom
            >
              Weiter zum Dashboard
            </Typography>
            <Typography
              variant="body2"
              align="center"
              style={style.Button}
              gutterBottom
            >
              <form onSubmit={this.handleCreate}>
                <TextField
                  name="user"
                  label="Username"
                  value={user}
                  onChange={this.handleChange}
                  margin="normal"
                />
                <br />
                <TextField
                  name="pass"
                  label="Password"
                  value={pass}
                  onChange={this.handleChange}
                  margin="normal"
                />
                <br />

                <Button
                  type="submit"
                  color="primary"
                  variant="raised"
                  style={style.Button}
                >
                  Log-in
                </Button>
              </form>
            </Typography>
            <Typography
              variant="caption"
              align="center"
              style={style.paddingBot}
              gutterBottom
            >
              Sofern kein Zugang besteht, muss <br /> dieser zuerst Beantragt
              werden.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
function mapStateToProps(state) {
  return {
    loading: state.auth.loading,
    authenticated: state.auth.authenticated,
  };
}
export default connect(
  mapStateToProps,
  {
    auth,
    startLoading,
    errorCaught,
    stopLoading,
  }
)(Login);
