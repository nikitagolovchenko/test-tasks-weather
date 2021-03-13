import { WeatherAction, WeatherActions, WeatherState } from '../types';

const initialState: WeatherState = {
  language:{
    languages: ['ru', 'en'],
    currentLanguage: 'ru'
  },
  loading: false,
  error: '',
  geolocation: {
    weather: null,
    error: '',
  },
};

const weatherReducer = (
  state = initialState,
  action: WeatherAction
): WeatherState => {
  switch (action.type) {
    case WeatherActions.WEATHER_ERROR:
      return { ...state, error: action.payload };

    case WeatherActions.WEATHER_LOADING:
      return { ...state, loading: action.payload };

    case WeatherActions.GEOLOCATION_ERROR:
      return {
        ...state,
        geolocation: { weather: null, error: action.payload },
      };

    case WeatherActions.GEOLOCATION_SUCCESS:
      return { ...state, geolocation: { weather: action.payload, error: '' } };

    case WeatherActions.SET_LANGUAGE:
      return { ...state, language: { ...state.language, currentLanguage: action.payload} }

    default:
      return state;
  }
};

export default weatherReducer;
