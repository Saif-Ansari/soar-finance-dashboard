import React, { useEffect, useState } from "react";
import { Card, Skeleton, Avatar, Typography, Input, Button } from "antd";
import {
  SendOutlined,
  DollarOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import classNames from "classnames";

const { Text } = Typography;

const mockFetchContacts = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "Livia Bator",
          role: "CEO",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
          name: "Randy Press",
          role: "Director",
          avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        },
        {
          name: "Workman",
          role: "Designer",
          avatar: "https://randomuser.me/api/portraits/men/41.jpg",
        },
      ]);
    }, 1000);
  });

const QuickTransfer: React.FC = () => {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState("525.50");
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    mockFetchContacts().then((res: any) => {
      setContacts(res);
      setLoading(false);
    });
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Quick Transfer</h2>
      <Card style={{ borderRadius: 16 }}>
        {loading ? (
          <Skeleton avatar paragraph={{ rows: 2 }} active />
        ) : (
          <>
            <div className="flex items-center justify-between mb-6 mt-4">
              {contacts.map((person, idx) => {
                const isSelected = idx === selectedIdx;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedIdx(idx)}
                    className={classNames(
                      "cursor-pointer text-center transition-all",
                      {
                        "scale-105": isSelected,
                      }
                    )}
                  >
                    <Avatar
                      size={64}
                      src={person.avatar}
                      className={classNames("border-2", {
                        "border-blue-500": isSelected,
                        "border-transparent": !isSelected,
                      })}
                    />
                    <div className="mt-2">
                      <Text
                        style={{
                          fontWeight: isSelected ? "bold" : 500,
                          color: isSelected ? "#000000" : "#555",
                        }}
                      >
                        {person.name}
                      </Text>
                      <br />
                      <Text
                        style={{
                          color: isSelected ? "#4A5FC1" : "#A0A0A0",
                          fontSize: isSelected ? 14 : 12,
                          fontWeight: isSelected ? 600 : 400,
                        }}
                      >
                        {person.role}
                      </Text>
                    </div>
                  </div>
                );
              })}

              <div className="ml-2 text-2xl text-gray-400">
                <RightCircleOutlined />
              </div>
            </div>

            <div className="flex mt-10">
              <Text type="secondary" style={{ fontSize: 12 }}>
                Write Amount
              </Text>
              <Input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                prefix={<DollarOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                style={{ width: "50%", borderRadius: 8 }}
                size="large"
              />
              <Button
                style={{
                  color: "white",
                  background: "black",
                  padding: "20px 20px",
                  width: "50%",
                }}
                icon={<SendOutlined />}
                type="primary"
                block
              >
                Send
              </Button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default QuickTransfer;
