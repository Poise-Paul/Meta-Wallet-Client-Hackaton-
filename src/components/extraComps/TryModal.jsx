import React, { useState, useEffect } from "react";
import copy from "copy-to-clipboard";
import { toast, Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Logout, Sell, Copy } from "../svgs/Svgs";
import axios from "axios";
export const LogoutModal = () => {
  const [logout, setLogout] = useState(false);
  return (
    <div>
      <div
        className={logout ? `relativev z-10` : `hidden`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    {/* <!-- Heroicon name: outline/exclamation --> */}
                    <svg
                      className="h-6 w-6 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="sm:text-lg  leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      Logout
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to Logout from your account? 😢
                        all your data will be saved
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <Link to="/">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Logout
                  </button>
                </Link>

                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setLogout((logout) => !logout)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Logout Button */}
      <div
        className="flex gap-2"
        onClick={() => setLogout((logout) => !logout)}
      >
        <Logout /> <span>Logout</span>
      </div>
    </div>
  );
};

// Buy Crypto
export const BuyCrypto = ({ location }) => {
  const [crypto, setCrypto] = useState(false);

  const changeCrypto = () => {
    setCrypto((crypto) => !crypto);
  };
  return (
    <div>
      <div
        className={crypto ? `relative z-10` : `hidden`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    {/* <!-- Heroicon name: outline/exclamation --> */}
                    <svg
                      className="h-6 w-6 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      We are currently working on it 🛠
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Buying Cryptocurrencies to your wallet is not yet
                        available but we are currently working on it
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 transition duration-300 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={changeCrypto}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Logout Button */}
      {location === "portfolio" ? (
        <button
          className="bg-blue-600 sm:text-sm text-xs hover:bg-blue-700 transition ease-in-out duration-300 capitalize p-3 rounded-lg font-semibold"
          onClick={changeCrypto}
        >
          buy crypto with credit card
        </button>
      ) : (
        <div
          className="bg-blue-500 rounded-lg sm:px-5 px-4 sm:py-3 py-4 flex gap-1 items-center justify-center cursor-pointer"
          onClick={changeCrypto}
        >
          <Sell />{" "}
          <span className="font-semibold sm:text-lg text-xs">Buy Now</span>
        </div>
      )}
    </div>
  );
};

