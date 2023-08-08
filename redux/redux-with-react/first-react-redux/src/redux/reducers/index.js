import { combineReducers } from "redux";
import todoReducer from "../ducks/todoDuck";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;
