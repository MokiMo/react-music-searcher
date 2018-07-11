import React from "react";
import DynamicImport from "./router/DynamicImport.js";
import MusicNote from "@material-ui/icons/MusicNote";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import StarIcon from "@material-ui/icons/Star";
import MailIcon from "@material-ui/icons/Mail";
import DeleteIcon from "@material-ui/icons/Delete";
import ReportIcon from "@material-ui/icons/Report";

const dev = true;
export const authenticated = dev ? true : false;

// Creating new route
// 1) new Async-component
// 2) add route to the route-array, path:component
// 3) add to sidebar
export const NotFoundPage = props => (
  <DynamicImport load={() => import("./containers/NotFound/NotFoundPage")}>
    {Component =>
      Component === null ? <p>Loading</p> : <Component {...props} />
    }
  </DynamicImport>
);

const Dashboard = props => (
  <DynamicImport load={() => import("./containers/Dashboard/Dashboard")}>
    {Component =>
      Component === null ? <p>Loading</p> : <Component {...props} />
    }
  </DynamicImport>
);

const Loading = props => (
  <DynamicImport load={() => import("./containers/Loading/Loading")}>
    {Component =>
      Component === null ? <p>Loading</p> : <Component {...props} />
    }
  </DynamicImport>
);

const LayoutLastFmSearch = props => (
  <DynamicImport
    load={() => import("./containers/MusicSearch/LayoutLastFmSearch")}
  >
    {Component =>
      Component === null ? <p>Loading</p> : <Component {...props} />
    }
  </DynamicImport>
);
const FavoriteMusic = props => (
  <DynamicImport
    load={() => import("./containers/FavoriteMusic/FavoriteMusic")}
  >
    {Component =>
      Component === null ? <p>Loading</p> : <Component {...props} />
    }
  </DynamicImport>
);

export const routes = [
  { path: "/SearchMusic", component: LayoutLastFmSearch },
  { path: "/FavoriteMusic", component: FavoriteMusic },
  { path: "/loading", component: Loading },
  { path: "/dashboard", component: Dashboard },
  { path: "*", component: NotFoundPage }
];

export const SidebarTop = [
  { text: "Dashboard", icon: <InboxIcon />, route: "dashboard" },
  { text: "Search Music", icon: <MusicNote />, route: "SearchMusic" },
  { text: "Favorite Music", icon: <StarIcon />, route: "FavoriteMusic" },
  { text: "E-Mails*", icon: <DraftsIcon />, route: "emails" }
];

export const SidebarBot = [
  { text: "All E-Mails*", icon: <MailIcon />, route: "all_emails" },
  { text: "Trash*", icon: <DeleteIcon />, route: "trash" },
  { text: "Spam*", icon: <ReportIcon />, route: "spam" }
];
