import React from "react";

const HowToCrypto = () => {
  const urls = [
    "https://app.bitcoin.com/images/uploads/use-crypto-maps.png",
    "https://app.bitcoin.com/images/uploads/use-crypto-games.png",
    "https://app.bitcoin.com/images/uploads/use-crypto-purse.png",
  ];
  const title = ["spend it", "play games", "save up to 20% on Amazon"];
  const description = [
    "Find places offline and online that accepts crypto payments.",
    "Up the ante with crypto-enabled casino games.",
    "Purse.io unlocks discounts at the world's premiere reatailer.",
  ];
  return (
    <div className="flex flex-col my-10">
      <div className="">
        <h1 className="sm:text-4xl text-2xl font-bold">
          Ways to use your crypto
        </h1>{" "}
        <p className="text-gray-500 text-sm sm:text-xs">
          Go beyond speculation
        </p>
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-5 justify-between mt-5">
        {" "}
        {/* How to Crypto */}
        {title.map((x, key) => {
          const index = title.indexOf(x);
          let classSet = "flex flex-col rounded-b-2xl bg-[#2d3445]"
          if (index === 2) {
            classSet = "flex flex-col rounded-b-2xl bg-[#2d3445] sm:col-span-1 col-span-2"
          }
          return (
            <div key={key} className={classSet}>
              <img
                src={urls[index]}
                alt="Wallet-Image"
                className="object-cover rounded-t-2xl"
              />
              <div className="sm:p-5 p-3">
                <h1 className="font-semibold sm:text-lg text-sm capitalize">
                  {x}
                </h1>
                <div className="text-gray-400 sm:text-sm text-xs leading-[1.2em]">
                  {description[index]}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowToCrypto;
