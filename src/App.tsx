import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Progress from './components/Progress';
import Wrapper from './components/Wrapper';
import { RootState } from './store/reducers/rootReducer';
import { getGeolocation } from './store/actions/weatherActions';
import UserWeather from './components/UserWeather';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state: RootState) => state.weather);

  useEffect(() => {
    dispatch(getGeolocation());
  }, [])

  return (
    <Wrapper>
      <Progress loading={weather.loading}/>
      <UserWeather/>
    </Wrapper>
  );
}

export default App;
