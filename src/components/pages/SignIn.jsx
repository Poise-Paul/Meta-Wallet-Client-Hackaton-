import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import toast, { Toaster } from "react-hot-toast";
import { Eye1, Eye2 } from "../svgs/Svgs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateDetails, updateLogIn } from "../reducerSlices/userReducer";
const SignUp = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firstName = useSelector((state) => state.user.details.firstName);
  const loggedIn = useSelector((state) => state.user.loggedIn);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const decide = () => {
    setVisible((previous) => !previous);
  };

  const checkDetails = async (e) => {
    e.preventDefault();
    const result = axios.post("http://localhost:8080/signIn", {
      email,
      password,
    });
    toast.promise(result, {
      loading: "Logging you in...",
      success: (data) => `Welcome Back ${data.data.firstName}`,
      error: (err) => `${err.response.data}`,
    });
    const mainResults = await result;
    if (mainResults.status === 200) {
      dispatch(updateLogIn());
      dispatch(updateDetails(mainResults.data));
      navigate("/dashboard");
    } else {
      alert(mainResults.data);
    }
  };

  useEffect(() => {
    if (loggedIn) {
      window.location.reload();
    }
  }, []);
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
                src="https://wallet.bitcoin.com/images/uploads/homepage-buy-sell-trade-lg@2x.png"
                alt="man-img"
                className="sm:w-[90%] w-full"
              />
            </div>
            <div>
              <div className="sm:mb-3 mb-2">
                <h1 className="sm:text-3xl text-xl font-bold capitalize">
                  sign into your acount
                </h1>
                <small className="text-gray-400 capitalize">
                  earn interests, depopsit and transfer your crypto assets
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
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="relative">
                    <input
                      type={visible ? "text" : "password"}
                      placeholder="Enter your password"
                      className="focus:outline-none sm:text-lg text-sm bg-white drop-shadow-lg shadow-gray-200 rounded-lg p-3 w-full"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div
                      className="absolute right-5 bottom-3 cursor-pointer"
                      onClick={decide}
                    >
                      {visible ? <Eye2 /> : <Eye1 />}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 text-sm transition ease-in-out duration-500 p-2 sm:mt-3 mt-2"
                  >
                    Login
                  </button>
                  <Link to="/forget-password">
                    <small className="text-blue-500 underline font-semibold">
                      Forgot Password
                    </small>
                  </Link>

                  <div className="flex sm:flex-row flex-col justify-between">
                    {" "}
                    <Link to="/signUp">
                      <small className="text-gray-700">
                        Don't have an account?{" "}
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

export default SignUp;
