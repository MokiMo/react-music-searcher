import React, { Component, Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { NavLink } from "react-router-dom";
const style = {
  Paper: {
    marginLeft: 60,
    marginRight: 60,
    marginTop: 30,
    padding: 15
  }
};
class Dashboard extends Component {
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
            Dashboard.<br/><br/>
           {" <Business Content>"}<br/>...<br/>...<br/>...
          </Typography>
          <Typography variant="display1" align="center" style={style.Paper}>
            Demo Features<br/>
            - <NavLink to={"/SearchMusic"}>Search Music</NavLink><br />
            - <NavLink to={"/FavoriteMusic"}>Favorite Music</NavLink>
          </Typography>
        </Paper>
      </Fragment>
    );
  }
}

export default Dashboard;
