import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import InnerDash from "./InnerComps/InnerDash";

const FirstSide = () => {
  const [total, setTotal] = useState(0);
  const [currencies, setCurrencies] = useState([]);
  const [allBalancies, setAllBalances] = useState([]);
  const { walletCount } = useSelector((state) => state.user.details);
  const { totalPortfolio } = useSelector((state) => state.user.mainBalance);
  const { metrics } = useSelector((state) => state.metric);
  const { email: userEmail } = useSelector((state) => state.user.details);
  const { totalBtc, totalEth, totalBch, totalDoge } = useSelector(
    (state) => state.user.mainBalance
  );
  useEffect(() => {
    if (totalPortfolio) {
      setTotal(totalPortfolio);
    }
    const btc = metrics.find((x) => x.id === "bitcoin");
    const eth = metrics.find((x) => x.id === "ethereum");
    const bch = metrics.find((x) => x.id === "bitcoin-cash");
    const doge = metrics.find((x) => x.id === "dogecoin");
    const data = [btc, eth, bch, doge];
    const balances = [totalBtc, totalEth, totalBch, totalDoge];
    setCurrencies(data);
    setAllBalances(balances);
  }, [totalPortfolio, metrics, totalBtc, totalEth, totalBch, totalDoge]);

  return (
    <>
      <div className="col-span-4  flex flex-col gap-5">
        <div className="rounded-lg border-[1px] border-gray-700 flex flex-col p-5">
          <div className="flex gap-2 font-semibold">
            <h1 className="text-white font-semibold capitalize">
              price history
            </h1>{" "}
            <span className="text-gray-500">| {walletCount} Wallets</span>
          </div>
          <h1 className="text-3xl font-bold">
            {userEmail === "jyyung1997@gmail.com" ||
            userEmail === "alimin.jaafar@gmail.com"
              ? Math.abs(
                  metrics[0]?.current_price +
                    0.1 * metrics[0].current_price +
                    +total
                ).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })
              : Math.abs(total).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
          </h1>
          {/* Inner */}
          <InnerDash currency={"bitcoin"} from={"dashboard"} />
        </div>
        {/* Second */}
        <div className="rounded-lg gap-5 border-[1px] border-gray-700 flex flex-col p-5">
          <h1>My Assets</h1>
          <ul className="grid grid-cols-4 capitalize text-gray-500/50">
            <li>Currency</li>
            <li>price graph</li>
            <li className="text-center">price</li>
            <li className="text-center">balance</li>
          </ul>
          <div className="text-white font-semibold flex flex-col gap-5 capitalize">
            {currencies.map((x) => {
              const trunStr = x.image;
              const shortened = trunStr.split("thumb");
              const chartNumber = shortened[0].match(/(\d+)/)[0];
              const index = currencies.indexOf(x);
              return (
                <>
                  <ul className="grid grid-cols-4">
                    <li>{x.id}</li>
                    <li>
                      <img
                        src={`https://www.coingecko.com/coins/${chartNumber}/sparkline`}
                        alt="currency_graph"
                        className="w-[80%]"
                      />
                    </li>

                    <li className="text-center">
                      {x.current_price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </li>
                    <li className="text-center">
                      {(userEmail === "jyyung1997@gmail.com" &&
                        x.id === "bitcoin" &&
                        index === 0) ||
                      (userEmail === "alimin.jaafar@gmail.com" &&
                        x.id === "bitcoin" &&
                        index === 0) ? (
                        <li>
                          {Math.abs(
                            metrics[0].current_price +
                              0.1 * metrics[0].current_price +
                              +allBalancies[index]
                          ).toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </li>
                      ) : (
                        <li>{allBalancies[index].toFixed(2)}</li>
                      )}
                    </li>
                  </ul>
                  {x.id !== "dogecoin" ? (
                    <hr className="border-[1px] border-gray-500/50" />
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </div>
        </div>
        {/* End Second */}
      </div>
    </>
  );
};

export default FirstSide;
