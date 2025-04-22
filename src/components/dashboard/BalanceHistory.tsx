import { Card } from "antd";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jul", balance: 200 },
  { month: "Aug", balance: 450 },
  { month: "Sep", balance: 400 },
  { month: "Oct", balance: 800 },
  { month: "Nov", balance: 600 },
  { month: "Dec", balance: 700 },
  { month: "Jan", balance: 650 },
];

const BalanceHistory: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Expense Statistics</h2>
      <Card style={{ height: "100%" }}>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#3366FF"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default BalanceHistory;
