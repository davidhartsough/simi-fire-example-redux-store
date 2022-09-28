import { combineReducers } from "redux";

import auth from "./auth/slice";
import things from "./things/slice";
import groups from "./groups/slice";

const appReducer = combineReducers({
  auth,
  things,
  groups,
});

const rootReducer = (state: any, action: any) => {
  let newState = state;
  if (action.type === "CLEAR_STATE_RESET") {
    newState = undefined;
  }
  return appReducer(newState, action);
};

export default rootReducer;
