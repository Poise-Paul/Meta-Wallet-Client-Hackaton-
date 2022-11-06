import { createSlice } from "@reduxjs/toolkit";

const passwordSlice = createSlice({
  name: "password",
  initialState: {
    data: {},
  },
  reducers: {
    updatePassword: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updatePassword } = passwordSlice.actions;
export default passwordSlice.reducer;
