import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Home from "../SideBarComponents/Home";
import RealDashboard from "../SideBarComponents/RealDashboard";
import Inbox from "../SideBarComponents/Inbox";
import Wallets from "../SideBarComponents/Wallets";
import Markets from "../SideBarComponents/Markets";
import Swap from "../SideBarComponents/Swap";
import News from "../SideBarComponents/News";
import BuySell from "../SideBarComponents/BuySell";
import Settings from "../SideBarComponents/Settings";
import HelpSupport from "../SideBarComponents/HelpSupport";
import { updateMainBalance } from "../../reducerSlices/userReducer";

const MainDashboard = () => {
  const {
    home,
    inbox,
    markets,
    news,
    realDashboard,
    swap,
    wallets,
    buySell,
    settings,
    support,
  } = useSelector((state) => state.component);
  const { balances } = useSelector((state) => state.user);
  const metrics = useSelector((state) => state.metric.metrics);

  const dispatch = useDispatch();
  useEffect(() => {
    // Fetch Metrics Data
    dispatch({ type: "FETCH_METRICS" });
    // Update Main Balances
    const btcPrice = metrics.find((x) => x.id === "bitcoin");
    const ethPrice = metrics.find((x) => x.id === "ethereum");
    const bchPrice = metrics.find((x) => x.id === "bitcoin-cash");
    const dogePrice = metrics.find((x) => x.id === "dogecoin");
    if (balances.balance1) {
      const { availableBalance: btcBal } = balances.balance1;
      const { availableBalance: ethBal } = balances.balance2;
      const { availableBalance: bchBal } = balances.balance3;
      const { availableBalance: dogeBal } = balances.balance4;
      const totalBtc = Number(btcBal) * btcPrice?.current_price;
      const totalEth = Number(ethBal) * ethPrice?.current_price;
      const totalBch = Number(bchBal) * bchPrice?.current_price;
      const totalDoge = Number(dogeBal) * dogePrice?.current_price;
      const portfolio = totalBtc + totalEth + totalBch + totalDoge;
      const totalPortfolio = portfolio.toFixed(2);
      dispatch(
        updateMainBalance({
          totalBtc,
          totalEth,
          totalBch,
          totalDoge,
          totalPortfolio,
        })
      );
    }
  }, [balances, metrics]);

  return (
    <div className="bg-[#1c212d] flex flex-col  sm:gap-20 sm:col-span-5 col-span-6 text-white sm:p-10 p-5 sm:mt-0 mt-5">
      {home && <Home />}
      {inbox && <Inbox />}
      {realDashboard && <RealDashboard />}
      {markets && <Markets />}
      {news && <News />}
      {swap && <Swap />}
      {wallets && <Wallets />}
      {buySell && <BuySell />}
      {settings && <Settings />}
      {support && <HelpSupport />}
    </div>
  );
};

export default MainDashboard;
