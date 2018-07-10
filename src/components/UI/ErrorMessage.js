import React from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import { connect } from "react-redux";

const ErrorMessage = ({ error }) => (
  <Snackbar
    anchorOrigin={{vertical: "bottom", horizontal: "left"}}
    open={error ? true : false}
    ContentProps={{
      "aria-describedby": "message-id"
    }}
    message={<span id="message-id">Error. Please try again</span>}
  />
);

export default connect(state => ({
  error: state.app.error
}))(ErrorMessage);

