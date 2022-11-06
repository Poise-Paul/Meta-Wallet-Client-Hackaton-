import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { updateComponent } from "../../reducerSlices/componentsReducer";

const Highlights = () => {
  const { balances } = useSelector((state) => state.user);
  const metrics = useSelector((state) => state.metric.metrics);
  const dispatch = useDispatch();
  const [btcBal, setBtcBal] = useState("");
  const [ethBal, setEthBal] = useState("");
  const [bchBal, setBchBal] = useState("");
  const [dogeBal, setDogeBal] = useState("");
  useEffect(() => {
    if (metrics) {
      setBtcBal(metrics.find((x) => x.id === "bitcoin"));
      setEthBal(metrics.find((x) => x.id === "ethereum"));
      setBchBal(metrics.find((x) => x.id === "bitcoin-cash"));
      setDogeBal(metrics.find((x) => x.id === "dogecoin"));
    }
  }, []);
  const decPositive = "text-green-500 sm:text-lg text-sm";
  const decNegative = "text-red-500 sm:text-lg text-sm";
  const allCurrencies = [btcBal, ethBal, bchBal, dogeBal];
  return (
    <div className="flex flex-col sm:my-10 my-5">
      <div className="flex justify-between">
        <h1 className="sm:text-4xl text-2xl font-bold">Markets</h1>{" "}
        <NavLink to="/dashboard/markets">
          <button
            className="bg-blue-500 text-sm rounded-lg p-2 font-semibold hover:bg-blue-700 transition duration-500 ease-in-out text-white"
            onClick={() => dispatch(updateComponent("markets"))}
          >
            View all markets
          </button>
        </NavLink>
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-5 mt-5">
        {allCurrencies.map((cur, key) => {
          // Get Chart
          const trunStr = cur?.image;
          const shortened = trunStr?.split("thumb");
          const chartNumber = shortened?.[0].match(/(\d+)/)[0];
          const dec = cur?.price_change_percentage_24h;
          const mainDec = dec?.toFixed(2);
          return (
            <div key={key} className="bg-[#2d3445] rounded-2xl p-5">
              <div className="flex gap-3">
                <img
                  src={cur?.image}
                  alt=""
                  className="sm:w-8 sm:h-8 w-6 h-6"
                />
                <div className="font-semibold text-white text-lg">
                  <h1 className="sm:text-lg text-sm">{cur?.name}</h1>
                  <p className="text-gray-400 uppercase sm:text-lg text-sm">
                    {cur?.symbol}
                  </p>
                </div>
              </div>
              <img
                src={`https://www.coingecko.com/coins/${chartNumber}/sparkline `}
                alt="crypto-img"
                className="w-full"
              />
              <div className="flex justify-between font-semibold mt-4">
                <h1 className="sm:text-lg text-sm">
                  {cur?.current_price?.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </h1>{" "}
                <p className={mainDec > 0 ?  decPositive : decNegative}>
                  {mainDec}%
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Highlights;
