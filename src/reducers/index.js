import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

const initialState = {
  // users: {},
};
const defaultReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  // default: defaultReducer,
  contact: contactReducer,
});
