import React from "react";

const SectionFive = () => {
  const urls = [
    "/card@2x.png",
    "/verify-identity@2x.png",
    "/card@2x.png",
    "/track@2x.png",
    "/manage@2x.png",
  ];
  const titles = [
    "how do i get started!",
    "get your metaverse wallet",
    "make deposits",
    "track latest crypto updates",
    "Enjoy Financial Freedom",
  ];
  const desc = [
    "Register and get your crypto wallet in minutes",
    "You'll need to validate your identity in order to carry out various tasks on the platform",
    "Make deposits to your metaverse crypto wallet and view your current balance on the dashboard",
    "Monitor the market cap for the crypto market and current change within the past week :)",
    "Enjoy annual interests up to 7% and get $100 on sign up to the account",
  ];
  return (
    <div>
      <section className="text-gray-700 sm:p-20 p-10">
        <div className="pb-5">
          <h1 className="sm:text-3xl text-lg font-bold capitalize">
            how do i get started!
          </h1>
          <p>
            We make it easy to experience the future of money and moving your
            crypto assets <br /> improve your portfolio{" "}
          </p>
        </div>
        <div className="flex sm:flex-row flex-col justify-between my-2 sm:gap-5 gap-7">
          {titles.map((x) => {
            const index = titles.indexOf(x);
            return (
              <div key={x} className="text-left">
                <img src={urls[index]} alt="img-05" className="h-12 sm:mb-0 mb-3" />
                <h1 className="font-semibold capitalize">{x}</h1>
                <p className="opacity-50">{desc[index]}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default SectionFive;
