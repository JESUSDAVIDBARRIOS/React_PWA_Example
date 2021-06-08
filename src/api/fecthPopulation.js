import axios from "axios";

import { headersInfo } from './private.js'

const URL = "https://world-population.p.rapidapi.com/population";

export const fetchPopulation = async (query) => {
  try {
    const { data } = await axios.get(URL, {
      params: {
        country_name: query,
      },
      headers: {
        "x-rapidapi-key": headersInfo["api_key"],
        "x-rapidapi-host": headersInfo["api_host"],
      },
    });
    return data.body;
  } catch (err) {return {"country_name":"NoMatchWithQuery"};}
};
