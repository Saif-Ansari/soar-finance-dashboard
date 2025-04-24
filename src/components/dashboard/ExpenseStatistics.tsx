import React, { useEffect } from "react";
import { Card, Skeleton } from "antd";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { AppState } from "../../store/store";
import { getExpenses as getExpensesAction } from "../../store/actions/dashbaord";
import { connect } from "react-redux";
import { Expense } from "../../store/types/dashboard";
import { APICallStatus } from "../../store/types/common";

const COLORS = ["#1D4ED8", "#6366F1", "#F97316", "#000000"];

interface Props {
  expenses: Expense[] | null;
  expensesAPIStatus: APICallStatus;
  getExpenses: () => void;
}
const ExpenseStatistics: React.FC<Props> = ({
  expenses,
  expensesAPIStatus,
  getExpenses,
}) => {
  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Expense Statistics</h2>
      <Card style={{ height: "100%" }}>
        {expensesAPIStatus == APICallStatus.LOADING ? (
          <Skeleton active />
        ) : (
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={expenses ?? []}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, value }) => `${value}%`}
              >
                {expenses &&
                  expenses.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )}
      </Card>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  expenses: state.dashboard.expenses,
  expensesAPIStatus: state.dashboard.expensesAPIStatus,
});

const mapDispatchToProps = {
  getExpenses: getExpensesAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseStatistics);
