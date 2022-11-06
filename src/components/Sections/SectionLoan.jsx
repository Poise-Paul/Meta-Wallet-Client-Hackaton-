import React from "react";

const SectionLoan = () => {
  return (
    <section>
      <div className="grid sm:grid-cols-2 sm:my-10 mt-10 ">
        <div className="flex justify-center">
          {" "}
          <img
            src="https://www.bitcoin.com/images/uploads/homepage-hero-lg@2x.png"
            alt="img"
            className="sm:h-[30rem] h-[20rem] object-cover"
          />
        </div>
        <div className="flex text-gray-700 flex-col text-left justify-center p-10">
          <div className="text-left">
            <span className="sm:text-4xl text-2xl font-bold">
              {" "}
              Metaverse Bitcoin Loan Application
            </span>
            <br />
            Instant Crypto Loan is an instant Bitcoin-backed loan that provides
            a transparent & ethical service between crypto enthusiast. <br /> A
            regulate institution for digital assets.
          </div>
          <small className="am:mt-5 mt-3">
            &copy; 2022 MetaverseBlockchainLoan, Inc. All rights reserved.
          </small>
          <a href="http://metaverseblockchainloan.com" target="_blank">
            <button className="bg-blue-500 mt-5 w-56 text-white cursor-pointer rounded-md p-2 hover:bg-blue-700 transition ease-in-out duration-500">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionLoan;
