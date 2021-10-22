import React, { useState } from 'react';
import { Avatar, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import ExpandIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export default function ProfileDropdown() {
  const [anchorEl, setAnchorEl] = useState<null|HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClickProfile = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.currentTarget.offsetWidth);
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ListItemButton dense sx={{ px: 1 }} onClick={handleClickProfile}>
        <ListItemAvatar sx={{ mr: { xs: 0, sm: 1.5 } }} style={{ minWidth: 0 }}>
          <Avatar src="https://next.material-ui.com/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText primary="Daniel Ramirez" secondary="Acme, Inc." sx={{ my: 0, mr: 1, display: { xs: 'none', md: 'block' } }} />
        <ExpandIcon fontSize="small" sx={{ color: (theme) => theme.palette.text.secondary }} />
      </ListItemButton>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 2,
          style: { width: 200, maxWidth: '100%' }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}
