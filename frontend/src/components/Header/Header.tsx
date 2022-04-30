import React from 'react';

import { AppBar, Button, Container, MenuItem, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Header = () => {
  return (
    <AppBar position='static' sx={{ mb: 3 }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography variant='h6' noWrap component='div' sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <MenuItem key='New'>
              <Typography textAlign='center'>New</Typography>
            </MenuItem>
          </Box>
          {/* size */}
          <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <Button key='New' sx={{ my: 2, color: 'white', display: 'block' }}>
              New
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
