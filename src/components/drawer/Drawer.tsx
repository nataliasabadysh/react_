import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, List, Avatar } from "@mui/material";

import { Toolbar, Typography } from "@mui/material";

import { Drawer, AppBar, StyledBadge } from "./DrawerStyles";
import { navigation } from "navigation/navigation";
import { NavigationItem } from "./NavigationItem";

interface NavigationItem {
  name: string;
}

interface Navigation {
  root: NavigationItem[];
  materials: NavigationItem[];
  resources: NavigationItem[];
  community: NavigationItem[];
}

interface DrawerProps {
  open: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
  navigation: Navigation;
}

const sections: (keyof Navigation)[] = [
  "root",
  "materials",
  "resources",
  "community",
];

interface FooterProps {
  children: React.ReactNode;
}

export const AppDrawer: React.FC<FooterProps> = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ marginTop: 90 }}>
      <Box sx={{ display: "flex" }}>
        {/* <CssBaseline /> */}
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                logo
              </Typography>
            </Toolbar>
            <Toolbar>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </StyledBadge>
            </Toolbar>
          </div>
        </AppBar>

        <Drawer
          variant="permanent"
          open={open}
          onMouseOver={handleDrawerOpen}
          onMouseLeave={handleDrawerClose}
        >
          <List>
            {sections.map((section) =>
              navigation[section].map((text, index) => (
                <NavigationItem
                  key={text.name}
                  text={text}
                  index={index}
                  open={open}
                />
              )),
            )}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {children}
        </Box>
      </Box>
    </div>
  );
};
