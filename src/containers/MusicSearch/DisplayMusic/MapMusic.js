import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Favorite from './Favorite';
import LoadImage from './LoadImage';

const styles = theme => ({
  expansionPanel: {
    margin: 15,
  },
  expansionPanelDetails: {
    padding: 0,
    paddingBottom: 15,
  },
  margin: {
    padding: 10,
    width: 300,
    margin: 10,
  },
  track: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingTop: 8,
  },
  artist: {
    fontSize: 15,
  },
  icon: {
    fontSize: 18,
    paddingLeft: 5,
  },
  heading: {
    fontSize: theme.typography.pxToRem(30),
    fontWeight: 500,
  },
  center: {
    textAlign: 'center',
  },
});

const MapMusic = props => (
  <ExpansionPanel className={props.classes.expansionPanel} defaultExpanded>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <Typography className={props.classes.heading} variant="display2">
        {props.name}
      </Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails className={props.classes.expansionPanelDetails}>
      <Grid container spacing={0} justify="center">
        {props.tracks.map(track => (
          <Paper className={props.classes.margin} key={track.uuid}>
            <LoadImage
              musicLink={track.image['2']['#text']}
              alt="Music found on Lastfm"
              url={track.url}
            />
            <Typography variant="display1" className={props.classes.track}>
              {track.name}{' '}
              <Favorite track={track} favorite={props.name === 'favorites'} />
            </Typography>
            <Typography variant="body2" className={props.classes.artist}>
              {track.artist}
            </Typography>
          </Paper>
        ))}
        {props.tracks.length <= 0 && (
          <Typography
            className={props.classes.expansionPanel}
            variant="display1"
          >
            <div className={props.classes.center}>
              No favorites have been added.
              <hr />
              <NavLink to="/searchmusic">Search Music</NavLink>
            </div>
          </Typography>
        )}
      </Grid>
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

MapMusic.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MapMusic);
