import { CommonAction, CommonActionPayload } from "../types/common";
import CommonActionTypes from "../actionTypes/common";

export interface CommonState {
  userData: any;
  selectedSection: string;
}

const initialState: CommonState = {
  selectedSection: "Dashboard",
  userData: null,
};

export const commonReducer = (state = initialState, action: CommonAction<CommonActionPayload>): CommonState => {
  switch (action.type) {
    case CommonActionTypes.SET_SELECTED_SECTION:
      return {
        ...state,
        selectedSection: action.payload as string,
      };

    case CommonActionTypes.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};
