import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk, ThunkMiddleware } from "redux-thunk";
import { commonReducer } from "./reducers/commonReducer";
import CommonActionTypes from "./actionTypes/common"; // assuming it's a named export
import { dashboardReducer } from "./reducers/dashbaordReducer";
import DashboardActionTypes from "./actionTypes/dashboard";

// Combine reducers
const rootReducer = combineReducers({
  common: commonReducer,
  dashboard: dashboardReducer,
});

// Derive the state shape from the root reducer
export type AppState = ReturnType<typeof rootReducer>;
export type AppActionTypes = CommonActionTypes | DashboardActionTypes;
export type AppAction = {
  type: AppActionTypes;
  payload?: any;
};

// Create the store with typed thunk middleware
export const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(thunk as unknown as ThunkMiddleware<AppState, AppAction>)
);
