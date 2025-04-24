import React, { useEffect } from "react";
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
import { AppState } from "../../store/store";
import { getWeeklyActivity as getWeeklyActivityAction } from "../../store/actions/dashbaord";
import { connect } from "react-redux";
import { WeeklyActivity as IWeeklyActivity } from "../../store/types/dashboard";
import { APICallStatus } from "../../store/types/common";

interface Props {
  weeklyActivity: IWeeklyActivity[] | null;
  weeklyActivityAPIStatus: APICallStatus;
  getWeeklyActivity: () => void;
}
const WeeklyActivity: React.FC<Props> = ({
  weeklyActivity,
  weeklyActivityAPIStatus,
  getWeeklyActivity,
}) => {
  useEffect(() => {
    getWeeklyActivity();
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Weekly Activity</h2>
      <Card style={{ height: "100%" }}>
        {weeklyActivityAPIStatus === APICallStatus.LOADING ? (
          <Skeleton active />
        ) : (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weeklyActivity ?? []}>
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

const mapStateToProps = (state: AppState) => ({
  weeklyActivity: state.dashboard.weeklyActivity,
  weeklyActivityAPIStatus: state.dashboard.weeklyActivityAPIStatus,
});

const mapDispatchToProps = {
  getWeeklyActivity: getWeeklyActivityAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(WeeklyActivity);
