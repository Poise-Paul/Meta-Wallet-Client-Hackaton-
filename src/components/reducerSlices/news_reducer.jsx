import { createSlice } from "@reduxjs/toolkit";

const newsReducer = createSlice({
  name: "news",
  initialState: {
    news: [],
  },
  reducers: {
    fetchAllNews: (state, action) => {
      state.news = action.payload
    },
  },
});

export const { fetchAllNews } = newsReducer.actions;
export default newsReducer.reducer;
