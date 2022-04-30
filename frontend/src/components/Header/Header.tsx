import React from 'react';

import { AppBar, Button, Container, MenuItem, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';

const title = 'Kagami';

const Header = () => {
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
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <MenuItem key='New'>
              <Typography textAlign='center' onClick={() => handlePage('new')}>
                New
              </Typography>
            </MenuItem>
          </Box>
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
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <Button key='New' onClick={() => handlePage('new')} sx={{ my: 2, color: 'white', display: 'block' }}>
              New
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
