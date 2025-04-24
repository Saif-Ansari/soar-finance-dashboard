import { Dispatch } from "redux";
import DashboardActionTypes from "../actionTypes/dashboard";
import { CardInfo, Expense, Transaction } from "../types/dashboard";
import { APICallStatus } from "../types/common";
import {
  mockFetchCards,
  mockFetchExpenses,
  mockFetchTransactions,
  mockFetchWeeklyActivity,
} from "../../mocks/api";

export const setCardsData = (payload: CardInfo[]) => {
  return {
    type: DashboardActionTypes.SET_CARDS_DATA,
    payload: payload,
  };
};

export const setCardsDataAPIStatus = (payload: APICallStatus) => {
  return {
    type: DashboardActionTypes.SET_CARDS_DATA_API_STATUS,
    payload: payload,
  };
};

export const setRecentTransactions = (payload: Transaction[]) => {
  return {
    type: DashboardActionTypes.SET_RECENT_TRANSACTIONS,
    payload: payload,
  };
};
export const setRecentTransactionsAPIStatus = (payload: APICallStatus) => {
  return {
    type: DashboardActionTypes.SET_RECENT_TRANSACTIONS_API_STATUS,
    payload: payload,
  };
};

export const setWeeklyActivity = (payload: any[]) => {
  return {
    type: DashboardActionTypes.SET_WEEKLY_ACTIVITY,
    payload: payload,
  };
};

export const setWeeklyActivityAPIStatus = (payload: APICallStatus) => {
  return {
    type: DashboardActionTypes.SET_WEEKLY_ACTIVITY_API_STATUS,
    payload: payload,
  };
};

export const setExpenses = (payload: Expense[]) => {
  return {
    type: DashboardActionTypes.SET_EXPENSES,
    payload: payload,
  };
};

export const setExpensesAPIStatus = (payload: APICallStatus) => {
  return {
    type: DashboardActionTypes.SET_EXPENSES_API_STATUS,
    payload: payload,
  };
};

// Thunk action
export const getCardsData = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setCardsDataAPIStatus(APICallStatus.LOADING));
      const data = await mockFetchCards();
      dispatch(setCardsData(data));
      dispatch(setCardsDataAPIStatus(APICallStatus.LOADED));
    } catch (error) {
      dispatch(setCardsDataAPIStatus(APICallStatus.ERROR));
      console.error("Failed to fetch card data:", error);
    }
  };
};

export const getRecentTransactions = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setRecentTransactionsAPIStatus(APICallStatus.LOADING));
      const data = await mockFetchTransactions();
      dispatch(setRecentTransactions(data));
      dispatch(setRecentTransactionsAPIStatus(APICallStatus.LOADED));
    } catch (error) {
      dispatch(setRecentTransactionsAPIStatus(APICallStatus.ERROR));
      console.error("Failed to fetch recent transactions:", error);
    }
  };
};

export const getWeeklyActivity = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setWeeklyActivityAPIStatus(APICallStatus.LOADING));
      const data = await mockFetchWeeklyActivity();
      dispatch(setWeeklyActivity(data));
      dispatch(setWeeklyActivityAPIStatus(APICallStatus.LOADED));
    } catch (error) {
      dispatch(setWeeklyActivityAPIStatus(APICallStatus.ERROR));
      console.error("Failed to fetch weekly activity:", error);
    }
  };
};

export const getExpenses = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setExpensesAPIStatus(APICallStatus.LOADING));
      const data = await mockFetchExpenses();
      dispatch(setExpenses(data));
      dispatch(setExpensesAPIStatus(APICallStatus.LOADED));
    } catch (error) {
      dispatch(setExpensesAPIStatus(APICallStatus.ERROR));
      console.error("Failed to fetch expenses:", error);
    }
  };
};
