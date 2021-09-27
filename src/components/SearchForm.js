/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/SearchForm.scss";

const SearchForm = ({ results, onSubmit }) => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      const cities = results.filter((result) => result.city != null);
      matches = cities.filter((result) => {
        const regex = new RegExp(`${text}`, "gi");
        return result.city.match(regex);
      });
    }
    console.log("matches", matches);
    setSuggestions(matches);
    setSearchText(text);
  };

  const onSuggestHandler = (text) => {
    setSearchText(text);
    setSuggestions([]);
  };
  return (
    <div className="container">
      <input
        type="text"
        onChange={(e) => onChangeHandler(e.target.value)}
        value={searchText}
        className="input-box"
        onBlur={() => {
          setTimeout(() => {
            setSuggestions([]);
          }, 100);
        }}
      />
      {suggestions &&
        suggestions.map((suggestion, i) => (
          <div
            key={i}
            className="suggestion"
            onClick={() => onSuggestHandler(suggestion.location)}
          >
            {suggestion.location}, {suggestion.city}
          </div>
        ))}
      <button type="submit" onClick={onSubmit} className="search-form__button">
        Search
      </button>
    </div>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      measurements: PropTypes.arrayOf(
        PropTypes.shape({
          lastUpdated: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired
  ).isRequired,

  // searchText: PropTypes.string.isRequired,
  // setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
