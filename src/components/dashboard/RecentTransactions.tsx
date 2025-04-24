import React, { useEffect } from "react";
import { Card, Skeleton } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { AppState } from "../../store/store";
import { getRecentTransactions as recentTransactionsAction } from "../../store/actions/dashbaord";
import { connect } from "react-redux";
import { APICallStatus } from "../../store/types/common";
import { Transaction } from "../../store/types/dashboard";

interface Props {
  recentTransactions: Transaction[] | null;
  recentTransactionsAPIStatus: APICallStatus;
  getRecentTransactions: () => void;
}

const RecentTransactions: React.FC<Props> = ({
  recentTransactions,
  recentTransactionsAPIStatus,
  getRecentTransactions,
}) => {
  useEffect(() => {
    getRecentTransactions();
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Recent Transaction</h2>

      <Card className="rounded-2xl shadow-sm" style={{ height: "250px" }}>
        {recentTransactionsAPIStatus === APICallStatus.LOADING ? (
          <Skeleton active paragraph={{ rows: 3 }} />
        ) : (
          <div className="space-y-4">
            {recentTransactions &&
              recentTransactions.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`rounded-full p-2 ${
                        tx.type === "income"
                          ? "bg-green-100 text-green-500"
                          : "bg-red-100 text-red-500"
                      }`}
                    >
                      {tx.type === "income" ? (
                        <ArrowDownOutlined size={20} />
                      ) : (
                        <ArrowUpOutlined size={20} />
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{tx.title}</div>
                      <div className="text-xs text-gray-500">{tx.date}</div>
                    </div>
                  </div>
                  <div
                    className={`font-medium ${
                      tx.type === "income" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {tx.amount}
                  </div>
                </div>
              ))}
          </div>
        )}
      </Card>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  recentTransactions: state.dashboard.recentTransactions,
  recentTransactionsAPIStatus: state.dashboard.recentTransactionsAPIStatus,
});

const mapDispatchToProps = {
  getRecentTransactions: recentTransactionsAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(RecentTransactions);
