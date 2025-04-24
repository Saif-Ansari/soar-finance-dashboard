import { CommonAction, CommonActionPayload, CommonState } from "../types/common";
import CommonActionTypes from "../actionTypes/common";

const initialState: CommonState = {
  selectedSection: "Dashboard",
};

export const commonReducer = (
  state = initialState,
  action: CommonAction<CommonActionPayload>
): CommonState => {
  switch (action.type) {
    case CommonActionTypes.SET_SELECTED_SECTION:
      return {
        ...state,
        selectedSection: action.payload as string,
      };

    default:
      return state;
  }
};
