import React from "react";
import { BuyCrypto, DepositCrypto } from "../../../../extraComps/TryModal";
import {
  hikePrice as HighPriceIcon,
  RecieveCoins,
  Sell,
} from "../../../../svgs/Svgs";
const InnerDash = ({ currency, from }) => {
  return (
    <div className="flex justify-center items-center text-center gap-5 flex-col mt-28 mb-20">
      <span className="text-gray-500">
        <HighPriceIcon />
      </span>
      <p className="text-gray-500 sm:text-sm text-xs">
        You can buy Cryptocurrencies via credit <br />
        card or receiving assets to your wallet address.
      </p>
      <div className="flex gap-5">
        {" "}
        <BuyCrypto />
        <div className="rounded-lg border-[1px] sm:w-44 w-36  border-gray-700/50 flex justify-center items-center p-3 gap-1">
          <span className="text-green-500">
            {" "}
            <RecieveCoins />{" "}
          </span>
          {from === "dashboard" ? (
            <DepositCrypto
              currencies={["bitcoin", "ethereum", "bitcoin cash", "dogecoin"]}
            />
          ) : (
            <DepositCrypto currencies={[currency]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default InnerDash;
