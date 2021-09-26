import React, { useEffect, useState } from "react";
import "../styles/App.css";
import SearchForm from "./SearchForm";
import AirQualitySummary from "./AirQualitySummary";
import getAirQuality from "../requests/getAirQuality";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [summary, setSummary] = useState(undefined);

  const handleCitySearch = () => {
    getAirQuality(searchText, setSummary, setErrorMessage);
  };

  useEffect(() => {
    getAirQuality(searchText, setSummary, setErrorMessage);
  }, []);

  return (
    <div className="App">
      <h1>Air Quality App</h1>
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />
      <AirQualitySummary summary={summary} errorMessage={errorMessage} />
    </div>
  );
};

export default App;
