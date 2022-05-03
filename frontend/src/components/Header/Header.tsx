import React, { MouseEvent, useContext, useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';

import { AuthContext } from '@/firebase/authContext';

const title = 'Kagami';

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { accountName, userName } = useContext(AuthContext);
  const router = useRouter();
  const handlePage = (page: string) => {
    router.replace(`/${page}`);
  };

  return (
    <AppBar position='static' sx={{ mb: 3 }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            onClick={() => handlePage('')}
            noWrap
            component='div'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            {title}
          </Typography>
          {accountName ?? (
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'node' },
                }}
              >
                <MenuItem key='New' onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>New</Typography>
                </MenuItem>
                <MenuItem key='AccountName' onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{accountName}</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
          {/* size */}
          <Typography
            variant='h6'
            onClick={() => handlePage('')}
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button key='New' onClick={() => handlePage('new')} sx={{ my: 2, color: 'white', display: 'block' }}>
              New
            </Button>
            <Button
              key='AccountName'
              onClick={() => handlePage(userName)}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {accountName}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