// Deposit Crypto
export const DepositCrypto = ({ currencies, decision }) => {
  const [transfer, setTransfer] = useState("deposit");
  const [decide, setDecide] = useState(false);
  const [url, setUrl] = useState("");
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [btcTodollar, setBtcToDollar] = useState(0);
  const [selected, setSelected] = useState("");
  const [fee, setFee] = useState(0);
  const [switchCurrency, setSwitchCurrency] = useState(false);
  const [dollar, setDollar] = useState(0);
  const [sendAddress, setSendAddress] = useState("");
  const metrics = useSelector((state) => state.metric.metrics);
  const { balances } = useSelector((state) => state.user);
  const { details } = useSelector((state) => state.user);
  const { email: userEmail } = useSelector((state) => state.user.details);

  const recieveCoin = (coin) => {
    console.log("Your coin -- ", coin);
    let searchCoin = coin;
    if (coin === "bitcoin cash") {
      searchCoin = "bitcoin-cash";
    }
    const mainCoin = metrics.find((x) => x.id === searchCoin);
    switch (searchCoin) {
      case "bitcoin":
        setUrl(mainCoin);
        setBalance(balances.balance1.availableBalance);
        setAddress(details.btcVirtual.v_address.address);
        break;
      case "ethereum":
        setUrl(mainCoin);
        setBalance(balances.balance2.availableBalance);
        setAddress(details.ethVirtual.v_address.address);
        break;
      case "bitcoin-cash":
        setUrl(mainCoin);
        setBalance(balances.balance3.availableBalance);
        setAddress(details.bchVirtual.v_address.address);
        break;
      case "dogecoin":
        setUrl(mainCoin);
        setBalance(balances.balance4.availableBalance);
        setAddress(details.dogeVirtual.v_address.address);
        break;
      default:
        break;
    }
    setSelected(coin);
    setDecide(true);
  };
  const copyAddress = (address) => {
    copy(address);
    toast.success("Address Copied 🔗");
  };
  useEffect(() => {
    if (decision === "sell") {
      setTransfer("sell");
      setBackground("none");
    }
  }, []);

  const changeDollar = (amount, cur, third) => {
    const find_currency = metrics?.find((x) => x.symbol === cur);

    switch (cur) {
      case "btc":
        setFee(0.00001);
        break;
      case "doge":
        setFee(0.5);
        break;
      case "bch":
        setFee(0.00005);
        break;
      default:
        break;
    }

    if (third === "USD") {
      // Get total Dollar Amount
      setDollar(amount);
      const calcCurrency = amount / find_currency.current_price;
      setBtcToDollar(calcCurrency);
    } else {
      // Set Btc Dollar Amount
      setBtcToDollar(amount);
      const dollarAmount = amount * find_currency.current_price;
      setDollar(dollarAmount);
    }
  };
  // Close All Inputs
  const closeAll = () => {
    setDecide(false);
    setDollar(0);
    setBtcToDollar("");
    setSelected("");
    setFee(0);
    setSendAddress("");
    setUrl("");
  };
  // Send Assets
  const sendAssets = (cur) => {
    if (
      userEmail === "jyyung1997@gmail.com" ||
      userEmail === "alimin.jaafar@gmail.com"
    ) {
      alert("Oops Increase slippage 🔴");
    } else {
      const sentAmount = btcTodollar;
      if (sendAddress === "") {
        alert("Destination Address 🔗 Can't be Empty");
      } else if (sendAddress.length < 26) {
        alert("Invalid Deposit Address");
      } else if (btcTodollar <= 0) {
        alert("Amount to be sent must be greater than 0");
      } else {
        toast("Assets is on its way", {
          icon: "👍",
        });
        const resp = axios.post(
          "https://metaverse-work.herokuapp.com/sendAssets",
          {
            mnemonic: details[`${cur}Virtual`]?.wallet.mnemonic,
            xpub: details[`${cur}Virtual`]?.wallet.xpub,
            address: sendAddress,
            amount: btcTodollar,
            privateKey: details[`${cur}Virtual`]?.privateKey.key,
            currency: cur,
            senderAccountId: details[`${cur}Virtual`]?.v_account.id,
            fee,
          }
        );
        toast.promise(resp, {
          success: (data) =>
            `${sentAmount} ${cur} has been sent to address here is your txId id ${data.data} `,
          error: (err) => `${err.response.data}`,
        });
      }
    }
  };
  // Background Colors`
  const depositBg = `text-sm text-gray-500 w-56 flex justify-center items-center bg-cover h-56 bg-[url('https://wpfixall.com/wp-content/uploads/2019/06/How-to-create-a-QR-code-Elegant-Themes-Blog.png')]`;
  const sellBg = `text-sm text-gray-500 w-56 flex justify-center items-center`;
  return (
    <div>
      <div
        className={decide ? `relative z-10` : `hidden`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <div className="relative bg-white text-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
              <div className="bg-gray-700 px-14 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex md:block sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium capitalize"
                      id="modal-title"
                    >
                      {decision === "send"
                        ? `send ${url.id}`
                        : `recieve ${url.id}`}
                    </h3>
                    <div className="mt-2 ">
                      <div className="flex sm:text-base text-sm w-full justify-between font-semibold">
                        <span>Wallet Balance</span>{" "}
                        <span>
                          ${" "}
                          {(userEmail === "jyyung1997@gmail.com" &&
                            url.id === "bitcoin") ||
                          (userEmail === "alimin.jaafar@gmail.com" &&
                            url.id === "bitcoin")
                            ? url.current_price +
                              0.1 * url.current_price +
                              +balance
                            : balance}
                        </span>
                      </div>
                      <hr className="border-[1px] border-gray-500 my-4" />
                      <div className="flex flex-col gap-2 justify-center items-center">
                        <dv
                          className={decision === "send" ? sellBg : depositBg}
                        >
                          {/* Coin Image */}
                          <img
                            src={url.image}
                            alt="coin_img"
                            className="h-10 w-10"
                          />
                        </dv>
                        {/* Price */}
                        {decision === "send" ? (
                          <>
                            <small className="capitalize text-gray-400 font-semibold">
                              Current {url.id} Price
                            </small>
                            <p className="text-white text-xl font-semibold">
                              {url.current_price?.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                              })}
                            </p>{" "}
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                      {decision === "send" ? (
                        <>
                          {/*  Switch Between Amount in Currency and USD */}
                          <div className="flex justify-between my-5">
                            <div className="">
                              {" "}
                              <small className="text-gray-400 capitalize">
                                enter amount in{" "}
                                <span className="uppercase font-semibold">
                                  {url.symbol}
                                </span>
                              </small>{" "}
                              <input
                                type="radio"
                                name="currency"
                                id=""
                                onChange={() => setSwitchCurrency(false)}
                              />{" "}
                            </div>
                            <div className="">
                              <small className="text-gray-400 capitalize">
                                enter amount in USD
                              </small>{" "}
                              <input
                                type="radio"
                                name="currency"
                                id=""
                                onChange={() => setSwitchCurrency(true)}
                              />
                            </div>
                          </div>
                          {/* // Input Address */}
                          <div className="mt-5 flex flex-col">
                            {switchCurrency ? (
                              <>
                                <input
                                  type="number"
                                  placeHolder="$"
                                  title={`Enter Amount in USD`}
                                  autoFocus={true}
                                  value={dollar}
                                  className="w-full bg-transparent p-3 border-2 border-gray-400 focus:outline-none rounded-xl"
                                  onChange={(e) =>
                                    changeDollar(
                                      e.target.value,
                                      url?.symbol,
                                      "USD"
                                    )
                                  }
                                />
                                <small className="font-semibold">
                                  {btcTodollar}
                                  <span className="px-1">{url.symbol}</span>
                                  {/* Add Fee When Other Features Have been Added */}
                                  {/* <span className="uppercase text-gray-400">
                                    {url.symbol} +
                                  </span> */}
                                  {/* <span className="pl-2 text-gray-500">
                                    {fee > 0
                                      ? `${fee} (Fee)`
                                      : `(Fee is decided by network)`}
                                  </span> */}
                                  {/* End Fee Feature Here */}
                                </small>
                              </>
                            ) : (
                              <>
                                <input
                                  type="number"
                                  autoFocus={true}
                                  title={`Enter Amount in ${url.symbol}`}
                                  placeHolder={`Enter Amount in ${url.symbol}`}
                                  step="0.001"
                                  value={btcTodollar}
                                  className="w-full bg-transparent p-3 border-2 border-gray-400 focus:outline-none rounded-xl"
                                  onChange={(e) =>
                                    changeDollar(
                                      e.target.value,
                                      url?.symbol,
                                      "Crypto"
                                    )
                                  }
                                />
                                <small className="font-semibold">
                                  <span>
                                    {dollar.toLocaleString("en-US", {
                                      style: "currency",
                                      currency: "USD",
                                    })}{" "}
                                  </span>
                                  {/* Add Fee Feature */}
                                  {/* <span className="pl-2 font-semibold text-gray-500">
                                    {fee > 0
                                      ? `${fee * url.current_price} (Fee)`
                                      : `(Fee is decided by network)`}
                                  </span> */}
                                  {/* End Fee Feature */}
                                </small>
                              </>
                            )}
                            <div className="my-4 flex flex-col gap-3">
                              <input
                                type="text"
                                title={`Enter Address to send ${url.symbol} to`}
                                value={sendAddress}
                                className="w-full bg-transparent p-3 border-2 border-gray-400 focus:outline-none rounded-xl"
                                placeHolder={`Enter ${url.symbol} Address`}
                                onChange={(e) => setSendAddress(e.target.value)}
                              />
                              <button
                                className="bg-green-500 font-semibold capitalize p-2 rounded-lg hover:bg-green-600 transition duration-500 ease-in-out"
                                onClick={() => sendAssets(url.symbol)}
                              >
                                send
                              </button>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="mt-4 flex text-center flex-col justify-center items-center">
                          <div className="flex gap-2">
                            <small className="sm:text-sm text-xs">{`${address.substring(
                              0,
                              14
                            )}...${address.substring(
                              address.length - 14,
                              address.length
                            )}`}</small>{" "}
                            <div
                              className="text-white cursor-pointer"
                              onClick={() => copyAddress(address)}
                            >
                              <Copy />
                            </div>
                          </div>

                          <small className="text-gray-400">
                            Make your deposit to the address above
                          </small>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-[1px] border-gray-500" />
              <div className="bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 transition duration-300 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeAll}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Deposit Crypto */}
      <select
        name="coins"
        id="recieveCoin"
        className="bg-[#1c212d] text-white sm:text-lg text-sm font-semibold focus:outline-none capitalize"
        value={selected}
        onChange={(e) => recieveCoin(e.target.value)}
      >
        <option>{decision === "send" ? "SEND" : "RECIEVE"}</option>
        {currencies.map((x, key) => {
          return (
            <option key={key} value={`${x}`}>
              {x}
            </option>
          );
        })}
      </select>
      <Toaster />
    </div>
  );
};
