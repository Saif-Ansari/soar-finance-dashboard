import { APICallStatus } from "../types/common";
import DashboardActionTypes from "../actionTypes/dashboard";

import {
  CardInfo,
  DashboardAction,
  DashboardActionPayload,
  Expense,
  Transaction,
  WeeklyActivity,
} from "../types/dashboard";

export interface DashboardState {
  cardData: CardInfo[] | null;
  cardDataAPIStatus: APICallStatus;
  recentTransactions: Transaction[] | null;
  recentTransactionsAPIStatus: APICallStatus;
  weeklyActivity: WeeklyActivity[] | null;
  weeklyActivityAPIStatus: APICallStatus;
  expenses: Expense[] | null;
  expensesAPIStatus: APICallStatus;
}

const initialState: DashboardState = {
  cardData: null,
  cardDataAPIStatus: APICallStatus.INITIAL,
  recentTransactions: null,
  recentTransactionsAPIStatus: APICallStatus.INITIAL,
  weeklyActivity: null,
  weeklyActivityAPIStatus: APICallStatus.INITIAL,
  expenses: null,
  expensesAPIStatus: APICallStatus.INITIAL,
};

export const dashboardReducer = (
  state = initialState,
  action: DashboardAction<DashboardActionPayload>
): DashboardState => {
  switch (action.type) {
    case DashboardActionTypes.SET_CARDS_DATA:
      return {
        ...state,
        cardData: action.payload as CardInfo[],
      };

    case DashboardActionTypes.SET_CARDS_DATA_API_STATUS:
      return {
        ...state,
        cardDataAPIStatus: action.payload as APICallStatus,
      };

    case DashboardActionTypes.SET_RECENT_TRANSACTIONS:
      return {
        ...state,
        recentTransactions: action.payload as Transaction[],
      };
    case DashboardActionTypes.SET_RECENT_TRANSACTIONS_API_STATUS:
      return {
        ...state,
        recentTransactionsAPIStatus: action.payload as APICallStatus,
      };
    case DashboardActionTypes.SET_WEEKLY_ACTIVITY:
      return {
        ...state,
        weeklyActivity: action.payload as WeeklyActivity[],
      };
    case DashboardActionTypes.SET_WEEKLY_ACTIVITY_API_STATUS:
      return {
        ...state,
        weeklyActivityAPIStatus: action.payload as APICallStatus,
      };
    case DashboardActionTypes.SET_EXPENSES:
      return {
        ...state,
        expenses: action.payload as Expense[],
      };
    case DashboardActionTypes.SET_EXPENSES_API_STATUS:
      return {
        ...state,
        expensesAPIStatus: action.payload as APICallStatus,
      };
    default:
      return state;
  }
};
