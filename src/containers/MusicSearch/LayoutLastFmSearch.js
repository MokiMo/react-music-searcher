import React, { Component, Fragment } from "react";
import ErrorMessage from "../../components/UI/ErrorMessage";
import FindMusic from "./FindMusic";
import DisplayMusic from "./DisplayMusic/DisplayMusic";
class MusicSearchLastFM extends Component {
	render() {
		return (
			<Fragment>
				<ErrorMessage />
				<FindMusic />
				<DisplayMusic />
			</Fragment>
		);
	}
}

export default MusicSearchLastFM;
