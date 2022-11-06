import React from "react";
import { Exchange } from "../../svgs/Svgs";

const Swap = () => {
  return (
    <div className="h-screen">
      <h1 className="sm:text-3xl text-xl font-semibold">Swap</h1>
      {/* Main Swapper */}
      <div className="rounded-lg bg-[#1C212D] sm:w-[50%] border-[1px] border-gray-500 my-10 p-5">
        <span className="text-gray-500 font-semibold text-sm">USD | BCH</span>
        <div className="flex justify-between">
          <span>Available: 0 BCH</span>
          <span>
            Refund to: <span className="text-blue-500">Change</span>{" "}
          </span>
        </div>
        {/* Sender Boxes */}
        <div className="flex justify-between gap-3 my-3">
          <input
            className="rounded-lg border-[1px] w-[70%] font-semibold bg-transparent p-2 border-gray-500"
            placeholder="0.00"
          />
          <input
            className="rounded-lg border-[1px] bg-transparent p-2 border-gray-500"
            placeholder="0.00"
          />
        </div>
        {/* Throw */}
        <div className="flex flex-col  gap-2  ">
          {/* Right */}
          <div className="flex gap-5">
            <div className="justify-start items-center w-10 flex flex-col gap-2">
              <div className="border-l-[1px] border-gray-500 h-10"></div>
              <div className="bg-gradient-to-l w-10 p-1 flex justify-center items-center h-10 rounded-lg from-blue-500 to-blue-700 text-white">
                <Exchange />
              </div>
              <div className="border-l-[1px] border-gray-500 h-10"></div>
            </div>
            {/* Second */}
            <div className="flex items-center text-sm">
              {" "}
              <span className="text-gray-500 font-semibold">
                1 BCH = 0.078004 ETH ($118.59)
              </span>
            </div>
          </div>
        </div>
        {/* Recieve Box */}
        <div className="flex justify-between gap-3 my-3">
          <input
            className="rounded-lg border-[1px] w-[70%] font-semibold bg-transparent p-2 border-gray-500"
            placeholder="0.00"
          />
          <input
            className="rounded-lg border-[1px] bg-transparent p-2 border-gray-500"
            placeholder="0.00"
          />
        </div>
        {/* End */}
        <div className="flex justify-between">
          <small>Estimated Amount to recieve</small>
          <button className="bg-gray-500 w-56 hover:bg-gray-700 transition duration-500 ease-in-out p-2 font-semibold rounded-lg text-white">
            Swap Preview
          </button>
        </div>
      </div>
      {/* End Mian Swapper */}
    </div>
  );
};

export default Swap;
