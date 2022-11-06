import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { updateComponent } from "../../reducerSlices/componentsReducer";

const Intro = () => {
  const urls = [
    "https://app.bitcoin.com/images/welcome/setup-wallets.png",
    "https://app.bitcoin.com/images/welcome/notifications.png",
  ];
  const links = ["/dashboard/wallets", "/dashboard/inbox"];
  const names = ["wallets", "inbox"];
  const titles = ["set up wallets", "allow notifications"];
  const desc = [
    "Get Started by depositing assets into your Metaverse Wallets",
    "Allow Metaverse Wallet to send notifications to keep you updated.",
  ];
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1 className="sm:text-3xl text-2xl font-bold">What's next</h1>
        <p className="text-gray-500 sm:text-base text-sm">
          Ready to take the next step in your crypto journey? Complete some
          tasks to dive right in.
        </p>
      </div>
      {/* What's new */}
      <div className="flex flex-row gap-5 mt-5">
        {titles.map((x,key) => {
          const index = titles.indexOf(x);
          return (
            <NavLink key={key} to={`${links[index]}`}>
              <div
                className="flex flex-col sm:w-56 rounded-b-2xl bg-[#2d3445]"
                onClick={() => dispatch(updateComponent(`${names[index]}`))}
              >
                <img
                  src={urls[index]}
                  alt="Wallet-Image"
                  className="object-cover rounded-t-2xl"
                />
                <div className="sm:p-5 p-3">
                  <h1 className="font-semibold sm:text-lg text-sm capitalize">
                    {x}
                  </h1>
                  <div className="text-gray-400 sm:text-sm text-xs sm:leading-[1.2em] ">
                    {desc[index]}
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default Intro;
