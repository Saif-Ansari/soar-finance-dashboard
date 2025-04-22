import React, { useEffect, useState } from "react";
import { Card, Skeleton } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const mockFetchWeeklyActivity = () =>
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

const WeeklyActivity: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mockFetchWeeklyActivity().then((res: any) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Weekly Activity</h2>
      <Card style={{ height: "100%" }}>
        {loading ? (
          <Skeleton active />
        ) : (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data} >
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="deposit" fill="#3B82F6" name="Deposit" />
              <Bar dataKey="withdraw" fill="#000000" name="Withdraw" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </Card>
    </div>
  );
};

export default WeeklyActivity;
