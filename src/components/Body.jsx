import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateMetrics } from "./reducerSlices/allReducers";
import Mail from "./Sections/Mail";
import Partners from "./Sections/Partners";
import SectionFive from "./Sections/SectionFive";
import SectionFour from "./Sections/SectionFour";
import SectionLoan from "./Sections/SectionLoan";
import SectionOne from "./Sections/SectionOne";
import SectionSix from "./Sections/SectionSix";
import SectionThree from "./Sections/SectionThree";
import SectionTwo from "./Sections/SectionTwo";

const Body = () => {
  const [loading, SetLoading] = useState(true);
  const [marketData, SetMarketData] = useState([]);
  const market = useSelector((state) => state.metric.metrics);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(updateMetrics(marketData));
  useEffect(() => {
    const getMetrics = async () => {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
      );
      console.log(data);
      SetMarketData(data);
      SetLoading(false);
    };
    getMetrics();
  }, []);

  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionLoan />
      <SectionThree />
      <SectionFour Loading={loading} market={market} app={"outside"} />
      <SectionFive />
      <SectionSix />
      <Partners />
      <Mail />
    </>
  );
};

export default Body;
