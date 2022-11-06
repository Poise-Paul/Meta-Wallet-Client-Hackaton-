import { useSelector } from "react-redux";
import { call, put, takeEvery } from "redux-saga/effects";
import { metrics_api, news_api, transactions } from "../../../Apis/Apis";
import { updateMetrics } from "../allReducers";
import { fetchAllNews } from "../news_reducer";

function* fetchMetrics() {
  try {
    const { data } = yield call(metrics_api);
    yield put({ type: updateMetrics, payload: data });
  } catch (error) {
    console.log("something went wrong", error.message);
  }
}

function* fetchNews() {
  try {
    const { data: news } = yield call(news_api);
    yield put({ type: fetchAllNews, payload: news.articles });
    console.log(news);
  } catch (error) {
    console.log("something went wrong", error.message);
  }
}


function* mySaga() {
  yield takeEvery("FETCH_METRICS", fetchMetrics);
  yield takeEvery("FETCH_NEWS", fetchNews);
}

export default mySaga;
