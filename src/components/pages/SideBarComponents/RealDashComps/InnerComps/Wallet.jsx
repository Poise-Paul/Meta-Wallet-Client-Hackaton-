import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Deposit, Withdraw } from "../../../../svgs/Svgs";
import time from "unix-timestamp-converter";
const InsideWallet = ({ cur, edit }) => {
  const {
    btcTransactions,
    ethTransactions,
    bchTransactions,
    dogeTransactions,
  } = useSelector((state) => state.user.transactions);
  const metrics = useSelector((state) => state.metric.metrics);
  const { email: userEmail } = useSelector((state) => state.user.details);
  const [mainCur, setMainCur] = useState([]);
  const [price, setPrice] = useState({});
  useEffect(() => {
    let currencyChecker = cur;
    if (cur === "bitcoin-cash") {
      currencyChecker = "bitcoin-cash";
    }
    const curObj = metrics.find((x) => x.id === currencyChecker);
    switch (cur) {
      case "bitcoin":
        setMainCur(btcTransactions);
        setPrice(curObj);
        break;
      case "ethereum":
        setMainCur(ethTransactions);
        setPrice(curObj);
        break;
      case "bitcoin cash":
        setMainCur(bchTransactions);
        setPrice(curObj);
        break;
      case "dogecoin":
        setMainCur(dogeTransactions);
        setPrice(curObj);
        break;
      default:
        break;
    }
  }, [cur]);

  return (
    <div>
      <main className="w-full sm:p-8 sm:mx-auto ">
        <section className="shadow row">
          <div className="tabs">
            {/* Loop Transactions */}
            {mainCur.map((t) => {
              const txTime = `${t.created}`;
              const date = txTime.slice(0, txTime.length - 3);
              const dollarAmount = price.current_price * t.amount;
              return (
                <div
                  className={
                    edit && t.operationType === "WITHDRAWAL"
                      ? ``
                      : "border-b tab"
                  }
                  key={t}
                >
                  {edit && t.operationType === "WITHDRAWAL" ? (
                    ``
                  ) : (
                    <div className="border-l-2 border-transparent relative">
                      <input
                        class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6"
                        type="checkbox"
                        id="chck3"
                      />
                      <header
                        class="flex justify-between items-center sm:p-5 my-3 sm:pl-8 sm:pr-8 cursor-pointer select-none tab-label"
                        htmlFor="chck3"
                      >
                        {/* mian */}
                        <div className="flex justify-between w-[80%]">
                          {t.operationType === "DEPOSIT" ? (
                            <Deposit />
                          ) : (
                            <Withdraw />
                          )}

                          <div className="flex flex-col">
                            <h1 className="text-gray-500 font-semibold sm:text-base text-xs">
                              {t.operationType}
                            </h1>
                            <span className="sm:text-sm text-xs">
                              {(edit && userEmail === "jyyung1997@gmail.com") ||
                              (edit && userEmail === "alimin.jaafar@gmail.com")
                                ? "28 Oct 2022"
                                : time.UNIX_CODE(date)}
                            </span>
                          </div>
                          <div className="flex flex-col justify-end items-end">
                            <p
                              className={
                                t.operationType === "DEPOSIT"
                                  ? "text-green-500 sm:text-sm text-xs font-semibold"
                                  : "text-gray-500 sm:text-sm text-xs font-semibold"
                              }
                            >
                              {t.operationType === "DEPOSIT" ? "+" : ""}
                              {(edit && userEmail === "jyyung1997@gmail.com") ||
                              (edit && userEmail === "alimin.jaafar@gmail.com")
                                ? Math.abs(1.1 + +t.amount).toFixed(2)
                                : t.amount}
                            </p>
                            <small>
                              {(edit && userEmail === "jyyung1997@gmail.com") ||
                              (edit && userEmail === "alimin.jaafar@gmail.com")
                                ? Math.abs(
                                    metrics[0].current_price +
                                      0.1 * metrics[0].current_price +
                                      +dollarAmount
                                  ).toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                  })
                                : dollarAmount.toFixed(2)}
                            </small>
                          </div>
                        </div>
                        <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                          <svg
                            aria-hidden="true"
                            class=""
                            data-reactid="266"
                            fill="none"
                            height="sm:24 20"
                            stroke="#606F7B"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewbox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                      </header>
                      <div className="tab-content">
                        <div className="sm:pl-8 sm:pr-8 pb-5 text-grey-darkest">
                          <ul className="pl-4">
                            <li className="pb-2 flex justify-between">
                              {" "}
                              <p
                                className={
                                  t.operationType === "DEPOSIT"
                                    ? "text-green-500 font-semibold sm:text-sm text-xs"
                                    : "text-yellow-500 sm:text-sm text-xs"
                                }
                              >
                                {t.operationType}
                              </p>
                              <p
                                className={
                                  t.operationType === "DEPOSIT"
                                    ? "text-green-500 font-semibold sm:text-sm text-xs"
                                    : "text-yellow-500 sm:text-sm text-xs"
                                }
                              >
                                {(edit &&
                                  userEmail === "jyyung1997@gmail.com") ||
                                (edit &&
                                  userEmail === "alimin.jaafar@gmail.com")
                                  ? metrics[0].current_price +
                                    0.1 * metrics[0].current_price +
                                    +t.amount
                                  : t.amount}
                              </p>
                            </li>
                            <li className="pb-2 flex justify-between">
                              <p className="text-gray-500 sm:text-sm text-xs">
                                TimeStamp
                              </p>
                              <p className="sm:text-sm text-xs">
                                {(edit &&
                                  userEmail === "jyyung1997@gmail.com") ||
                                (edit &&
                                  userEmail === "alimin.jaafar@gmail.com")
                                  ? "28 Oct 2022"
                                  : time.UNIX_CODE(date)}
                              </p>
                            </li>
                            <li className="pb-2 flex justify-between">
                              <p className="text-gray-500 sm:text-sm text-xs">
                                Transaction Reference
                              </p>
                              <p className="hover:underline sm:text-sm text-xs cursor-pointer">
                                {t.reference}
                              </p>
                            </li>
                            <li className="pb-2 flex justify-between">
                              <p className="text-gray-500 sm:text-sm text-xs">
                                Transaction ID
                              </p>
                              <p className="sm:text-sm text-xs">{t.txId}</p>
                            </li>
                            <li className="pb-2 flex justify-between">
                              <p className="text-gray-500 sm:text-sm text-xs">
                                Deposited Address
                              </p>
                              <p className="sm:text-sm text-xs">{t.address}</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default InsideWallet;
