import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdPerson
} from "react-icons/md";

import { GiAbstract065, GiChoice } from "react-icons/gi";


// Admin Imports
import MainDashboard from "views/admin/default";
import ControlPannel from "views/admin/dao";
import Profile from "views/admin/profile";
const routes = [
  {
    name: "Moon Mission",
    layout: "/admin",
    path: "/MoonMission",
    icon: <Icon as={GiAbstract065} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Control Panel  DAO",
    layout: "/admin",
    path: "/ControlPanel",
    icon: (
      <Icon
        as={GiChoice}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: ControlPannel,
    secondary: true,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  }, 
];

export default routes;
