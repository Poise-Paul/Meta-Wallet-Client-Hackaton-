import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import PasswordStrength from "react-password-strength";
import toast, { Toaster } from "react-hot-toast";
import { Eye1, Eye2 } from "../svgs/Svgs";
import copy from "copy-to-clipboard";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [firstName, SetFirstName] = useState("");
  const [lastName, SetLastName] = useState("");
  const [email, SetEmail] = useState("");
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [passwordVisible, SetPasswordVisible] = useState(false);
  const [decide, SetDecide] = useState(false);
  const [suggestedPassword, SetSuggestedPassword] = useState(null);
  const [suggestViewer, SetSuggetViewer] = useState("");

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
        "http://localhost:8080/getPassword"
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
  const addUser = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      return alert("your password is too short");
    }

    if ((firstName, lastName, email, username, password)) {
      const newResult = axios.post(
        "http://localhost:8080/signUp",
        {
          firstName,
          lastName,
          email,
          username,
          password,
        }
      );
      // Set Loader to show progress of call
      toast.promise(newResult, {
        loading: "Creating Your Account...",
        success: (data) => `${data.data}`,
        error: (err) => `${err.response.data}`,
      });
      // Check Account Creation Status and Redirect Page
      const result = await newResult.then();
      if (result.status === 200) {
        if (result.data === "User Already Exist") {
          window.location.reload();
        } else {
          navigate("/signIn");
        }
      }
    }
  };

  return (
    <div className="bg-[#f1f7fc] sm:h-screen sm:overflow-hidden">
      <div className="sm:block hidden">
        <Navbar check={true} />
      </div>
      <section className="h-full flex  sm:bg-transparent bg-white sm:p-5 justify-center items-center">
        <div className="grid relative sm:grid-cols-2 items-center sm:w-[60%] sm:mb-14 w-full bg-white p-10 rounded-2xl sm:border-gray-300 sm:shadow-gray-200 sm:shadow-lg">
          <div>
            <img
              src="https://www.bitcoin.com/images/uploads/homepage-hero-lg@2x.png"
              alt="man-img"
              className="sm:w-[90%]"
            />
          </div>
          <div>
            <div className="mb-3">
              <h1 className="sm:text-3xl text-xl font-bold capitalize">
                Register
              </h1>
              <small className=" text-gray-400 sm:text-lg text-sm">
                earn interests, deposit and transfer your crypto assets
              </small>
            </div>
            <form onSubmit={addUser}>
              <div className="flex flex-col gap-2">
                {" "}
                <input
                  type="text"
                  name="firstName"
                  autoFocus
                  id="firstName"
                  placeholder="First Name"
                  className="drop-shadow-md sm:text-lg text-sm bg-white rounded-lg w-full p-3"
                  value={firstName}
                  onChange={(e) => SetFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="drop-shadow-md sm:text-lg text-sm bg-white rounded-lg p-3"
                  value={lastName}
                  onChange={(e) => SetLastName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  name="username"
                  autoComplete="username"
                  placeholder="@username"
                  className="drop-shadow-md sm:text-lg text-sm bg-white rounded-lg p-3"
                  value={username}
                  onChange={(e) => SetUsername(e.target.value)}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="drop-shadow-md sm:text-lg text-sm bg-white rounded-lg p-3 "
                  value={email}
                  onChange={(e) => SetEmail(e.target.value)}
                  required
                />
                {/* Check Password */}
                {/* Password Visible Icon */}
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
                <div className="grid grid-cols-2">
                  <small
                    className="text-blue-500 cursor-pointer font-semibold"
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
                  className="bg-blue-500 sm:text-lg text-sm rounded-lg text-white font-semibold hover:bg-blue-700 transition ease-in-out duration-500 p-2 mt-5"
                >
                  Sign Up
                </button>
                <div className="flex sm:flex-row flex-col gap-2 justify-between">
                  <Link to="/website">
                    <small className="underline text-blue-500 font-semibold cursor-pointer">
                      Visit Website
                    </small>
                  </Link>

                  <Link to="/">
                    <small>
                      Already Have An Account?{" "}
                      <span className="text-blue-700 underline cursor-pointer">
                        Sign In
                      </span>{" "}
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

export default SignUp;
