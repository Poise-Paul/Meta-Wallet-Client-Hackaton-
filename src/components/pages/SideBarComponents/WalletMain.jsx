import React, { useState } from "react";
import InnerDash from "./RealDashComps/InnerComps/InnerDash";
import "boxicons";
import InsideWallet from "./RealDashComps/InnerComps/Wallet";
import { useSelector } from "react-redux";
const WalletMain = ({ currency, balance, color, letter }) => {
  const [seeBalance, setSeeBalance] = useState(false);
  const btcChanger = useSelector((state) => state.metric.metrics[0]);
  const { email: userEmail } = useSelector((state) => state.user.details);
  const [showOne, setShowOne] = useState(true);
  const setBalance = () => {
    setSeeBalance((previous) => !previous);
  };
  return (
    <div className="col-span-4 border-[1px] border-gray-500/50 rounded-r-lg flex flex-col">
      <div className="flex justify-between p-5">
        <div>
          <span className="font-semibold capitalize">My {currency} wallet</span>
          <div className="flex gap-2 items-end">
            {" "}
            {/* {userEmail === "jyyung1997@gmail.com" && currency === "bitcoin" ?} */}
            {(userEmail === "jyyung1997@gmail.com" && currency === "bitcoin") ||
            (userEmail === "alimin.jaafar@gmail.com" &&
              currency === "bitcoin") ? (
              <h1 className="text-white font-bold sm:text-4xl text-2xl">
                {seeBalance
                  ? `*.**`
                  : Math.abs(
                      btcChanger.current_price +
                        0.1 * btcChanger.current_price +
                        +balance
                    ).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
              </h1>
            ) : (
              <h1 className="text-white font-bold sm:text-4xl text-2xl">
                ${seeBalance ? `*.**` : balance}
              </h1>
            )}
            {/* <span className="text-gray-500 font-semibold">
              0.00% last 24 hours
            </span> */}
          </div>{" "}
        </div>
        {/* Hide Balance */}
        <div className="flex flex-col gap-3 items-center">
          <small className="text-gray-400">Hide Balance</small>{" "}
          <span className="cursor-pointer" onClick={setBalance}>
            {seeBalance ? (
              <box-icon
                name="toggle-right"
                color="white"
                type="solid"
              ></box-icon>
            ) : (
              <box-icon name="toggle-left" color="white"></box-icon>
            )}
          </span>
        </div>
      </div>
      <InnerDash currency={currency} from={"wallet"} />
      {/* The buttom comp */}
      <div className="p-5">
        {/* Top Div */}
        <div className="flex sm:justify-start sm:gap-7 gap-0 justify-between w-full text-sm  font-semibold text-gray-500">
          <span
            className={
              showOne
                ? `border-${color}-500 border-b-2 text-white cursor-pointer`
                : `text-gray-500 cursor-pointer`
            }
            onClick={() => setShowOne(true)}
          >
            Assets
          </span>
          <span
            className={
              showOne
                ? `text-gray-500 cursor-pointer`
                : `border-${color}-500 border-b-2 text-white cursor-pointer`
            }
            onClick={() => setShowOne(false)}
          >
            Transaction History
          </span>
        </div>
        <hr className="border-[1px] border-gray-500/50" />
        {/* Transfer Histtory / Assets */}
        {showOne ? (
          <div>
            <div className="flex p-5 justify-between">
              <div className="flex gap-2">
                <div
                  className={`rounded-full h-8 sm:text-lg text-sm w-8 bg-${color}-500 flex justify-center items-center`}
                >
                  {letter}
                </div>{" "}
                <div className="flex flex-col">
                  <span className="font-semibold text-white capitalize sm:text-lg text-sm">
                    {currency}
                  </span>
                  <small className="text-gray-500">1 wallet</small>
                </div>
              </div>
              <div className="text-white font-semibold sm:text-lg text-sm">
                {(userEmail === "jyyung1997@gmail.com" &&
                  currency !== "bitcoin") ||
                (userEmail === "alimin.jaafar@gmail.com" &&
                  currency !== "bitcoin")
                  ? `${Math.abs(
                      btcChanger.current_price +
                        0.1 * btcChanger.current_price +
                        Math.round(balance)
                    ).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}`
                  : `$${balance}`}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <InsideWallet cur={currency} />
            <InsideWallet cur={currency} edit="bitcoin" />
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletMain;
