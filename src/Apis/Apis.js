import axios from "axios";

export const metrics_api = async () => {
  const result = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&page=1&sparkline=false"
  );
  return result;
};

export const news_api = async () => {
  const news = await axios.get(
    "https://newsapi.org/v2/everything?q=(crypto AND bitcoin)&sortBy=publishedAt&apiKey=10ca72b270f74a0dab406f6123a5e496"
  );
  return news;
};

export const transactions = async (id) => {
  const transactions = await axios.post(
    `https://api-eu1.tatum.io/v3/ledger/transaction/account?pageSize=50&count="true"`,
    {
      id,
    }
  );
};
