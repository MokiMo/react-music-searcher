import React from "react";
import { connect } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";

const loading = ({ loading }) =>
	loading ? <LinearProgress color="secondary" /> : null;

export default connect(state => ({
	loading: state.app.loading
}))(loading);
