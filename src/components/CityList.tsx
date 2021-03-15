import { Grid, Grow, Box } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { citiesDelete } from '../store/actions/weatherActions';
import { RootState } from '../store/reducers/rootReducer';
import Weather from './WeatherCard';

const CityList: React.FC = () => {
  const weather = useSelector((state: RootState) => state.weather);
  const dispatch = useDispatch();

  const deleteCard = (id: number): void => {
    dispatch(citiesDelete(id));
  };

  return (
    <Box mb={3}>
      {!weather.cities && (
        <Alert severity='info'>You don't have cities</Alert>
      )}
      {weather.cities && (
        <Grid container spacing={2}>
          {weather.cities.map((el, index) => (
            <Grow
              in={true}
              style={{ transformOrigin: '0 0 0' }}
              {...(true ? { timeout: 1000 + index * 300 } : {})}
              key={index}
            >
              <Grid item xs={6}>
                <Weather {...el} deleteCard={deleteCard} />
              </Grid>
            </Grow>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default CityList;
