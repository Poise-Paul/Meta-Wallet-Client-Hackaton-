import React from "react";
import toast, { Toaster } from "react-hot-toast";

const Mail = () => {
  const sendMail = () => {
    toast.success("Mail Has Been Recieved 📩");
  }
  return (
    <div className="grid sm:grid-cols-2 items-center px-10 bg-blue-500">
      <div>
        <img
          src="https://markets.bitcoin.com/static/media/mail-lg@2x.73b00894.png"
          alt="main-png"
          className="w-[50%]"
        />
      </div>
      <div className="text-white text-left sm:p-5 flex flex-col gap-3">
        <h1 className="sm:text-4xl text-2xl font-semibold capitalize">
          newsletter
        </h1>
        <p className="sm:text-xl text-sm">
          Sign for our newsletter to recieve regular updates from the team and
          continous updates
        </p>
        <div className="bg-white flex justify-between p-2 rounded-lg">
          <input
            type="email"
            className="bg-transparent text-gray-500 focus:outline-none text-sm"
            placeholder="Email Address"
            required
          />
          <button
            onClick={sendMail}
            type="submit"
            className="bg-blue-500 text-sm rounded-lg p-2 capitalize hover:bg-blue-700 duration-500 ease-in-out"
          >
            sign up
          </button>
        </div>
        <small>
          By clicking <span className="font-semibold">‘Sign up’</span> you
          consent to Metaverse Blockchain App.com sending you price alert and
          continous updates from the your wallet. You may unsubscribe at any
          time. <br />
          <span>
            &copy; 2022 MetaverseBlockchainWallet, Inc. All rights reserved.
          </span>
        </small>
      </div>
      <Toaster />
    </div>
  );
};

export default Mail;
