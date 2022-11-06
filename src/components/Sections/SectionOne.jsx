import React from "react";

const SectionOne = () => {
  return (
    <section>
      <div className="grid sm:grid-cols-2 sm:my-10 mt-10 ">
        <div className="flex justify-center">
          {" "}
          <img
            src="https://www.bitcoin.com/images/uploads/homepage-buy-sell-lg@2x.png"
            alt="img"
            className="sm:h-[30rem] h-[20rem] object-cover"
          />
        </div>
        <div className="flex text-gray-700 flex-col text-left justify-center p-10">
          <div className="text-left">
            <span className="sm:text-4xl text-2xl font-bold">
              {" "}
              Get free $100 free money
            </span>
            <br /> When you Create an Account{" "}
            <span className="font-bold">today :)</span> that's not all <br />{" "}
            you get interests per annum up to 7% when you hold your <br />{" "}
            cryptocurrencies
          </div>
          <p className="text-black font-medium">
            Note: We are new and this offer is just for the first <br />
            <span className="font-bold text-blue-500">1000</span> users{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
