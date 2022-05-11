import { combineReducers } from "redux";
import { roomTypes } from "./roomTypes";
import { info } from "./info";
export const rootReducer = combineReducers({
  info,
  roomTypes,
});
