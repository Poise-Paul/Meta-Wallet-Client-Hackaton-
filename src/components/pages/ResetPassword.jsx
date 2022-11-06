import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import PasswordStrength from "react-password-strength";
import toast, { Toaster } from "react-hot-toast";
import { Eye1, Eye2 } from "../svgs/Svgs";
import copy from "copy-to-clipboard";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ResetPassword = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");
  const [tokenText, SetTokenText] = useState("");
  const [passwordVisible, SetPasswordVisible] = useState(false);
  const [decide, SetDecide] = useState(false);
  const [suggestedPassword, SetSuggestedPassword] = useState(null);
  const [suggestViewer, SetSuggetViewer] = useState("");
  const { _id, token } = useSelector((state) => state.password.data);
  const navigate = useNavigate();
  // Save Password
  const cB = (e) => {
    SetPassword(e.password);
  };

  const changeVisible = () => {
    SetPasswordVisible((previous) => !previous);
    SetDecide((previous) => !previous);
  };
  const copyText = () => {
    copy(suggestViewer);
    toast.success("Password copied to clipboard 🤞");
  };
  // axios
  useEffect(() => {
    const getSuggested = async () => {
      const { data } = await axios.get(
        "https://metaverse-work.herokuapp.com/getPassword"
      );
      SetSuggestedPassword(data);
    };
    getSuggested();
  }, [suggestViewer]);

  // Use Suggested
  const useSuggested = () => {
    SetSuggetViewer(suggestedPassword);
    SetPassword(suggestedPassword);
  };
  // End Suggested

  const resetPassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Your new Password does not match");
    } else if (password === confirmPassword) {
      if (tokenText !== token) {
        toast.error("Invalid token");
      } else if (tokenText === token) {
        const response = axios.put("http://localhost:8080/forgotPassword", {
          _id,
          token,
          password,
        });
        toast.promise(response, {
          loading: "Creating your new password...",
          success: (data) => `${data.data}`,
          error: (data) => `${data.error.data}`,
        });
        const result = await response;
        if (result.status === 200) {
          navigate("/");
        }
      }
    }
  };
  return (
    <div className="bg-[#f1f7fc] sm:h-screen sm:overflow-hidden">
      <div className="sm:block hidden">
        <Navbar check={true} />
      </div>
      <section className="w-full h-full flex sm:bg-transparent bg-white sm:p-5 justify-center items-center">
        <div className="grid relative sm:grid-cols-2 items-center sm:w-[60%] sm:mb-14 w-full bg-white p-10 rounded-2xl sm:border-gray-300 sm:shadow-gray-200 sm:shadow-lg">
          <div>
            <img
              src="/walletApp.png"
              alt="reset-Password-img"
              className="sm:w-[90%]"
            />
          </div>
          <div>
            <div className="mb-3">
              <h1 className="sm:text-3xl text-xl font-bold capitalize">
                create a new password for your account
              </h1>
            </div>
            <form onSubmit={resetPassword}>
              <div className="flex flex-col gap-2">
                {" "}
                <div className="flex relative">
                  <PasswordStrength
                    className="drop-shadow-md sm:text-lg text-sm bg-white rounded-lg w-full"
                    //   defaultValue={`${password}`}
                    style={{ border: "none" }}
                    changeCallback={cB}
                    minLength={6}
                    minScore={2}
                    scoreWords={["weak", "okay", "good", "strong", "stronger"]}
                    inputProps={{
                      id: "myPassword",
                      name: "password_input",
                      autoComplete: "off",
                      type: `${decide ? "text" : "password"}`,
                      placeholder: "Enter Password",
                      className:
                        "form-control text-sm bg-transparent password-input",
                      required: "required",
                      // value: password,
                    }}
                  />{" "}
                  <div
                    className="absolute right-14 bottom-3 cursor-pointer text-gray-400"
                    onClick={changeVisible}
                  >
                    {passwordVisible ? <Eye2 /> : <Eye1 />}
                  </div>{" "}
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Comfirm Password"
                  className="drop-shadow-md sm:text-lg text-sm bg-white rounded-lg p-3 "
                  value={confirmPassword}
                  onChange={(e) => SetConfirmPassword(e.target.value)}
                  required
                />
                <input
                  type="text"
                  name="password"
                  placeholder="Enter token sent to your mail"
                  className="drop-shadow-md sm:text-lg text-sm bg-white rounded-lg p-3 "
                  value={tokenText}
                  onChange={(e) => SetTokenText(e.target.value)}
                  required
                />
                <div className="grid grid-cols-2">
                  <small
                    className="text-green-500 cursor-pointer font-semibold"
                    onClick={useSuggested}
                    id="suggest"
                  >
                    Generate Password
                  </small>
                  <div>
                    <p>{suggestViewer}</p>
                    {suggestViewer && (
                      <small
                        className="text-blue-500 cursor-pointer font-semibold"
                        onClick={copyText}
                      >
                        Click to copy
                      </small>
                    )}
                  </div>
                </div>
                {/* End Check Password */}
                <button
                  type="submit"
                  className="bg-green-500 sm:text-lg text-sm rounded-lg text-white font-semibold hover:bg-green-600 transition ease-in-out duration-500 p-2 mt-5"
                >
                  Reset Password
                </button>
                <div className="flex sm:flex-row flex-col gap-2 justify-between">
                  <Link to="/website">
                    <small className="underline text-green-500 font-semibold cursor-pointer">
                      Visit Website
                    </small>
                  </Link>
                </div>
                {/* User Added Message */}
                <Toaster />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResetPassword;
