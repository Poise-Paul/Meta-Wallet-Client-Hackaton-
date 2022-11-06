import React from "react";
import { Link } from "react-router-dom";
const navbar = ({ check }) => {
  let ulClass, buttonClass;
  if (check) {
    ulClass = `hidden`;
    buttonClass = `hidden`;
  } else {
    ulClass = `flex gap-10  justify-center`;
    buttonClass = `flex items-center gap-10 justify-end `;
  }
  return (
    <>
      <nav className="grid grid-cols-2 px-10 sm:h-16 h-10 shadow-md items-center sm:text-lg font-medium">
        <div>
          <Link to="/website">
            <p className="font-semibold text-base  capitalize">
              metaverse wallet
            </p>{" "}
          </Link>
        </div>

        <div className={buttonClass}>
          <Link to="/">
            {" "}
            <p className="cursor-pointer"></p> Login
          </Link>
          <Link to="/signUp">
            <button className="bg-blue-500 font-semibold text-white sm:text-base text-sm cursor-pointer rounded-md sm:p-2 p-1 hover:bg-blue-700 transition ease-in-out duration-500">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default navbar;

// SMTP JS Details
// Password - F8AA8EBCB40917E0036EFDB9138CA2DBC328;
// server - smtp.elasticemail.com
//Secure Token -- 6f339985-7dee-4962-b57b-75743465090d 
// port - 2525
