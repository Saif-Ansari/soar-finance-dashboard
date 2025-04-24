import React, { useEffect, useState } from "react";
import { Skeleton } from "antd";

const mockFetchCards = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Eddy Cusuma",
          balance: "$5,756",
          expiry: "12/22",
          number: "3778 **** **** 1234",
          type: "platinum",
        },
        {
          id: 2,
          name: "Eddy Cusuma",
          balance: "$5,756",
          expiry: "12/22",
          number: "3778 **** **** 1234",
          type: "regular",
        },
      ]);
    }, 1000)
  );

const CardsSection: React.FC = () => {
  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mockFetchCards().then((data: any) => {
      setCards(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">My Cards</h2>
        <button className="text-sm text-blue-500 hover:underline">
          See All
        </button>
      </div>

      {loading ? (
        <Skeleton active paragraph={{ rows: 2 }} />
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {cards.map((card) => {
            const isDark = card.type === "platinum";
            return (
              <div
                key={card.id}
                className={`rounded-2xl p-6 relative shadow-lg flex flex-col justify-between overflow-hidden ${
                  isDark
                    ? "bg-gradient-to-br from-[#2E2E2E] to-[#1A1A1A] text-white"
                    : "bg-white text-black border"
                }`}
                style={{ minHeight: "260px" }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-sm">Balance</div>
                    <div className="text-2xl font-semibold">{card.balance}</div>
                  </div>
                  <div className="text-2xl">💳</div>
                </div>

                <div className="mt-6 grid grid-cols-2 text-sm">
                  <div>
                    <div className="uppercase text-xs text-gray-400">
                      Card Holder
                    </div>
                    <div className="font-semibold">{card.name}</div>
                  </div>
                  <div>
                    <div className="uppercase text-xs text-gray-400">
                      Valid Thru
                    </div>
                    <div className="font-semibold">{card.expiry}</div>
                  </div>
                </div>

                <div
                  className={`mt-6 px-4 py-3 rounded-xl flex justify-between items-center ${
                    isDark ? "bg-black/20 backdrop-blur-sm" : "bg-gray-100"
                  }`}
                >
                  <div className="text-lg font-mono">{card.number}</div>
                  <div className="text-xl">💳💳</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CardsSection;
