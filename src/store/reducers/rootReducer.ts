import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
  weather: weatherReducer
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;