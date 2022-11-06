import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./store/Store";
import { HashRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Dashboard from "./components/pages/Dashboard";
import TimeAgo from "javascript-time-ago";
import "tw-elements";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
import ForgetPassword from "./components/pages/ForgetPassword";
import ResetPassword from "./components/pages/ResetPassword";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <HashRouter>
        <Routes>
          <Route path="/website" element={<App />} />
          <Route path="/" index exact element={<SignIn />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/inbox" element={<Dashboard />} />
          <Route path="/dashboard/main" element={<Dashboard />} />
          <Route path="/dashboard/wallets" element={<Dashboard />} />
          <Route path="/dashboard/swap" element={<Dashboard />} />
          <Route path="/dashboard/markets" element={<Dashboard />} />
          <Route path="/dashboard/buy-sell" element={<Dashboard />} />
          <Route path="/dashboard/news" element={<Dashboard />} />
          <Route path="/dashboard/settings" element={<Dashboard />} />
          <Route path="/dashboard/support" element={<Dashboard />} />
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
