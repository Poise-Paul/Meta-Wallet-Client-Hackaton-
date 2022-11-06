import React from "react";
import { Activities } from "../../../svgs/Svgs";

const SecondSide = () => {
  return (
    <div className="sm:col-span-2 col-span-4 flex flex-col gap-5">
      <div className=" border-gray-700/50 border-[1px] rounded-lg p-5">
        <h1 className="text-white font-semibold capitalize">asset breakdown</h1>
        <div className="flex flex-col justify-center items-center gap-3 my-7">
          <div className="rounded-full border-8 border-gray-200 h-40 w-40"></div>
        </div>

        <ul>
          <li className="flex justify-between gap-2">
            <div className="flex gap-1 items-center">
              <div className="rounded-full h-2 w-2 bg-green-500"></div>
              <span className="font-semibold">bitcoin cash</span>
            </div>
            <p className="text-gray-500">0%</p>
          </li>
          <li className="flex justify-between gap-2">
            <div className="flex gap-1 items-center">
              <div className="rounded-full h-2 w-2 bg-orange-500"></div>
              <span className="font-semibold">bitcoin </span>
            </div>
            <p className="text-gray-500">0%</p>
          </li>
          <li className="flex justify-between gap-2">
            <div className="flex gap-1 items-center">
              <div className="rounded-full h-2 w-2 bg-blue-500"></div>
              <span className="font-semibold">etheruem</span>
            </div>
            <p className="text-gray-500">0%</p>
          </li>
          <li className="flex justify-between gap-2">
            <div className="flex gap-1 items-center">
              <div className="rounded-full h-2 w-2 bg-yellow-500"></div>
              <span className="font-semibold">stable coins</span>
            </div>
            <p className="text-gray-500">0%</p>
          </li>
          <li className="flex justify-between gap-2">
            <div className="flex gap-1 items-center">
              <div className="rounded-full h-2 w-2 bg-gray-500"></div>
              <span className="font-semibold">others</span>
            </div>
            <p className="text-gray-500">0%</p>
          </li>
        </ul>
      </div>
      {/* Recent Activities */}
      <div className="border-gray-700/50 border-[1px] rounded-lg p-5">
        <h1 className="font-semibold text-white">Recent Activity</h1>
        {/* Middle */}
        <div className="flex flex-col justify-center items-center my-10 gap-5">
          <Activities />
          <p className="text-gray-500">
            Your recent transaction will appear here.
          </p>
        </div>
        {/* End Middle */}
      </div>
      <img
        src="https://app.bitcoin.com/images/uploads/feature-feedback.png"
        alt="feedback-img"
      />
    </div>
  );
};

export default SecondSide;
