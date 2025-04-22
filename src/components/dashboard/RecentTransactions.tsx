import React, { useEffect, useState } from "react";
import { Card, Skeleton } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

type Transaction = {
  id: number;
  title: string;
  date: string;
  amount: string;
  type: "income" | "expense";
};

const mockFetchTransactions = (): Promise<Transaction[]> =>
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

const RecentTransactions: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mockFetchTransactions().then((data) => {
      setTransactions(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Recent Transaction</h2>

      <Card className="rounded-2xl shadow-sm" style={{ height: '250px' }}>
        {loading ? (
          <Skeleton active paragraph={{ rows: 3 }} />
        ) : (
          <div className="space-y-4">
            {transactions.map((tx) => (
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

export default RecentTransactions;
