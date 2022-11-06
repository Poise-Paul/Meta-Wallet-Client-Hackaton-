import React, { useState, useEffect } from "react";
import SectionFour from "../../Sections/SectionFour";
import RealTop from "./RealDashComps/RealTop";
import { useSelector } from "react-redux";
import axios from "axios";
import shortNum from "number-shortener";
const Markets = () => {
  const [number, setNumber] = useState(1);
  const [marketData, setMarketData] = useState([]);
  const [marketCap, setTotalMarket] = useState(0);
  const [volume, setVolume] = useState(0);
  const [percent, setPercent] = useState(0);
  const [loading, setLoading] = useState(true);
  const metrics = useSelector((state) => state.metric.metrics);
  const all = document.querySelectorAll("#parent-selector div");
  useEffect(() => {
    const first20 = metrics.slice(0, 19);
    setMarketData(first20);
    if (marketData) {
      setLoading(false);
    }
    const getTotalMarket = async () => {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/global"
      );

      const total_market = data.data.total_market_cap;
      const total_percent =
        data.data.market_cap_change_percentage_24h_usd.toFixed(2);
      const total_volume = data.data.total_volume;

      const calculateTotal = (market) => {
        let total = 0;
        for (let index = 0; index < Object.values(market).length; index++) {
          total += Object.values(market)[index];
        }
        console.log("Total Market Cap --", total);
        const totalResult =
          Math.abs(total) >= 1.0e12
            ? `${(Math.abs(total) / 1.0e12).toFixed(2)} T`
            : Math.abs(total) >= 1.0e9
            ? `${(Math.abs(total) / 1.0e9).toFixed(2)} B`
            : Math.abs(total) >= 1.0e6
            ? `${(Math.abs(total) / 1.0e6).toFixed(2)} M`
            : Math.abs(total) >= 1.0e3
            ? `${(Math.abs(total) / 1.0e3).toFixed(2)} K`
            : Math.abs(total);
        return totalResult
      };
      setTotalMarket(calculateTotal(total_market));
      setVolume(calculateTotal(total_volume));
      setPercent(total_percent);
    };
    getTotalMarket();
  }, []);

  useEffect(() => {
    all?.forEach((x) => {
      if (x === all[number - 1]) {
        x.classList.add("bg-green-500");
        x.classList.remove("bg-[#2d3445]");
      } else {
        x.classList.remove("bg-green-500");
        x.classList.add("bg-[#2d3445]");
      }
    });
  }, [number]);
  const allDivs = [
    "All",
    "My Assets",
    "Coins",
    "Tokens",
    "Defi",
    "Gainers & Losers",
  ];
  return (
    <div className={marketData.length === 0 ? "h-screen" : ""}>
      <RealTop name="markets" />
      {/* Filter Coins */}
      <div className="sm:flex hidden gap-5 my-5" id="parent-selector">
        {allDivs.map((title, key) => {
          return (
            <div
              className="bg-[#2d3445] cursor-pointer px-4 py-2 rounded-full font-semibold"
              key={key}
              onClick={() => setNumber(allDivs.indexOf(title) + 1)}
            >
              {title}
            </div>
          );
        })}
      </div>
      {/*  End Filter Coins */}
      <div className="flex gap-5 sm:mt-0 mt-7">
        <div className="rounded-2xl bg-[#2d3445] p-3 w-60 font-semibold">
          <h1 className="text-gray-500">Market Cap</h1>
          <div className="flex flex-col">
            <h1 className="sm:text-2xl text-xl">
              $
              {marketCap.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h1>
            <div className="flex justify-end sm:text-base text-sm">
              <span
                className={percent >= 0 ? `text-green-500` : `text-red-500`}
              >
                {percent >= 0 ? `+` : ``}
                {percent}%
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-[#2d3445] p-3 w-60 font-semibold">
          <h1 className="text-gray-500">Total Vol</h1>
          <div className="flex flex-col">
            <h1 className="sm:text-2xl text-xl">${volume}</h1>
            <div className="flex justify-end sm:text-base text-sm">
              <span
                className={percent >= 0 ? `text-green-500` : `text-red-500`}
              >
                {percent >= 0 ? `+` : ``}
                {percent}%
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* All Assets -- Fix other Coins and assets later */}
      <div className="my-10">
        <SectionFour Loading={loading} market={marketData} app={"inside"} />
      </div>
    </div>
  );
};

export default Markets;
