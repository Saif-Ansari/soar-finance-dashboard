import DashboardActionTypes from "../actionTypes/dashboard";
import { APICallStatus } from "./common";

interface BaseDashboardAction {
  type: DashboardActionTypes;
}

export type DashboardActionPayload =
  | CardInfo[]
  | Transaction[]
  | WeeklyActivity[]
  | Expense[]
  | APICallStatus
  | null;

export type DashboardAction<P = undefined> = P extends undefined
  ? BaseDashboardAction
  : BaseDashboardAction & { payload: P };

export interface CardInfo {
  id: number;
  name: string;
  balance: string;
  expiry: string;
  number: string;
  type: "platinum" | "regular";
}

export interface Transaction {
  id: number;
  title: string;
  date: string;
  amount: string;
  type: "income" | "expense";
}

export interface WeeklyActivity {
  day: string;
  deposit: number;
  withdraw: number;
}

export interface Expense {
  name: string;
  value: number;
}
