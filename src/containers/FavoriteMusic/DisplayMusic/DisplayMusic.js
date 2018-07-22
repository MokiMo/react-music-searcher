import { connect } from "react-redux";
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Favorite from "./Favorite";
const styles = theme => ({
  expansionPanel: {
    margin: 38
  },
  margin: {
    padding: 10,
    maxWidth: 300,
    margin: 10
  },
  track: {
    fontSize: 22,
    fontWeight: "bold",
    paddingTop: 8
  },
  artist: {
    fontSize: 15
  },
  icon: {
    fontSize: 18,
    paddingLeft: 5
  },
  heading: {
    fontSize: theme.typography.pxToRem(30),
    fontWeight: 500
  },
  Paper: {
    marginLeft: 60,
    marginRight: 60,
    marginTop: 30,
    padding: 15
  }
});

class DisplayFavorites extends React.Component {
  render() {
    const { classes, tracks, favorites } = this.props;
    console.log(tracks);
    console.log(favorites);

    return favorites.length > 0 ? (
      <Grid container spacing={0} justify="center">
        {tracks.map(track =>
          favorites.map(
            favorites =>
              favorites === track.name ? (
                <Paper className={classes.margin} key={track.name}>
                  <div className="overlay">
                    <img
                      src={track.image["3"]["#text"]}
                      alt="Music found on Lastfm"
                    />
                    <a href={track.url} target="_blank" rel="noopener noreferrer" className="playWrapper">
                      {" "}
                    </a>
                  </div>
                  <Typography variant="display1" className={classes.track}>
                    {track.name} <Favorite name={track.name} />
                  </Typography>
                  <Typography variant="body2" className={classes.artist}>
                    {track.artist}
                  </Typography>
                </Paper>
              ) : (
                ""
              )
          )
        )}
      </Grid>
    ) : (
      <Paper className={classes.Paper}>
      <Typography
        variant="display1"
        align="center"
        className={classes.Paper}
        gutterBottom
      >
        Please search for music, <br/>then add them to your favorites.<br/><br/>
      </Typography>
    </Paper>
    );
  }
}

DisplayFavorites.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    tracks: state.musicSearch.tracks,
    favorites: state.musicSearch.favorites
  };
}
const styledDisplayFavorites = withStyles(styles)(DisplayFavorites);
export default connect(mapStateToProps)(styledDisplayFavorites);
