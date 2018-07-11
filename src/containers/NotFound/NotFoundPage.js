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
class NotFoundPage extends Component {
  render() {
    return (
      <Fragment>
        <Paper style={style.Paper}>
          <Typography variant="display1" align="center" style={style.Paper}>
            - <NavLink to={"/SearchMusic"}>Search Music</NavLink><br />
            - <NavLink to={"/FavoriteMusic"}>Favorite Music</NavLink>
          </Typography>

          <Typography variant="display1" align="center" style={style.Paper}>
            - React<br />
            - Redux<br />
            - Redux Sagas <br />
            - React Router<br />
            - Code splitting<br />
            - Material UI <br />
          </Typography>

          <Typography variant="caption" align="center" style={style.Paper}>
            Disclaimer: This app was made solely to demonstrate basic knowledge.
            Alot of the used technologies, such as redux, redux sagas and axios
            are "too much" for a project like this. But they lay a nice
            foundation for scaling this app.<br/><br/>
            React router in combination with redux handling the lifecycle's for components,
            makes this very scalable and could turn into a enterprise-sized application easily, without perfomance issues.
          </Typography>
        </Paper>
      </Fragment>
    );
  }
}

export default NotFoundPage;
