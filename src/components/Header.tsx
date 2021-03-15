import {
  AppBar,
  Toolbar,
  Typography,
  Box,
} from '@material-ui/core';
import React from 'react';

const Header: React.FC = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6'>React Weather App</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
