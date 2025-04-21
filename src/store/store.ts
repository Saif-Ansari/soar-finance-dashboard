import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { ThunkMiddleware } from 'redux-thunk';
import { userReducer } from './reducers/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;


export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as unknown as ThunkMiddleware<RootState, any>)
);