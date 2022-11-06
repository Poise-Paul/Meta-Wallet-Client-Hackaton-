import React from "react";

const SectionSix = () => {
  return (
    <div>
      <section className="sm:p-40 p-10">
        <div className="bg-white shadow-lg shadow-gray-200 rounded-3xl grid p-10 sm:grid-cols-2 items-center border-2 border-gray-200">
          <div className="">
            <img src="/walletApp.png" alt="wallet-img" className="w-[80%]" />
          </div>
          <div className="text-left flex flex-col gap-5">
            <h1 className="sm:text-3xl text-sm capitalize pt-5 font-bold">
              start investing and holding your crypto assets and gain more{" "}
              <span className="text-blue-500 font-semibold">interests</span> on
              your assets
            </h1>
            <small className="text-gray-400">
              Everything you need to invest your Bitcoin and cryptocurrency
              securely
            </small>
            <div className="flex flex-row gap-3 ">
              <img
                src="https://markets.bitcoin.com/static/media/app-store-download@2x.c0dfa664.png"
                className="sm:w-48 w-28 object-cover"
                alt="app-store"
              />
              <img
                src="https://markets.bitcoin.com/static/media/google-play-download@2x.c38dedb7.png"
                className="sm:w-48 w-28 object-cover"
                alt="play-store"
              />
            </div>
            <h1 className="sm:text-xl text-blue-500 font-medium">
              App Launching Soon!
            </h1>
          </div>
        </div>
      </section>
    </div> 
  );
};

export default SectionSix;
