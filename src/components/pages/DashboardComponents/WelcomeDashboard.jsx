import React from "react";
import { useSelector } from "react-redux";


const WelcomeDashboard = () => {
  const { firstName } = useSelector((state) => state.user.details);

  return (
    <div className="mb-10">
      <h1 className="sm:text-2xl font-semibold">Hi {firstName} 👋</h1>
      <h1 className="sm:text-5xl text-2xl font-bold">
        Welcome to Meta Blockchain Wallet
      </h1>{" "}
      <p className="text-gray-500 text-sm">
        Your gateway to potential interests on holdings and investments in the
        crypto world
      </p>
    </div>
  );
};

export default WelcomeDashboard;
