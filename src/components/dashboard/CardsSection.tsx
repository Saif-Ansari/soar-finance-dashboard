import React, { useEffect } from "react";
import { Skeleton } from "antd";
import { connect } from "react-redux";
import { AppState } from "../../store/store";
import { getCardsData as getCardsDataAction } from "../../store/actions/dashbaord";
import { CardInfo } from "../../store/types/dashboard";
import { APICallStatus } from "../../store/types/common";

interface Props {
  cardData: CardInfo[] | null;
  cardDataAPIStatus: APICallStatus;
  getCardsData: () => void;
}
const CardsSection: React.FC<Props> = ({
  cardData,
  cardDataAPIStatus,
  getCardsData,
}) => {
  useEffect(() => {
    getCardsData();
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">My Cards</h2>
        <button className="text-sm text-blue-500 hover:underline">
          See All
        </button>
      </div>

      {cardDataAPIStatus === APICallStatus.LOADING ? (
        <Skeleton active paragraph={{ rows: 2 }} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cardData &&
            cardData.map((card, index) => {
              const isDark = card.type === "platinum";
              const isHiddenOnMobile = index > 0 ? "hidden md:block" : "block";
              return (
                <div
                  key={card.id}
                  className={`${isHiddenOnMobile} rounded-2xl p-6 relative shadow-lg flex flex-col justify-between overflow-hidden ${
                    isDark
                      ? "bg-gradient-to-br from-[#2E2E2E] to-[#1A1A1A] text-white"
                      : "bg-white text-black border"
                  }`}
                  style={{ minHeight: "260px" }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm">Balance</div>
                      <div className="text-2xl font-semibold">
                        {card.balance}
                      </div>
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

const mapStateToProps = (state: AppState) => ({
  cardData: state.dashboard.cardData,
  cardDataAPIStatus: state.dashboard.cardDataAPIStatus,
});

const mapDispatchToProps = {
  getCardsData: getCardsDataAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(CardsSection);
