import { WeatherAction, WeatherActions, WeatherState } from '../types';

const initialState: WeatherState = {
  loading: false,
  error: '',
  geolocation: {
    weather: null,
    error: '',
  },
  cities: [],
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

    case WeatherActions.CITIES_SUCCESS:
      const correctCity = state.cities
        ? state.cities.find(el => el.id === action.payload.id)
        : [];

      if (!correctCity) {
        return {
          ...state,
          cities: [...state.cities, action.payload],
          error: '',
        };
      } else {
        return { ...state, error: '' };
      }

    case WeatherActions.CITIES_DELETE:
      return {
        ...state,
        cities: state.cities.filter(el => el.id !== action.payload),
      };

    case WeatherActions.REMOVE_ERROR:
      return { ...state, error: '' };

    default:
      return state;
  }
};

export default weatherReducer;
