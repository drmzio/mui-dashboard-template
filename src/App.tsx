import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Toolbar,
  AppBar,
  IconButton,
  Tooltip,
  Divider,
  ListItemAvatar,
  Avatar,
  InputBase,
  InputAdornment, Typography, Stack, Button, Container, useMediaQuery, Paper, Link, ListItemButton, TextField, MenuItem
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import DesktopWindowsOutlinedIcon from '@material-ui/icons/DesktopWindowsOutlined';
import WifiTetheringOutlinedIcon from '@material-ui/icons/WifiTetheringOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@material-ui/icons/Create';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExpandMore from '@material-ui/icons/ExpandMore';
import OrgSelection from './components/OrgSelection';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: drawerWidth,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      boxSizing: 'border-box'
    }
  },
  main: {
    backgroundColor: theme.palette.grey[100],
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      marginLeft: drawerWidth,
    }
  },
  toolbar: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: drawerWidth,
    }
  }
}));

function App() {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width: 600px)');
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Drawer
        open={open}
        variant={matches ? 'permanent' : 'temporary'}
        anchor="left"
        onClose={() => setOpen(false)}
        className={classes.drawer}
      >
        <AppBar position="relative" color="transparent" elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
          <Toolbar sx={{ px: { sm: 2 } }}>
            <Link href="/" style={{ width: 151, height: 30, display: 'block' }}>
              <img src={`/logo.svg`} width={151} height={30} alt="Logo" />
            </Link>
          </Toolbar>
        </AppBar>
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ px: 2, pt: 2 }}>
            <OrgSelection />
          </Box>
          <List component="nav">
            <Box sx={{ position: 'relative' }}>
              <ListItem button>
                <ListItemIcon>
                  <DesktopWindowsOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Website" />
              </ListItem>
              <Box sx={{ position: 'absolute', top: 0, right: 0, margin: 1 }}>
                <Tooltip title="Preview">
                  <IconButton size="small">
                    <VisibilityOutlinedIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
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
          <List component="nav">
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
      <AppBar color="default" elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
        <Toolbar className={classes.toolbar}>
          <Box sx={{ mr: 1, display: { xs: 'block', sm: 'none' } }}>
            <IconButton size="large" edge="start" color="inherit" onClick={() => setOpen(!open)}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <Link href="/" style={{ width: 151, height: 30, display: 'block' }}>
              <img src={`/logo.svg`} width={151} height={30} alt="Logo" />
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <InputBase
              placeholder="Search for anything..."
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ mr: -1 }}>
            <ListItemButton dense sx={{ p: 0 }}>
              <ListItemAvatar sx={{ mr: { xs: 0, sm: 1.5 } }} style={{ minWidth: 0 }}>
                <Avatar src="https://next.material-ui.com/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText primary="Daniel Ramirez" secondary="Acme, Inc." sx={{ my: 0, mr: 1, display: { xs: 'none', md: 'block' } }} />
              <ExpandMore fontSize="small" sx={{ color: (theme) => theme.palette.text.secondary }} />
            </ListItemButton>
          </Box>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        <Toolbar />
        <Box sx={{ flexGrow: 1, py: 3 }}>
          <Container maxWidth="lg">
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              <Button color="inherit" startIcon={<ChevronLeftIcon />} sx={{ color: 'text.secondary' }}>
                Back to Products
              </Button>
            </Stack>
            <Typography variant="h4" gutterBottom>My Product</Typography>
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              <Button color="inherit" startIcon={<CreateIcon />} sx={{ color: 'text.secondary' }}>
                Edit Details
              </Button>
              <Button color="inherit" startIcon={<VisibilityIcon />} sx={{ color: 'text.secondary' }}>
                Preview
              </Button>
              <Button color="inherit" startIcon={<ColorLensIcon />} sx={{ color: 'text.secondary' }}>
                Customize
              </Button>
            </Stack>
            <Paper sx={{ p: 4 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dicta eius error incidunt ipsam, maxime natus nihil, odit porro possimus provident quaerat quam quasi quod tempora tempore tenetur ut vero.
            </Paper>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda enim facilis impedit iste neque tenetur. Ab accusamus animi aut blanditiis consequuntur facilis id optio porro tempore? Ab, illum sit.
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore iusto sed totam voluptatum! Accusamus consequatur dolorum ea esse natus obcaecati quod repellendus similique, sunt. Atque cum dolores veritatis voluptates?</p>
          </Container>
        </Box>
      </main>
    </div>
  );
}

export default App;
