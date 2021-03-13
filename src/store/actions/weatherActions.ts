import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers/rootReducer";
import { WeatherAction, WeatherActions } from "../types";

export const getGeolocation = (): ThunkAction<void, RootState, null, WeatherAction> => {
  return async (dispatch, getState) => {
    dispatch(weatherLoading(true));

    try {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const {latitude, longitude} = position.coords;
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}&lang=${getState().weather.language.currentLanguage}&units=metric`);

        dispatch({
          type: WeatherActions.GEOLOCATION_SUCCESS,
          payload: data
        });
        dispatch(weatherLoading(false));

      }, (position) => {
        dispatch({
          type: WeatherActions.GEOLOCATION_ERROR,
          payload: position.message
        })
        dispatch(weatherLoading(false));
      })

    } catch(error) {
      dispatch(weatherError(error.message))
      dispatch(weatherLoading(false));
    }
  }
}

export const weatherLoading = (loading: boolean): WeatherAction => {
  return {
    type: WeatherActions.WEATHER_LOADING,
    payload: loading
  }
}

export const weatherError = (message: string): WeatherAction => {
  return {
    type: WeatherActions.WEATHER_ERROR,
    payload: message
  }
}

export const setLanguage = (language: 'ru' | 'en'): WeatherAction => {
  return {
    type: WeatherActions.SET_LANGUAGE,
    payload: language
  }
}