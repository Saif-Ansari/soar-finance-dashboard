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
          dark: true,
        },
        {
          id: 2,
          name: "Eddy Cusuma",
          balance: "$5,756",
          expiry: "12/22",
          number: "3778 **** **** 1234",
          dark: false,
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
          {cards.map((card) => (
            <div
              key={card.id}
              className={`rounded-2xl p-4 shadow  min-h-[250px]  ${
                card.dark
                  ? "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
                  : "bg-white text-black border"
              }`}
            >
              <div className="text-sm">Balance</div>
              <div className="text-2xl font-semibold">{card.balance}</div>
              <div className="mt-4 text-sm">{card.name}</div>
              <div className="text-sm">Valid Thru {card.expiry}</div>
              <div className="mt-2 text-lg">{card.number}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardsSection;
