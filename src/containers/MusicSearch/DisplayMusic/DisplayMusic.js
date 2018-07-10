import { connect } from "react-redux";
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
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
	}
});

class displayTracks extends React.Component {
	render() {
		const { classes, tracks } = this.props;
		console.log(tracks)
		return tracks.length > 0 ? (
			<ExpansionPanel className={classes.expansionPanel} defaultExpanded>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading} variant="display2">
						Tracks
					</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Grid container spacing={0} justify="center">
						{tracks.map(track => (
							<Paper className={classes.margin} key={track.name}>
								<div className="overlay">
									<img
										src={track.image["3"]["#text"]}
										alt="Music found on Lastfm"
									/>
									<a href={track.url} target="_blank" className="playWrapper" > </a>
								</div>
								<Typography
									variant="display1"
									className={classes.track}
								>
									{track.name} <Favorite name={track.name} />
								</Typography>
								<Typography
									variant="body2"
									className={classes.artist}
								>
									{track.artist}
								</Typography>
							</Paper>
						))}
					</Grid>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		) : (
			<div />
		);
	}
}

displayTracks.propTypes = {
	classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		tracks: state.musicSearch.tracks
	};
}
const styledDisplayTracks = withStyles(styles)(displayTracks);
export default connect(mapStateToProps)(styledDisplayTracks);
