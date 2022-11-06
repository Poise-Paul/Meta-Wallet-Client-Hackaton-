import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateComponent } from "../../reducerSlices/componentsReducer";
import { NavLink } from "react-router-dom";
import Loader from "../../Loader";

const News = () => {
  const [miniNews, setMiniNews] = useState([]);
  const { news } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_NEWS" });
    setMiniNews(news.slice(0, 4));
  }, []);

  return (
    <div className="flex flex-col sm:my-10 my-5">
      <div className="flex justify-between">
        <h1 className="sm:text-4xl text-2xl font-bold">Latest News</h1>{" "}
        <NavLink to="/dashboard/news">
          <button
            className="bg-blue-500 text-sm rounded-lg p-2 font-semibold hover:bg-blue-700 transition duration-500 ease-in-out text-white"
            onClick={() => dispatch(updateComponent("news"))}
          >
            View all news
          </button>
        </NavLink>
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-5 mt-5">
        {" "}
        {miniNews.length === 0 && <small>Loading news...</small>}
        {miniNews.map((singleNews) => {
          return (
            <div className="flex flex-col rounded-2xl bg-[#2d3445]">
              <img
                src={singleNews.urlToImage}
                alt="Wallet-Image"
                className="object-cover w-full sm:h-32 rounded-t-2xl"
              />
              <div className="sm:p-5 p-3">
                <h1 className="sm:text-sm text-xs font-semibold capitalize">
                  {`${singleNews.title.substring(0, 120)} ...`}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
