import { MouseEvent, useContext, useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Avatar,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { AuthContext } from '@/firebase/authContext';

import stringAvatar from './utils';

const logo = 'Kagami';
const pages: string[] = [];
const authPages = ['new'];

export const ResponsiveAppBar = () => {
  const { accountName, userName } = useContext(AuthContext);
  const settings = [
    { name: 'Profile', route: `/${userName}` },
    { name: 'Logout', route: '/logout' },
  ];
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const redirectIndex = () => {
    router.push('/');
  };

  return (
    <AppBar position='static' sx={{ mb: 3 }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='div'
            onClick={redirectIndex}
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            {logo}
          </Typography>

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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link href={`/${page}`} passHref>
                    <Typography textAlign='center'>{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
              {userName &&
                authPages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link href={`/${page}`} passHref>
                      <Typography textAlign='center'>{page}</Typography>
                    </Link>
                  </MenuItem>
                ))}
            </Menu>
          </Box>
          <Typography
            variant='h6'
            noWrap
            component='div'
            onClick={redirectIndex}
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            {logo}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link key={page} href={`/${page}`} passHref>
                <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                  {page}
                </Button>
              </Link>
            ))}
            {userName &&
              authPages.map((page) => (
                <Link key={page} href={`/${page}`} passHref>
                  <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                    {authPages}
                  </Button>
                </Link>
              ))}
          </Box>

          {userName && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar {...stringAvatar(accountName)} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                    <Link href={setting.route} passHref>
                      <Typography textAlign='center'>{setting.name}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
