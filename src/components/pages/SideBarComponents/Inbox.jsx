import React from "react";
import { useSelector } from "react-redux";

import { InboxIcon } from "../../svgs/Svgs";
const Inbox = () => {
  const { email: userEmail } = useSelector((state) => state.user.details);

  return (
    <div className="h-screen">
      <h1 className="sm:text-4xl text-2xl font-bold">Inbox</h1>
      <div className="rounded-lg border-[1px] flex p-14 justify-center border-gray-500/50 mt-3">
        {userEmail === "alimin.jaafar@gmail.com" ? (
          <div className="flex flex-col items-center gap-2">
            <img
              src="https://www.freepnglogos.com/uploads/bitcoin-png/bitcoin-multiply-btc-pick-and-profit-5.png"
              alt="bitcoin-Logo"
              className="h-10 w-10 rounded-full"
            />
            <div className="text-white text-center">
              <h1 className="sm:text-xl font-semibold">
                Bitcoin Loan Recieved 🎉
              </h1>
              <small>
                You Recieved a BTC Loan of (1)BTC + extra (0.1)BTC as bonus to
                your account on <br />{" "}
                <span className="text-gray-400 font-semibold">
                  28 Oct, 2022
                </span>
              </small>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <InboxIcon className="text-gray-400" />
            <div className="text-white text-center">
              <h1 className="sm:text-xl font-semibold">Your inbox is empty</h1>
              <small>
                Deposits, coin swaps, and other important messages will be
                displayed here.
              </small>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inbox;
