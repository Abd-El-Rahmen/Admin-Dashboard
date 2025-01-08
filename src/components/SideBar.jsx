import React from "react";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import { Avatar, Typography } from "@mui/material";
import sections from "../utils/sections.jsx";
import avatar from "../../public/developer-pic-1.png";
import { useLocation } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open
    ? {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      }
    : {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      }),
}));

const SideBar = ({ handleDrawerClose, open, theme }) => {
  const location = useLocation();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />

      {/* Avatar */}
      <div className="space-y-1 py-2">
        <Avatar
          sx={{ mx: "auto", width: open ? 88 : 44, height: open ? 88 : 44 }}
          alt="abd el rahmen"
          src={avatar}
        />
        {open && (
          <>
            <Typography align="center" sx={{ fontSize: 15 }}>
              Abd El Rahmen
            </Typography>
            <Typography
              align="center"
              sx={{ fontSize: 18 }}
              color={theme.palette.info.main}
            >
              Admin
            </Typography>
          </>
        )}
      </div>

      {/* Sections */}
      <div>
        {sections.map((section, sectionIndex) => (
          <List key={sectionIndex}>
            {section.map(({ text, icon, path }, index) => {
              const isActive = location.pathname === path;

              return (
                <React.Fragment key={text}>
                  <ListItem
                    disablePadding
                    className={`${
                      isActive
                        ? theme.palette.mode === "dark"
                          ? "bg-gray-500"
                          : "bg-gray-300"
                        : ""
                    }`}
                    sx={{
                      display: "block",
                    }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        px: 2.5,
                        justifyContent: open ? "initial" : "center",
                      }}
                      component="a"
                      href={path}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          justifyContent: "center",
                          mr: open ? 3 : "auto",
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={{
                          opacity: open ? 1 : 0,
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  {index === section.length - 1 && <Divider />}
                </React.Fragment>
              );
            })}
          </List>
        ))}
      </div>
    </Drawer>
  );
};

export default SideBar;
