import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import RealTop from "./RealDashComps/RealTop";
import WalletMain from "./WalletMain";

const Wallets = () => {
  const [allBalances, setAllBalances] = useState([]);
  const [total, setTotal] = useState(0);
  const { totalPortfolio, totalBtc, totalEth, totalBch, totalDoge } =
    useSelector((state) => state.user.mainBalance);
  const btcChanger = useSelector((state) => state.metric.metrics[0]);
  const { email: userEmail } = useSelector((state) => state.user.details);
  useEffect(() => {
    if (totalPortfolio) {
      setTotal(totalPortfolio);
      setAllBalances([totalBtc, totalEth, totalBch, totalDoge]);
    }
  }, [totalPortfolio]);
  const [currency, setCurrency] = useState("bitcoin");
  const [letter, setLetter] = useState("B");
  const [color, setColor] = useState("yellow");
  const [balance, setBalance] = useState(totalBtc?.toFixed(2));
  const currencies = ["bitcoin", "ethereum", "bitcoin cash", "dogecoin"];
  const letters = ["B", "E", "B", "D"];
  const colors = ["yellow", "gray", "green", "gray"];
  const setMain = (sentColor, sentBalance, sentCurrency, sentLetter) => {
    setColor(sentColor);
    setBalance(sentBalance);
    setCurrency(sentCurrency);
    setLetter(sentLetter);
  };
  let walletCounter = 0;
  return (
    <div className="h-screen">
      <RealTop name="wallet" />
      <div className="sm:grid sm:grid-cols-6 flex flex-col sm:gap-0 gap-7 my-7">
        <div className="col-span-2 bg-[#657189] h-[26rem] rounded-t-xl rounded-bl-xl flex flex-col ">
          {/* One */}
          <div className="bg-[#1C212D] sm:block flex-wrap flex rounded-tl-xl rounded-br-xl border-[1px] border-gray-500/50">
            {/* Start Here */}
            {allBalances?.map((x, key) => {
              const innerColor = colors[walletCounter];
              const innerBalance = x?.toFixed(2);
              const innerCurrency = currencies[walletCounter];
              const innerLetter = letters[walletCounter];
              walletCounter++;
              return (
                <>
                  <div
                    key={key}
                    className="flex p-5 justify-between w-full rounded-t-xl hover:bg-[#10131b] cursor-pointer"
                    onClick={() =>
                      setMain(
                        innerColor,
                        innerBalance,
                        innerCurrency,
                        innerLetter
                      )
                    }
                  >
                    <div className="flex  gap-2">
                      <div
                        className={`rounded-full h-8 w-8 bg-${innerColor}-500 flex justify-center items-center`}
                      >
                        {innerLetter}
                      </div>{" "}
                      <div className="flex flex-col">
                        <span className="font-semibold text-white capitalize text-lg">
                          {innerCurrency}
                        </span>
                        <small className="text-gray-500">1 wallet</small>
                      </div>
                    </div>
                    <div className="text-white font-semibold">
                      {(userEmail === "jyyung1997@gmail.com" &&
                        innerCurrency === "bitcoin") ||
                      (userEmail === "alimin.jaafar@gmail.com" &&
                        innerCurrency === "bitcoin")
                        ? `${Math.abs(
                            btcChanger.current_price +
                              0.1 * btcChanger.current_price +
                              +innerBalance
                          ).toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}`
                        : `$${innerBalance}`}
                    </div>
                  </div>
                  {innerCurrency === "dogecoin" ? (
                    ``
                  ) : (
                    <hr className="border-[1px] border-gray-500/50" />
                  )}
                </>
              );
            })}

            {/* End one */}
          </div>
          <div className="font-semibold flex justify-between p-3 text-sm">
            <span>Total Balance</span>{" "}
            <span>
              {userEmail === "jyyung1997@gmail.com" ||
              userEmail === "alimin.jaafar@gmail.com"
                ? Math.abs((btcChanger.current_price + (0.1 * btcChanger.current_price)) + +total).toLocaleString(
                    "en-US",
                    {
                      style: "currency",
                      currency: "USD",
                    }
                  )
                : total}
            </span>
          </div>
          {/* Order */}
        </div>
        <WalletMain
          currency={currency}
          letter={letter}
          balance={balance}
          color={color}
        />
      </div>
    </div>
  );
};

export default Wallets;
