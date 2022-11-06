import React, { useState } from "react";
import { BuyCrypto } from "../../../extraComps/TryModal";
import { RecieveCoins, SendIcon } from "../../../svgs/Svgs";
import { DepositCrypto } from "../../../extraComps/TryModal";

const RealTop = ({ name }) => {
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      <h1 className="sm:text-3xl text-xl font-bold capitalize">{name}</h1>{" "}
      <div className="grid sm:grid-cols-3 grid-cols-2 gap-5">
        <div className="rounded-lg border-[1px]  border-gray-700/50 flex justify-center items-center p-3 gap-1">
          <span className="text-green-500 rotate-45">
            {" "}
            <SendIcon />{" "}
          </span>
          {/* Send Assets */}
          <DepositCrypto
            currencies={["bitcoin", "ethereum", "bitcoin cash", "dogecoin"]}
            decision={"send"}
          />
        </div>
        <div className="rounded-lg border-[1px] border-gray-700/50 flex justify-center items-center p-3 gap-1">
          <span className="text-green-500">
            {" "}
            <RecieveCoins />{" "}
          </span>
          {/* Replabce Recieve */}
          <DepositCrypto
            currencies={["bitcoin", "ethereum", "bitcoin cash", "dogecoin"]}
          />
        </div>
        <div className="sm:col-span-1 col-span-2">
          <BuyCrypto />
        </div>
      </div>
    </div>
  );
};

export default RealTop;
