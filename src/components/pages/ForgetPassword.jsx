import axios from "axios";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { updatePassword } from "../reducerSlices/passwordReducer";

const ForgetPassword = () => {
  const [mail, setMail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const checkDetails = async (e) => {
    e.preventDefault();
    const response = axios.post("http://localhost:8080/forgotPassword", {
      mail,
    });
    toast.promise(response, {
      loading: "Verifying email...",
      success: "Token has been sent successfully,Token is valid for 15 mins ",
      error: "Failed to verify email",
    });
    const passwordDetails = await response;
    console.log("Password Response --", passwordDetails);
    if (passwordDetails.status === 200) {
      dispatch(updatePassword(passwordDetails.data));
      navigate("/reset-password");
    }
  };

  // Send Mail with smtp

  return (
    <>
      <div className="sm:h-screen sm:overflow-hidden max-h-screen bg-[#f1f7fc]">
        <div className="sm:block hidden">
          <Navbar check={true} />
        </div>
        <section className="w-full flex h-full sm:bg-transparent bg-white sm:p-0 justify-center items-center">
          <div className="grid sm:grid-cols-2 items-center bg-white sm:w-[60%] sm:mb-0  w-full rounded-2xl sm:p-10 p-5 sm:border-gray-300 sm:shadow-gray-200 sm:shadow-lg">
            <div className="flex justify-center">
              <img
                src="/land-image.png"
                alt="forget-password-img"
                className="sm:w-[90%] w-full"
              />
            </div>
            <div>
              <div className="sm:mb-3 mb-2">
                <h1 className="sm:text-3xl text-xl font-bold capitalize">
                  forgot password
                </h1>
                <small className="text-gray-400">
                  Enter your registered metaverse blockchain account
                </small>
              </div>
              <form onSubmit={checkDetails}>
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="focus:outline-none bg-white drop-shadow-lg w-full sm:text-lg text-sm  rounded-lg p-3"
                    required
                    autoFocus
                    autoComplete="email"
                    onChange={(e) => setMail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 text-sm transition ease-in-out duration-500 p-2 sm:mt-3 mt-2"
                  >
                    Send Recovery Code
                  </button>
                  <div className="flex sm:flex-row flex-col justify-between">
                    {" "}
                    <Link to="/">
                      <small className="text-gray-700">
                        Go back to login?{" "}
                        <span className="underline text-blue-700">Sign Up</span>
                      </small>
                    </Link>
                    <Link to="/website">
                      <small className="underline text-blue-500 font-semibold cursor-pointer">
                        Visit Website
                      </small>
                    </Link>
                  </div>
                </div>
              </form>
              <Toaster />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ForgetPassword;
