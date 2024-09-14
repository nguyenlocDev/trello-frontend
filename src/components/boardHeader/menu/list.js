import Recent from "./Recent";
import Starred from "./Starred";
import Templates from "./Templates";
import Workspaces from "./Workspaces";

export const listMenu = [
  {
    title: "Workspaces",
    id: "workspaces",
    Component: Workspaces,
  },
  {
    title: "Recent",
    id: "recent",
    Component: Recent,
  },
  {
    title: "Starred",
    id: "starred",
    Component: Starred,
  },
  {
    title: "Templates",
    id: "templates",
    Component: Templates,
  },
];
