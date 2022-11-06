import { createSlice } from "@reduxjs/toolkit";
export const metricsSlice = createSlice({
  name: "metric",
  initialState: {
    metrics: [],
  },
  reducers: {
    updateMetrics: (state, action) => {
      state.metrics = action.payload;
    },
  },
});

export const { updateMetrics, user } = metricsSlice.actions;

export default metricsSlice.reducer;
