import CommonActionTypes from "../actionTypes/common";

export const setSelectedSection = (section: string) => ({
  type: CommonActionTypes.SET_SELECTED_SECTION,
  payload: section,
});