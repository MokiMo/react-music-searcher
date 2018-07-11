import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import axios from "axios";
import musicSearchActions from "../../redux/musicSearch/actions";
import appActions from "../../redux/app/actions";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Search from "@material-ui/icons/Search";
import PropTypes from "prop-types";
import Loading from "../../components/UI/Loading";
import { API_KEY } from "./API_KEY";
import uuidv4 from "uuid/v4";
const { musicFound } = musicSearchActions;
const { startLoading, errorCaught, stopLoading } = appActions;

const styles = theme => ({
  Paper: {
    marginLeft: 5 * theme.spacing.unit,
    marginRight: 5 * theme.spacing.unit,
    marginTop: 2 * theme.spacing.unit,
    marginBottom: 2 * theme.spacing.unit,
    padding: 20,
    textAlign: "center"
  },
  margin: {
    margin: theme.spacing.unit
  },
  padding: {
    paddingTop: 15,
    paddingBottom: 15
  }
});

class MusicSearch extends Component {
  state = {
    input: ""
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  search = () => {
    this.props.startLoading();
    const { input } = this.state;
    axios
      .get(
        `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${input}&api_key=${API_KEY}&format=json&limit=30`
      )
      .then(response => {
        const tracksWithUUID = [];
        response.data.results.trackmatches.track.forEach(track => {
          const tempTrack = { ...track, uuid: uuidv4() };
          tracksWithUUID.push(tempTrack);
        });
        this.props.musicFound({
          tracks: tracksWithUUID
        });
        this.props.stopLoading();
      })
      .catch(err => {
        this.props.errorCaught();
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Loading />
        <Paper className={classes.Paper}>
          <Typography
            variant="display1"
            align="center"
            gutterBottom
            className={classes.padding}
          >
            Start Searching Music
          </Typography>
          <Search onClick={this.search} />
          <TextField
            className={classes.margin}
            value={this.state.input}
            id="input-with-icon-textfield"
            label="Start searching"
            onChange={this.handleChange}
            onKeyPress={e => {
              if (e.key === "Enter") {
                this.search();
                e.preventDefault();
              }
            }}
          />
        </Paper>
      </Fragment>
    );
  }
}
MusicSearch.propTypes = {
  classes: PropTypes.object.isRequired
};

const styledMusicSearch = withStyles(styles)(MusicSearch);
export default connect(null, {
  musicFound,
  startLoading,
  errorCaught,
  stopLoading
})(styledMusicSearch);
