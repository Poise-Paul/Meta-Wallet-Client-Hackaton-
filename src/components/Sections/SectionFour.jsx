import React, { useEffect, useState } from "react";
import Loader from "../Loader";

const SectionFour = ({ Loading, market, app }) => {
  const [inside, setInside] = useState(false);
  const insideClass = `border-2 border-gray-500 bg-transparent rounded-xl flex flex-col gap-2 capitalize`;
  const outsideClass = `bg-transparent shadow-lg shadow-gray-200 rounded-2xl flex flex-col gap-2 capitalize`;
  const notSmallInside = `hover:shadow-md hover:shadow-blue-200 transition ease-in-out duration-300`;
  const SmallInside = `hover:bg-black/30 transition ease-in-out duration-300`;
  useEffect(() => {
    if (app === "inside") {
      setInside(true);
      console.log("inside_life", inside);
      console.log("Loading Loading", Loading);
    }
  }, []);

  return (
    <section className={`${!inside && `sm:px-20`} my-3`}>
      <div className={inside ? insideClass : outsideClass}>
        <nav>
          <ul className="grid grid-cols-6 text-gray-400 px-10 py-5 sm:text-base text-xs text-center">
            <li className="col-span-2 text-left">name</li>
            <li className="text-left">price</li>
            <li>change</li>
            <li>market cap</li>
            <li>Last 7 days</li>
          </ul>
        </nav>
        <hr />
        {/* Set Loading */}
        {Loading && (
          <div className="w-full flex justify-center my-3">
            <Loader app={inside ? "inside" : ""} />
          </div>
        )}
        {/* Remove Loading */}
        {/* Market Data */}
        <ul>
          {market.map((x) => {
            let changeClass;
            if (x.price_change_percentage_24h > 0) {
              changeClass = `text-green-500`;
            } else {
              changeClass = `text-red-500`;
            }
            // Get Chart
            const trunStr = x.image;
            const shortened = trunStr.split("thumb");
            const chartNumber = shortened[0].match(/(\d+)/)[0];
            const dec = x.price_change_percentage_24h;
            const mainDec = dec.toFixed(2);
            const marketCap =
              Math.abs(x.market_cap) >= 1.0e9
                ? `${(Math.abs(x.market_cap) / 1.0e9).toFixed(2)} B`
                : Math.abs(x.market_cap) >= 1.0e6
                ? `${(Math.abs(x.market_cap) / 1.0e6).toFixed(2)} M`
                : Math.abs(x.market_cap) >= 1.0e3
                ? `${(Math.abs(x.market_cap) / 1.0e3).toFixed(2)} K`
                : Math.abs(x.market_cap);
            return (
              <li key={x.id} className={inside ? SmallInside : notSmallInside}>
                <div className="grid grid-cols-6 p-7 items-center">
                  <div className="flex gap-2 text-center col-span-2 items-center">
                    {" "}
                    <img
                      src={x.image}
                      className="sm:h-10 h-5 object-cover"
                      alt=""
                    />{" "}
                    <div className="flex flex-col text-left ml-5">
                      <h1
                        className={`${
                          inside ? `text-white` : `text-gray-800`
                        }font-semibold sm:text-base text-xs`}
                      >
                        {x.name}
                      </h1>
                      <p className="text-gray-400 uppercase sm:text-base text-xs">{x.symbol}</p>
                    </div>
                  </div>
                  <div
                    className={`sm:text-base text-xs font-semibold ${
                      !inside && `text-gray-800`
                    } text-left`}
                  >
                    {x.current_price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </div>
                  <div className={`${changeClass} sm:text-base text-xs text-center`}>{mainDec}%</div>
                  <div className="text-center font-semibold sm:text-base text-xs">
                    ${marketCap}
                  </div>
                  <div>
                    <img
                      src={`https://www.coingecko.com/coins/${chartNumber}/sparkline `}
                      alt="cap-image"
                      className="w-[80%]"
                    />
                  </div>
                </div>
                <hr />
              </li>
            );
          })}
        </ul>
        {/* End Market Data */}
      </div>
    </section>
  );
};

export default SectionFour;
