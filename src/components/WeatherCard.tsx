import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  makeStyles,
  Theme,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React, { useState } from 'react';
import { Weather } from '../store/types';

interface WeatherCardProps extends Weather {
  primaryMain?: boolean;
  deleteCard?: (id: number) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    position: 'relative',
  },
  cardMenu: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(0),
  },
}));

const WeatherCard: React.FC<WeatherCardProps> = props => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClose = () => {
    if (props.deleteCard) {
      props.deleteCard(props.id);
    }

    setAnchorEl(null);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        {!props.primaryMain && (
          <Box className={classes.cardMenu}>
            <IconButton
              aria-label='more'
              aria-controls='long-menu'
              aria-haspopup='true'
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id='long-menu'
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleMenuClose}>delete</MenuItem>
            </Menu>
          </Box>
        )}
        <Box display='flex' alignItems='center'>
          <Box flexShrink='0'>
            <Typography
              variant={props.primaryMain ? 'h4' : 'h5'}
              color={props.primaryMain ? 'primary' : 'textPrimary'}
              noWrap
            >
              {props.name} - {props.sys.country}
            </Typography>
          </Box>
          <Box ml={2} display='flex' alignItems='center'>
            <img
              src={`${process.env.REACT_APP_API_IMG}/${props.weather[0].icon}.png`}
              alt={props.weather[0].description}
            />
            <Typography>{props.weather[0].description}</Typography>
          </Box>
        </Box>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant={props.primaryMain ? 'h5' : 'h6'}>
              Temp
            </Typography>
            <Typography>
              temp: <strong>{props.main.temp}</strong> &#8451;
            </Typography>
            <Typography>
              temp-min: <strong>{props.main.temp_min}</strong> &#8451;
            </Typography>
            <Typography>
              temp-max: <strong>{props.main.temp_max}</strong> &#8451;
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h5'>Wind</Typography>
            <Typography>
              wind speed: <strong>{props.wind.speed}</strong> m/s
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
