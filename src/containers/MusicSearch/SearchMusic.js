import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Search from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import Loading from '../../components/UI/Loading';
import { API_KEY } from '../../config/config';
import appActions from '../../redux/app/actions';
import { musicFound } from '../../redux/musicSearch/actions';

const { startLoading, errorCaught, stopLoading } = appActions;

const styles = theme => ({
  Paper: {
    margin: 2 * theme.spacing.unit,
    padding: 20,
    textAlign: 'center',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  padding: {
    paddingTop: 15,
    paddingBottom: 15,
  },
});

class MusicSearch extends Component {
  state = {
    input: '',
    searchLimit: 30,
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  // get data for tracks || albums || artists from last.fm
  search = () => {
    this.props.startLoading();
    const { input, searchLimit } = this.state;
    if (!API_KEY || API_KEY === '') console.warn('NO API KEY');

    axios
      .all([
        axios.get(
          `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${input}&api_key=${API_KEY}&format=json&limit=${searchLimit}`
        ),
        axios.get(
          `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${input}&api_key=${API_KEY}&format=json&limit=${searchLimit}`
        ),
        axios.get(
          `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${input}&api_key=${API_KEY}&format=json&limit=${searchLimit}`
        ),
      ])
      .then(
        axios.spread((tracksRes, albumsRes, artistRes) => {
          this.props.musicFound({
            tracks: this.addUUID(tracksRes.data.results.trackmatches.track),
            albums: this.addUUID(albumsRes.data.results.albummatches.album),
            artists: this.addUUID(artistRes.data.results.artistmatches.artist),
          });
          this.props.stopLoading();
        })
      )
      .catch(err => {
        this.props.errorCaught(err);
      });
  };

  // usually, an unique identifier should be provided by the backend
  addUUID(response) {
    return response.map(item => ({
      ...item,
      uuid: uuidv4(),
    }));
  }

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
              if (e.key === 'Enter') {
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
  classes: PropTypes.object.isRequired,
};

const styledMusicSearch = withStyles(styles)(MusicSearch);
export default connect(
  null,
  {
    musicFound,
    startLoading,
    errorCaught,
    stopLoading,
  }
)(styledMusicSearch);
