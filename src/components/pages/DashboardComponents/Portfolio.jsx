import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BuyCrypto } from "../../extraComps/TryModal";

const Portfolio = () => {
  const [total, setTotal] = useState(0);
  const [seeBalance, setSeeBalance] = useState(false);
  const { totalPortfolio } = useSelector((state) => state.user.mainBalance);
  const { email: userEmail } = useSelector((state) => state.user.details);
  const { metrics } = useSelector((state) => state.metric);

  useEffect(() => {
    if (totalPortfolio) {
      setTotal(totalPortfolio);
    }
  }, [totalPortfolio]);
  const setBalance = () => {
    setSeeBalance((previous) => !previous);
  };

  return (
    <div className="flex flex-col sm:my-10 my-5">
      <div className="flex justify-between">
        <h1 className="sm:text-4xl text-2xl font-bold">My Portfolio</h1>{" "}
      </div>
      <div className="bg-[#2d3445] rounded-2xl sm:grid sm:grid-cols-4 my-5 p-10">
        <div className="flex justify-between">
          {/* Total Funds */}
          <div>
            <h1 className="sm:text-4xl text-2xl font-bold text-white">
              {userEmail === "jyyung1997@gmail.com" ||
              userEmail === "alimin.jaafar@gmail.com"
                ? seeBalance
                  ? `*.**`
                  : Math.abs(
                      metrics[0]?.current_price +
                        0.1 * metrics[0]?.current_price +
                        +total
                    ).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })
                : seeBalance
                ? `*.**`
                : `$${total}`}
            </h1>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-gray-500 h-2 w-2"></div>
              <span className="sm:text-lg text-sm text-gray-500 font-semibold">
                4 Wallets
              </span>
            </div>
          </div>
          {/* Implement Hide Amount */}
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
        <div className="col-span-3 ">
          <div className="flex gap-4 flex-col justify-center text-center items-center">
            <img
              src="https://app.bitcoin.com/images/uploads/noassets.png"
              alt="no-assets"
              className="sm:w-36 w-20"
            />
            <p className="text-gray-400 sm:text-sm text-xs">
              Start your crypto journey using a Metaverse Crypto <br /> Wallet
              to make your deposits
            </p>
            <BuyCrypto location={"portfolio"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
