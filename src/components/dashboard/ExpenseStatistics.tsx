import React, { useEffect, useState } from "react";
import { Card, Skeleton } from "antd";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";


const COLORS = ["#1D4ED8", "#6366F1", "#F97316", "#000000"];

const mockFetchExpenses = () =>
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

const ExpenseStatistics: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mockFetchExpenses().then((res: any) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Expense Statistics</h2>
      <Card style={{ height: "100%" }}>
        {loading ? (
          <Skeleton active />
        ) : (
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, value }) => `${value}%`}
              >
                {data.map((entry, index) => (
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

export default ExpenseStatistics;
