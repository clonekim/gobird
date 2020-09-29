import React, { useState } from "react";
import clsx from "clsx";
import {  
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuList,
  MenuItem,
  Button
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BuildIcon from "@material-ui/icons/Build";
import MailIcon from "@material-ui/icons/Mail";
import AddIcon from "@material-ui/icons/Add";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useStyles} from './style';
import Dashboard from "./Dashboard";
import Host from "./Host";
import Template from "./Template";
import Customer from "./Customer";


const lists = [
  { name: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { name: "Hosts", icon: <LayersIcon />, path: "/host" },
  { name: "Templates", icon: <AssignmentIcon />, path: "/template" },
  { name: "Customer", icon: <PeopleIcon />, path: "/customer" },
  { name: "Batch", icon: <BuildIcon />, path: '/batch' }
];

function App() {
  const classes = useStyles();

  const [open, setOpen] = useState(true);
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };



  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />

        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })} >
          <Toolbar >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)} >
              <MenuIcon />
            </IconButton>
            <MailIcon /> <Typography variant="h6" noWrap className={classes.title}>&nbsp; Go Bird </Typography>
            <MenuList>
            <Switch>
          
             
              <Route path="/host">
              <MenuItem>
                <Button variant="contained" startIcon={<AddIcon />}>New</Button>
              </MenuItem>
               
              </Route>
              
            </Switch>
            </MenuList>
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {lists.map((item, index) => (
              <Link to={item.path} key={index}>
                <ListItem button key={item.name}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.name}</ListItemText>
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />

          <Switch>
            <Route path="/host">
              <Host />
            </Route>
            <Route path="/template">
              <Template />
            </Route>
            <Route path="/customer">
              <Customer />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
