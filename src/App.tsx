import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Progress from './components/Progress';
import Wrapper from './components/Wrapper';
import { RootState } from './store/reducers/rootReducer';
import { getGeolocation, removeError } from './store/actions/weatherActions';
import UserWeather from './components/UserWeather';
import Search from './components/Search';
import CityList from './components/CityList';
import { Alert } from '@material-ui/lab';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state: RootState) => state.weather);

  useEffect(() => {
    dispatch(removeError());
    dispatch(getGeolocation());
  }, []);

  return (
    <Wrapper>
      <Progress loading={weather.loading} />
      <UserWeather />
      <Search />
      {weather.error && <Alert severity='error'>{weather.error}</Alert>}
      <CityList />
    </Wrapper>
  );
};

export default App;
