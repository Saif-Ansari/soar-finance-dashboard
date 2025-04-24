import React from "react";
import CardsSection from "../components/dashboard/CardsSection";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import WeeklyActivity from "../components/dashboard/WeeklyActivity";
import ExpenseStatistics from "../components/dashboard/ExpenseStatistics";
import QuickTransfer from "../components/dashboard/QuickTransfer";
import BalanceHistory from "../components/dashboard/BalanceHistory";

const Dashboard = () => {
  return (
    <div className=" mt-[130px] grid grid-cols-1 lg:grid-cols-3 gap-6 md:mt-0">
      <div className="lg:col-span-2">
        <CardsSection />
      </div>
      <div>
        <RecentTransactions />
      </div>
      <div className="lg:col-span-2">
        <WeeklyActivity />
      </div>
      <div>
        <ExpenseStatistics />
      </div>
      <div>
        <QuickTransfer />
      </div>
      <div className="lg:col-span-2">
        <BalanceHistory />
      </div>
    </div>
  );
};

export default Dashboard;
