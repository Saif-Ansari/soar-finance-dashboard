import CommonActionTypes from "../actionTypes/common";

interface BaseCommonAction {
  type: CommonActionTypes;
}

export type CommonActionPayload = string | null;

export type CommonAction<P = undefined> = P extends undefined
  ? BaseCommonAction
  : BaseCommonAction & { payload: P };

export interface CommonState {
  selectedSection: string;
}

export enum APICallStatus {
  INITIAL = "INITIAL",
  LOADING = "LOADING",
  LOADED = "LOADED",
  ERROR = "ERROR",
}
