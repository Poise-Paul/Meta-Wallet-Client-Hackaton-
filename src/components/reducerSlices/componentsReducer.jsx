import { createSlice } from "@reduxjs/toolkit";

const componentReducers = createSlice({
  name: "components",
  initialState: {
    home: false,
    inbox: false,
    realDashboard: false,
    wallets: false,
    buySell: false,
    swap: false,
    markets: false,
    news: false,
    settings: false,
    support: false,
  },

  reducers: {
    updateComponent: (state, action) => {
      Object.keys(state).forEach((x) => {
        state[x] = false;
      });

      switch (action.payload) {
        case "home":
          state.home = true;
          break;
        case "inbox":
          state.inbox = true;
          break;
        case "realDashboard":
          state.realDashboard = true;
          break;
        case "wallets":
          state.wallets = true;
          break;
        case "buySell":
          state.buySell = true;
          break;
        case "swap":
          state.swap = true;
          break;
        case "markets":
          state.markets = true;
          break;
        case "news":
          state.news = true;
          break;
        case "settings":
          state.settings = true;
          break;
        case "support":
          state.support = true;
          break;
        default:
          return state;
          break;
      }
    },
  },
});

export const { updateComponent } = componentReducers.actions;
export default componentReducers.reducer;
