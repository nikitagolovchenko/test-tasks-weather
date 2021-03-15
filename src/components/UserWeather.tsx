import { Box, Divider } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers/rootReducer';
import Weather from './WeatherCard';

const UserWeather: React.FC = () => {
  const weather = useSelector((state: RootState) => state.weather);

  return (
    <>
      <Box mb={3}>
        {weather.geolocation.error && (
          <Alert severity='info'>{weather.geolocation.error}</Alert>
        )}
        {weather.geolocation.weather && (
          <Weather {...weather.geolocation.weather} primaryMain={true} />
        )}
      </Box>
      <Box mb={3}>
        <Divider />
      </Box>
    </>
  );
};

export default UserWeather;
