import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RealTop from "./RealDashComps/RealTop";
import ReactTimeAgo from "react-time-ago";
const News = () => {
  const [news, setNews] = useState([]);
  const topSide = news.slice(0, 1);
  const firstSide = news.slice(1, 10);
  const secondTop = news.slice(12);
  const secondSide = news.slice(12, 20);
  const dispatch = useDispatch();
  const allNews = useSelector((state) => state.news.news);
  useEffect(() => {
    dispatch({ type: "FETCH_NEWS" });
    console.log("My-news", allNews);
    setNews(allNews);
  }, [allNews, dispatch]);
  return (
    <div className={news ? "" : "h-screen"}>
      <RealTop name="news" />
      <ul className="text-2xl capitalize flex w-full my-5 text-white font-semibold"></ul>
      <div className="flex sm:flex-row flex-col gap-10">
        {/* Latest */}
        <div className="sm:w-[70%] flex flex-col gap-5">
          <p className="sm:w-[70%] capitalize sm:text-2xl text-xl font-semibold">
            latest news
          </p>
          {/* Top Post */}
          {topSide?.map((elem) => {
            return (
              <div>
                <img
                  src={news[0]?.urlToImage}
                  loading="lazy"
                  alt="top_image"
                  className="rounded-2xl h-[25rem] w-full object-cover"
                />
                <div>
                  <h1 className="sm:text-3xl font-bold capitalize">
                    {news[0]?.description}
                  </h1>
                  <small className="text-gray-500 font-semibold">
                    {news[0]?.source.name} <span className="pr-1 pl-1">|</span>{" "}
                    <ReactTimeAgo
                      date={new Date(news[0].publishedAt)}
                      locale="en-us"
                    />
                  </small>
                </div>
              </div>
            );
          })}
          {/* Others */}
          <div className="grid sm:grid-cols-1 grid-cols-2  sm:gap-8 gap-5">
            {firstSide?.map((article) => {
              return (
                <div className="flex sm:flex-row flex-col w-full gap-4 ">
                  <div className="sm:w-[30%]">
                    <img
                      src={article.urlToImage}
                      alt="news_img"
                      loading="lazy"
                      className="rounded-2xl w-full h-32 object-cover"
                    />
                  </div>

                  <div className="flex sm:w-[70%] flex-col">
                    <h1 className="sm:text-xl text-sm font-bold capitalize">
                      {article.title}
                    </h1>
                    <small className="text-gray-500 font-semibold">
                      {article.source.name} <span className="pr-1 pl-1">|</span>{" "}
                      <ReactTimeAgo date={article.publishedAt} locale="en-us" />{" "}
                    </small>
                    <h3 className="opacity-70 sm:text-sm text-xs">
                      {article.description.substring(0, 120) + "..."}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Featured */}
        <div className="sm:w-[30%] flex flex-col gap-5">
          <p className="sm:w-[30%] sm:text-2xl text-xl font-semibold capitalize">
            featured
          </p>
          {/* First */}
          <div className="flex flex-col gap-2">
            <img
              src={news[20]?.urlToImage}
              loading="lazy"
              alt="top_image"
              className="rounded-2xl h-48  object-cover"
            />
            <div className="flex flex-col">
              <h1 className="sm:text-xl text-sm font-bold capitalize">
                {news[20]?.title}
              </h1>
              <small className="text-gray-500 font-semibold">
                {news[20]?.source?.name} <span className="pr-1 pl-1">|</span>{" "}
                {news[20]?.source?.name ? (
                  <ReactTimeAgo date={news[20]?.publishedAt} locale="en-us" />
                ) : (
                  ``
                )}{" "}
              </small>
            </div>
          </div>
          {/* Second */}
          <div className="grid sm:grid-cols-1 grid-cols-2 gap-5">
            {secondSide?.map((article) => {
              return (
                <div className="flex flex-col gap-2">
                  <img
                    src={article.urlToImage}
                    loading="lazy"
                    alt="top_image"
                    className="rounded-2xl h-48  object-cover"
                  />
                  <div className="flex flex-col">
                    <h1 className="sm:text-xl text-sm font-bold capitalize">
                      {article.title}
                    </h1>
                    <small className="text-gray-500 font-semibold">
                      {article.source.name} <span className="pr-1 pl-1">|</span>{" "}
                      <ReactTimeAgo date={article.publishedAt} locale="en-us" />{" "}
                    </small>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
