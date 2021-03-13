import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Box,
} from '@material-ui/core';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers/rootReducer';
import { makeStyles, Theme } from '@material-ui/core';
import { setLanguage } from '../store/actions/weatherActions';
import { getGeolocation } from './../store/actions/weatherActions';

const useStyles = makeStyles((theme: Theme) => ({
  menuBtn: {
    textTransform: 'lowercase',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    color: 'inherit',
    minWidth: 'auto',
    fontSize: theme.typography.body1.fontSize,
  },
  activeItem: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.info.light,
    },
  },
}));

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state: RootState) => state.weather);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItemClickhandler = (event: React.MouseEvent<HTMLLIElement>) => {
    const lang: string = event.currentTarget.textContent as string;
    dispatch(setLanguage(lang as 'ru' | 'en'));
    dispatch(getGeolocation());
    setAnchorEl(null);
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6'>React Weather App</Typography>
        <Box ml='auto'>
          <Button
            aria-controls='simple-menu'
            aria-haspopup='true'
            onClick={handleClick}
            className={classes.menuBtn}
          >
            {language.currentLanguage}
          </Button>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {language.languages.map((el, index) => (
              <MenuItem
                onClick={menuItemClickhandler}
                className={
                  el === language.currentLanguage ? classes.activeItem : ''
                }
                key={index}
              >
                {el}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
