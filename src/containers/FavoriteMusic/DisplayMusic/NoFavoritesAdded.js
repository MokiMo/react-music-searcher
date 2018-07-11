import React, { Component, Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const style = {
  Paper: {
    margin: 80,
    padding: 15
  }
};
class NoFavoritesAdded extends Component {
  render() {
    return (
      <Fragment>
        <Paper style={style.Paper}>
          <Typography
            variant="display1"
            align="center"
            style={style.Paper}
            gutterBottom
          >
            Please search for music first.
          </Typography>
        </Paper>
      </Fragment>
    );
  }
}

export default NoFavoritesAdded;
