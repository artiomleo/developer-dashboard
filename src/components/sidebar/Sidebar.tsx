import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WidgetsIcon from "@mui/icons-material/Widgets";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";

export default function Sidebar() {
  const drawerWidth = 240;

  const primaryLinks = [
    { title: "Dashboard", link: "dashboard", icon: DashboardIcon },
    { title: "Widgets", link: "widgets", icon: WidgetsIcon },
  ];

  const secondaryLinks = [
    { title: "Information", link: "", icon: InfoIcon },
    { title: "Settings", link: "settings", icon: SettingsIcon },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {primaryLinks.map((item) => (
            <Link key={item.title} to={`/app/${item.link}`}>
              <ListItem key={item.title} disablePadding>
                <ListItemButton>
                  <item.icon style={{ color: "gray" }} />
                  <ListItemText
                    primary={item.title}
                    sx={{ marginLeft: "20px" }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {secondaryLinks.map((item) => (
            <Link key={item.title} to={`/app/${item.link}`}>
              <ListItem key={item.title} disablePadding>
                <ListItemButton>
                  <item.icon style={{ color: "gray" }} />
                  <ListItemText
                    primary={item.title}
                    sx={{ marginLeft: "20px" }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
