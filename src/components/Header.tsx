import {
  AppBar,
  Toolbar,
  Typography,
  Box,
} from '@material-ui/core';
import moment from 'moment';
import React from 'react';

const Header: React.FC = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6'>React Weather App</Typography>
        <Box ml='auto'>{moment().format('dddd')} - {moment().format("MMM Do YY")}</Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
