import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { ScaleLoader } from 'react-spinners';

const styles = {
  loader: {
    textAlign: 'center',
    margin: '10px',
  },
};

// Display loader while pictures are loading
class LoadImage extends React.Component {
  state = {
    loading: true,
    error: false,
  };

  componentDidMount() {
    axios
      .get(this.props.musicLink)
      .then(() => this.setState({ loading: false }))
      .catch(() => this.setState({ error: true }));
  }

  render() {
    const { classes } = this.props;
    const { error, loading } = this.state;

    if (error) {
      return "Image couldn't be loaded. Check connection.";
    }

    if (loading) {
      return (
        <div className={classes.loader}>
          <ScaleLoader color="rgba(0, 0, 0, 0.54)" loading={loading} />
        </div>
      );
    }
    return (
      <div className="overlay">
        <img src={this.props.musicLink} alt="Music found on Lastfm" />{' '}
        <a
          href={this.props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="playWrapper"
        >
          {' '}
        </a>
      </div>
    );
  }
}

LoadImage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadImage);
