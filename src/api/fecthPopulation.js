import axios from "axios";

const URL = "https://world-population.p.rapidapi.com/population";

export const fetchPopulation = async (query) => {
  try {
    const { data } = await axios.get(URL, {
      params: {
        country_name: query,
      },
      headers: {
        "x-rapidapi-key": "be76d56f08mshdaa678b2656e641p1789c4jsn6e229fa4838e",
        "x-rapidapi-host": "world-population.p.rapidapi.com",
      },
    });
    return data.body;
  } catch (err) {return {"country_name":"NoMatchWithQuery"};}
};
