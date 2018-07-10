// This file is shared across the demos.

import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import {SidebarTop, SidebarBot} from '../../config'

const outputData = arr => {
  return arr.map(category => (
    <NavLink to={"/" + category.route} key={category.text}>
      <ListItem button>
        <ListItemIcon>{category.icon}</ListItemIcon>
        <ListItemText primary={category.text} />
      </ListItem>
    </NavLink>
  ));
};
export const mailFolderListItems = <div>{outputData(SidebarTop)}</div>;

export const otherMailFolderListItems = <div>{outputData(SidebarBot)}</div>;
