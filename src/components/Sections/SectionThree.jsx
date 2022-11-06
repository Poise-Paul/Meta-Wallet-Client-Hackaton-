import React from "react";

const SectionThree = () => {
  const urls = [
    "/credit-card@2x.png",
    "/twenty-dollars@2x.png",
    "/fast@2x.png",
    "/secure-payment@2x.png",
    "/coins@2x.png",
  ];
  const titles = [
    "get your crypto fast",
    "Start with as little as $1",
    "Secured Wallet",
    "Send and Recieve like breeze",
    "Wide Choice of crypto",
  ];
  const desc = [
    "Register, make your payment in seconds - and get your crypto just minutes later",
    "It’s easy and low-risk to buy deposit and hold in the amount that's right for you",
    "Your funds are protected by a decentralized service running on our backend so be rest assured",
    "Send and recieve crypto currencies on your Metaverse Bitcoin Wallet like breeze",
    "Get access to a selection of the world's leading cryptocurrencies including BTC, ETH, BCH, and more",
  ];
  return (
    <section className="text-gray-700 sm:my-20 sm:p-20 p-5">
      <div>
        <h1 className="sm:text-3xl text-xl font-bold capitalize">
          why hold crypto with us
        </h1>
        <p>
          Metaverse Bitcoin Wallet is a wallet that helps you gain more <br />{" "}
          assets and improve your crypto portfolio{" "}
        </p>
      </div>
      <div className="w-full flex sm:flex-row flex-col text-center justify-between my-10 p-5 gap-5">
        {/* Stuffs */}
        {titles.map((x) => {
          const index = titles.indexOf(x);
          return (
            <div key={x} className="text-left ">
              <img src={urls[index]} alt="img-05" className="h-12" />
              <h1 className="font-semibold capitalize">{x}</h1>
              <p className="opacity-50">{desc[index]}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SectionThree;
