import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    details: {},
    balances: {},
    mainBalance: {},
    transactions: {},
  },
  reducers: {
    updateLogIn: (state, action) => {
      if (state.loggedIn) {
        state.loggedIn = false;
      }
      state.loggedIn = true;
    },

    updateDetails: (state, action) => {
      state.details = action.payload;
    },

    updateBalances: (state, action) => {
      state.balances = action.payload;
    },

    updateMainBalance: (state, action) => {
      state.mainBalance = action.payload;
    },

    updateTransactions: (state, action) => { 
      state.transactions = action.payload;
    }

  },
});

export const { updateLogIn, updateDetails, updateBalances, updateMainBalance, updateTransactions } =
  userReducer.actions;

export default userReducer.reducer;
