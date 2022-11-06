import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from "redux-saga";
import newsReducer from "../components/reducerSlices/news_reducer";
import metricReducer from "../components/reducerSlices/allReducers";
import componentsReducer from "../components/reducerSlices/componentsReducer";
import mySaga from "../components/reducerSlices/Saga/Saga";
import userReducer from "../components/reducerSlices/userReducer";
import passwordReducer from "../components/reducerSlices/passwordReducer";

const sagaMiddleware = createSagaMiddleWare();
export default configureStore({
  reducer: {
    metric: metricReducer,
    component: componentsReducer,
    news: newsReducer,
    user: userReducer,
    password: passwordReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ["updateMetrics"],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);
