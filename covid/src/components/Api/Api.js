import axios from "axios";

const getAllCountries = "https://api.covid19api.com/summary";

export const fetchCountries = async () => {
  try {
    const response = await axios.get(getAllCountries);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

let getACountry = "https://api.covid19api.com/dayone/country";

export const fetchCountry = async (country, status) => {
  try {
    const response = await axios.get(
      `${getACountry}/${country}/status/${status}/live`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

let globalCases = "https://corona.lmao.ninja/v2/all";

export const fetchGlobalCases = async () => {
  try {
    const response = await axios.get(globalCases);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNews = async (code) => {
  try {
    const response = await axios.get(
      "https://api.smartable.ai/coronavirus/news/" +
        code +
        "?Subscription-Key=3009d4ccc29e4808af1ccc25c69b4d5d"
    );
    return response.data.news;
  } catch (err) {
    console.log(err);
  }
};
