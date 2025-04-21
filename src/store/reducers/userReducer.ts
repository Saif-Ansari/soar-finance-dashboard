import { FETCH_USER_DATA, UPDATE_USER_PROFILE } from '../actions/types';

interface UserState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null
};

export const userReducer = (state = initialState, action: any): UserState => {
  switch (action.type) {
    case FETCH_USER_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case UPDATE_USER_PROFILE:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload
        }
      };
    default:
      return state;
  }
};