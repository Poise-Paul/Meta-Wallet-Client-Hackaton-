import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateBalances,
  updateTransactions,
} from "../../reducerSlices/userReducer";
import CryptoStarted from "../DashboardComponents/CryptoStarted";
import Highlights from "../DashboardComponents/Highlights";
import HowToCrypto from "../DashboardComponents/HowToCrypto";
import Intro from "../DashboardComponents/Intro";
import News from "../DashboardComponents/News";
import Portfolio from "../DashboardComponents/Portfolio";
import Socials from "../DashboardComponents/Socials";
import WelcomeDashboard from "../DashboardComponents/WelcomeDashboard";

const Home = () => {
  const dispatch = useDispatch();
  const { btcVirtual, ethVirtual, bchVirtual, dogeVirtual } = useSelector(
    (state) => state.user.details
  );
  const { id: btcId } = btcVirtual?.v_account;
  const { id: ethId } = ethVirtual?.v_account;
  const { id: bchId } = bchVirtual?.v_account;
  const { id: dogeId } = dogeVirtual?.v_account;

  useEffect(() => {
    const get_balances = async () => {
      const response = await axios.post("http://localhost:8080/getBalances", {
        btcId,
        ethId,
        bchId,
        dogeId,
      });
      const result = await response.data;
      dispatch(updateBalances(result));
      // Transaction History
      const allTransactions = await axios.post(
        "http://localhost:8080/transactions",
        {
          btcId,
          ethId,
          bchId,
          dogeId,
        }
      );
      console.log("All Transactions", allTransactions);
      const transactions = await allTransactions.data;
      dispatch(updateTransactions(transactions));
    };
    get_balances();
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <WelcomeDashboard />
        <Intro />
        <Portfolio />
        <Highlights />
        <News />
        <CryptoStarted />
        <HowToCrypto />
        <Socials />
      </div>
    </>
  );
};

export default Home;
