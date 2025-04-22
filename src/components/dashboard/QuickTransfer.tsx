import React, { useEffect, useState } from "react";
import { Card, Skeleton, Avatar, Typography, Input, Button } from "antd";
import {
  SendOutlined,
  DollarOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";

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

  useEffect(() => {
    mockFetchContacts().then((res: any) => {
      setContacts(res);
      setLoading(false);
    });
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Quick Transfer</h2>
      <Card style={{ height: "300px" }}>
        {loading ? (
          <Skeleton avatar paragraph={{ rows: 2 }} active />
        ) : (
          <>
            <div className="flex items-center justify-between mb-4 mt-4">
              {contacts.map((person, idx) => (
                <div key={idx} style={{ textAlign: "center" }}>
                  <Avatar size={64} src={person.avatar} />
                  <div>
                    <Text strong>{person.name}</Text>
                    <br />
                    <Text type="secondary" style={{ fontSize: 12 }}>
                      {person.role}
                    </Text>
                  </div>
                </div>
              ))}
              <div style={{ fontSize: 35 }}>
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
                placeholder="Write Amount"
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
