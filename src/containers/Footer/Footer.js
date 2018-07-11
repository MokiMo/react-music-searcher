import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
export default props => (
  <Paper>
    <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
      <Tab label="All" />
      <Tab label="two" />
      <Tab label="threee" />
      <Tab label="test" />
    </Tabs>
  </Paper>
);
