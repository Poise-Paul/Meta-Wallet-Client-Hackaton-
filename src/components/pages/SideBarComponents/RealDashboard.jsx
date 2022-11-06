import React from "react";
import FirstSide from "./RealDashComps/FirstSide";
import RealTop from "./RealDashComps/RealTop";
import SecondSide from "./RealDashComps/SecondSide";

const RealDashboard = () => {
  return (
    <div>
      {/* Top Header Dashboard */}
      <div className="flex flex-col gap-5">
        <RealTop name="dashboard"/>
        {/* Main */}
        <div className="grid sm:grid-cols-6 gap-5">
          <FirstSide />
          <SecondSide />
        </div>
      </div>
    </div>
  );
};

export default RealDashboard;
 