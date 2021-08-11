import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import DesktopWindowsOutlinedIcon from '@material-ui/icons/DesktopWindowsOutlined';
import WifiTetheringOutlinedIcon from '@material-ui/icons/WifiTetheringOutlined';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      boxSizing: 'border-box'
    }
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <Drawer
        variant="permanent"
        anchor="left"
        className={classes.drawer}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Toolbar>
            <img src="https://tailwindui.com/img/logos/easywire-logo-purple-600-mark-gray-900-text.svg" alt=""/>
          </Toolbar>
          <List>
            <ListItem button>
              <ListItemIcon>
                <DesktopWindowsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Website" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <StorefrontOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LocalOfferOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Sales" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <WifiTetheringOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Marketing" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AccountCircleOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="People" />
            </ListItem>
          </List>
        </Box>
        <Box>
          <List>
            <ListItem button>
              <ListItemIcon>
                <SettingsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <HelpOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Help" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

export default App;
