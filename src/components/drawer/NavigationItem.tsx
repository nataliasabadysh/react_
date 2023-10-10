import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";

interface NavigationItemProps {
  text: { name: string; icon: any };
  index: number;
  open: boolean;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  text,
  index,
  open,
}) => {
  const stylesButton = {
    minHeight: 48,
    justifyContent: open ? "initial" : "center",
    px: 2.5,
  };

  const stylesIcon = {
    minWidth: 0,
    mr: open ? 3 : "auto",
    justifyContent: "center",
  };

  return (
    <ListItem disablePadding sx={{ display: "block" }} key={text.name}>
      <ListItemButton sx={stylesButton}>
        <ListItemIcon sx={stylesIcon}>{text.icon}</ListItemIcon>
        <ListItemText primary={text.name} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
};
