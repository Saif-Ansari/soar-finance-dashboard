import {
  CardInfo,
  Expense,
  Transaction,
  WeeklyActivity,
} from "../store/types/dashboard";

export const mockFetchCards = (): Promise<CardInfo[]> =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Eddy Cusuma",
          balance: "$5,756",
          expiry: "12/22",
          number: "3778 **** **** 1234",
          type: "platinum",
        },
        {
          id: 2,
          name: "Eddy Cusuma",
          balance: "$5,756",
          expiry: "12/22",
          number: "3778 **** **** 1234",
          type: "regular",
        },
      ]);
    }, 1000)
  );

export const mockFetchTransactions = (): Promise<Transaction[]> =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Deposit from my Card",
          date: "28 January 2021",
          amount: "-$850",
          type: "expense",
        },
        {
          id: 2,
          title: "Deposit Paypal",
          date: "25 January 2021",
          amount: "+$2,500",
          type: "income",
        },
        {
          id: 3,
          title: "Jemi Wilson",
          date: "21 January 2021",
          amount: "+$5,400",
          type: "income",
        },
      ]);
    }, 1000)
  );

export const mockFetchWeeklyActivity = (): Promise<WeeklyActivity[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { day: "Sat", deposit: 200, withdraw: 500 },
        { day: "Sun", deposit: 150, withdraw: 350 },
        { day: "Mon", deposit: 300, withdraw: 400 },
        { day: "Tue", deposit: 350, withdraw: 500 },
        { day: "Wed", deposit: 100, withdraw: 150 },
        { day: "Thu", deposit: 220, withdraw: 380 },
        { day: "Fri", deposit: 280, withdraw: 390 },
      ]);
    }, 1000);
  });

export const mockFetchExpenses = (): Promise<Expense[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "Entertainment", value: 30 },
        { name: "Investment", value: 20 },
        { name: "Bill Expense", value: 15 },
        { name: "Others", value: 35 },
      ]);
    }, 1000);
  });
