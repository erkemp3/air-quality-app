/* eslint-disable */

import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchForm.scss";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

const SearchForm = ({
  setSearchText,
  searchText,
  onChangeHandler,
  onSuggestHandler,
  placeholder,
  suggestions,
  setSuggestions,
}) => {
  const clearInput = () => {
    setSuggestions([]);
    setSearchText("");
  };
  return (
    <div className="search">
      <div className="searchInputs">
        <div className="searchIcon">
          {searchText.length === 0 ? (
            <SearchIcon />
          ) : (
            <ClearIcon id="clearBtn" value={searchText} onClick={clearInput} />
          )}
        </div>

        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => onChangeHandler(e.target.value)}
          value={searchText}
          className="input-box"
          onBlur={() => {
            setTimeout(() => {
              setSuggestions([]);
            }, 100);
          }}
        />
      </div>

      {suggestions.length !== 0 && (
        <div className="dataResult">
          {suggestions &&
            suggestions.map((suggestion, i) => (
              <div
                key={i}
                className="dataItem"
                onClick={() => onSuggestHandler(suggestion.location)}
              >
                <p>
                  {" "}
                  {suggestion.location}, {suggestion.city}{" "}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  suggestions: PropTypes.arrayOf(
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
  searchText: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  onSuggestHandler: PropTypes.func.isRequired,
  setSuggestions: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
