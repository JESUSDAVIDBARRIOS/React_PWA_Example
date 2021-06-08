import React, { useState } from "react";

import { fetchPopulation } from "./api/fecthPopulation";
import "./App.css";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const App = () => {
  const [query, setQuery] = useState("");
  const [population, setPopulation] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchPopulation(query.charAt(0).toUpperCase() + query.slice(1));
      setPopulation(data);
      console.log(data)
      setQuery("");
    }
  };

  return (
    <div className="main-container">
      <h1>Get a Country's Population</h1>
      <input
        type="text"
        className="search"
        placeholder="Search a country..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {( population !== undefined && population.country_name && population.country_name !== 'NoMatchWithQuery') 
      ? (
        <div className="country">
          <h2 className="country-name">
            {population.country_name}
          </h2>
          <div className="country-pop">
            {numberWithCommas(population.population)}
          </div>
          <h3>Ranking: {population.ranking}</h3>
        </div>
      )
    :(<br />)
    }
    {
      ( population !== undefined && population.country_name && population.country_name === 'NoMatchWithQuery') && 
      (<div className="country">
      <h2 className="country-name">
        No matches for your query, search again!
      </h2>
    </div>)
    }
    </div>
  );
};

export default App;
