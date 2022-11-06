import React, { useState, useEffect } from "react";
import { updateComponent } from "../../reducerSlices/componentsReducer";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Dashboard,
  Inbox,
  Wallet,
  Sell,
  Swap,
  Market,
  News,
  Support,
  Settings,
  Home,
  Logout,
  Menu,
  Close,
  Loan,
  NFT,
} from "../../svgs/Svgs";
import toast, { Toaster } from "react-hot-toast";
import { LogoutModal } from "../../extraComps/TryModal";

const SideBar = ({ userName, firstName }) => {
  const [sidebar, setSideBar] = useState(false);
  const [logout, setLogout] = useState(false);
  const { home, inbox, markets, news, realDashboard, swap, wallets, buySell } =
    useSelector((state) => state.component);

  const dispatch = useDispatch();
  const activeStyle = `text-white flex gap-3 bg-green-700/10 cursor-pointer rounded-lg items-center p-2`;
  const normal = `items-center flex text-gray-500 cursor-pointer gap-3 p-2 hover:text-white transition duration-300 ease-in-out`;

  const hideBar = () => {
    console.log("Sidebar called");
    setSideBar((previous) => !previous);
    const sideBarId = document.getElementById("sideBar");
    const mainSideBar = document.getElementById("mainSideBar");
    sideBarId.classList.toggle("hidden");
    mainSideBar.classList.toggle("bg-[#141720]");
  };

  const changeSideBar = (comp) => {
    dispatch(updateComponent(comp));
    if (sidebar) {
      hideBar();
    }
  };

  return (
    <>
      <div
        id="mainSideBar"
        className={`flex flex-col sm:bg-[#141720] sm:p-5 p-2 fixed z-10 h-full`}
      >
        <div
          className="sm:hidden absolute z-100 cursor-pointer flex duration-300 transition ease-in-out"
          onClick={hideBar}
        >
          {sidebar ? <Close /> : <Menu />}
        </div>
        <aside
          className="sm:block  hidden overflow-auto transition ease-in-out duration-300"
          id="sideBar"
        >
          <h1 className="uppercase sm:text-sm text-xs font-bold text-white my-5">
            Meta Wallet
          </h1>
          <div className="flex flex-col gap-7 font-semibold">
            <ul className="flex flex-col">
              <NavLink to="/dashboard">
                <li
                  className={home ? activeStyle : normal}
                  onClick={() => changeSideBar("home")}
                >
                  <span className={home ? "text-green-500" : "text-gray-500"}>
                    <Home />
                  </span>
                  <span className="text-sm">Home</span>{" "}
                </li>
              </NavLink>

              <NavLink to="/dashboard/inbox">
                <li
                  className={inbox ? activeStyle : normal}
                  onClick={() => changeSideBar("inbox")}
                >
                  {" "}
                  <span className={inbox ? "text-green-500" : "text-gray-500"}>
                    <Inbox />
                  </span>
                  <span className="text-sm">Inbox</span>
                </li>
              </NavLink>
            </ul>
            <ul className="text-gray-500">
              <NavLink to="/dashboard/main">
                <li
                  className={realDashboard ? activeStyle : normal}
                  onClick={() => changeSideBar("realDashboard")}
                >
                  {" "}
                  <span
                    className={
                      realDashboard ? "text-green-500" : "text-gray-500"
                    }
                  >
                    <Dashboard />
                  </span>
                  <span className="text-sm">Dashboard</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard/wallets">
                <li
                  className={wallets ? activeStyle : normal}
                  onClick={() => changeSideBar("wallets")}
                >
                  {" "}
                  <span
                    className={wallets ? "text-green-500" : "text-gray-500"}
                  >
                    <Wallet />
                  </span>
                  <span className="text-sm">Wallets</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard/buy-sell">
                <li
                  className={buySell ? activeStyle : normal}
                  onClick={() => changeSideBar("buySell")}
                >
                  {" "}
                  <span
                    className={buySell ? "text-green-500" : "text-gray-500"}
                  >
                    <Sell />
                  </span>
                  <span className="text-sm">Buy/Sell</span>
                </li>
              </NavLink>
              {/* Work on Coin Swap Here */}
              {/* <NavLink to="/dashboard/swap">
                <li
                  className={swap ? activeStyle : normal}
                  onClick={() => changeSideBar("swap")}
                >
                  {" "}
                  <span className={swap ? "text-green-500" : "text-gray-500"}>
                    <Swap />
                  </span>
                  <span className="text-sm">Swap</span>
                </li>
              </NavLink> */}
              {/* End Work on coin swap */}
            </ul>
            <ul className="text-gray-500">
              <NavLink to="/dashboard/markets">
                <li
                  className={markets ? activeStyle : normal}
                  onClick={() => changeSideBar("markets")}
                >
                  {" "}
                  <span
                    className={markets ? "text-green-500" : "text-gray-500"}
                  >
                    <Market />
                  </span>
                  <span className="text-sm">Markets</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard/news">
                <li
                  className={news ? activeStyle : normal}
                  onClick={() => changeSideBar("news")}
                >
                  {" "}
                  <span className={news ? "text-green-500" : "text-gray-500"}>
                    <News />
                  </span>
                  <span className="text-sm">News</span>
                </li>
              </NavLink>
              {/* Add NFT */}
              <a href="https://www.nifty-gateway.dev/" target="_blank">
                <li className={normal}>
                  {" "}
                  <span className="text-gray-500">
                    <NFT />
                  </span>
                  <span className="text-sm">NFT</span>
                </li>
              </a>
            </ul>
            {/* Account Section */}
            <hr className="border-gray-700" />
            <ul className="text-white">
              <li className="flex gap-2 items-center my-3">
                {" "}
                <div className="bg-yellow-500 text-center flex justify-center items-center capitalize rounded-full h-7 w-7 text-white">
                  {firstName?.substring(0, 1)}
                </div>{" "}
                <small>{userName}</small>
              </li>
              <NavLink to="/dashboard/settings">
                <li
                  className="items-center flex cursor-pointer text-gray-500 gap-3 p-2"
                  onClick={() => changeSideBar("settings")}
                >
                  {" "}
                  <span className="text-green-500">
                    <Settings />
                  </span>
                  <span className="text-sm">Settings</span>
                </li>
              </NavLink>

              <NavLink to="/dashboard/support">
                <li
                  className="items-center flex cursor-pointer text-gray-500 gap-3 p-2"
                  onClick={() => changeSideBar("support")}
                >
                  {" "}
                  <span className="text-green-500">
                    <Support />
                  </span>
                  <span className="text-sm">Help & Support</span>
                </li>
              </NavLink>
              <li
                className="items-center flex cursor-pointer text-gray-500 gap-3 p-2"
                onClick={() => alert("Loan Application Coming Soon 🙏")}
              >
                {" "}
                <span className="text-green-500">
                  <Loan />
                </span>
                <span className="text-sm">Metaverse Loan</span>
              </li>
            </ul>
            <hr className="border-gray-700" />
            <ul>
              {" "}
              <li className="items-center flex text-gray-500 gap-3 p-2 cursor-pointer">
                <LogoutModal />
              </li>
            </ul>
            <Toaster />
          </div>
        </aside>
      </div>
    </>
  );
};

export default SideBar;
