export interface Weather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  id: number;
  name: string;
  cod: number;
}

export enum WeatherActions {
  WEATHER_LOADING = 'WEATHER_LOADING',
  WEATHER_ERROR = 'WEATHER_ERROR',
  GEOLOCATION_SUCCESS = 'GEOLOCATION_SUCCESS',
  GEOLOCATION_ERROR = 'GEOLOCATION_ERROR',
  SET_LANGUAGE = 'SET_LANGUAGE'
}

export interface WeatherState {
  language: {
    languages: ['ru', 'en'];
    currentLanguage: 'ru' | 'en';
  };
  loading: boolean;
  error: string;
  geolocation: {
    weather: Weather | null;
    error: string;
  };
}

interface WeatherLoadingAction {
  type: WeatherActions.WEATHER_LOADING;
  payload: boolean;
}

interface WeatherErrorAction {
  type: WeatherActions.WEATHER_ERROR;
  payload: string;
}

interface GeolocationErrorAction {
  type: WeatherActions.GEOLOCATION_ERROR;
  payload: string;
}

interface GeolocationSuccessAction {
  type: WeatherActions.GEOLOCATION_SUCCESS;
  payload: Weather;
}

interface SetLanguageAction {
  type: WeatherActions.SET_LANGUAGE;
  payload: 'ru' | 'en';
}

export type WeatherAction =
  | WeatherLoadingAction
  | WeatherErrorAction
  | GeolocationErrorAction
  | GeolocationSuccessAction
  | SetLanguageAction;
