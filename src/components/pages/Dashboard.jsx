import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import MainDashboard from "./DashboardComponents/MainDashboard";
import SideBar from "./DashboardComponents/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { updateComponent } from "../reducerSlices/componentsReducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { updateBalances } from "../reducerSlices/userReducer";
// import { useQuery } from "react-query/build/cjs/packages/react-query/src";

const Dashboard = () => {
  const {
    username,
    sentAlert,
    firstName,
    _id: id,
  } = useSelector((state) => state.user.details);
  console.log("Here is your preffered userName", username);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(updateComponent("home"));
    window.onbeforeunload = () => {
      navigate("/");
    };
    if (!loggedIn) {
      navigate("/");
    }
    // Fix this alert
    if (loggedIn) {
      if (!sentAlert) {
        alert(
          `Congratulations ${
            firstName ? firstName : ""
          } You're amongst the first 1000 users you will be rewarded within the next 60 days 🤑`
        );
        // Make Api Call to set the Alert message to true
        const sentMessage = async () => {
          const sentMessage = await axios.post(
            "http://localhost:8080/sentAlert",
            {
              id,
            }
          );
          console.log(sentMessage);
        };
        sentMessage();
      }
    }
  }, []);
  // Get Data with React Query
  const changeTouch = () => {
    setTouched((previous) => !previous);
  };
  return (
    <>
      <Toaster />
      <main className="grid grid-cols-6">
        <SideBar userName={username} firstName={firstName} />
        <div className="bg-[#1c212d]/70 sm:hidden backdrop-blur-lg fixed z-5 h-8 w-full"></div>
        <div className="sm:col-span-1 sm:bg-[#141720] bg-blue-500"></div>{" "}
        <MainDashboard />
      </main>
    </>
  );
};

export default Dashboard;
