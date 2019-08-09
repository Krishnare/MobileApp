import { combineReducers } from "redux";
import surveyReducer from "./surveyReducer";
import cropReducer from "./cropReducer";
export default combineReducers({
  survey: surveyReducer,
  crop: cropReducer
});
