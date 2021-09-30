/* eslint-disable */

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/App.scss";
import SearchForm from "./SearchForm";
import AirQualitySummary from "./AirQualitySummary";

const App = () => {
  const [results, setResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [summaries, setSummaries] = useState([]);

  useEffect(() => {
    axios
      .request({
        method: "GET",
        url: "https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/latest?limit=747&page=1&offset=0&sort=desc&radius=1000&country_id=GB&order_by=lastUpdated&dumpRaw=false",
      })
      .then((response) => {
        setResults(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      const cities = results.filter((result) => result.city != null);
      matches = cities.filter((result) => {
        const regex = new RegExp(`${text}`, "gi");
        return result.city.match(regex);
      });
    }
    setSuggestions(matches);
    setSearchText(text);
  };

  const onSuggestHandler = async (text) => {
    setSearchText(text);
    setSuggestions([]);
    const data = results.filter((result) => result.location === text);
    setSummaries([...summaries, ...data]);
  };

  const deleteSummary = (e) => {
    setSummaries(summaries.filter((summary) => summary.location !== e));
  };

  return (
    <div className="App">
      <h1 className="app-title">Compare your Air</h1>
      <p className="app-subtitle1">
        Compare the air quality between cities in the UK.
      </p>
      <p className="app-subtitle2">
        Select cities to compare using the search tool below.
      </p>
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        results={results}
        suggestions={suggestions}
        setSuggestions={setSuggestions}
        onChangeHandler={onChangeHandler}
        onSuggestHandler={onSuggestHandler}
        placeholder="Enter city name..."
      />
      <AirQualitySummary onSubmit={deleteSummary} summaries={summaries} />
    </div>
  );
};

export default App;
