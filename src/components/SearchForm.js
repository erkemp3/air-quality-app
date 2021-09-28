/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchForm.scss";
import SearchIcon from "@material-ui/icons/Search";

const SearchForm = ({
  searchText,
  onChangeHandler,
  onSuggestHandler,
  placeholder,
  suggestions,
  setSuggestions,
}) => {
  return (
    <div className="search">
      <div className="searchInputs">
        <div className="searchIcon">
          <SearchIcon />
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
      {/* <button type="submit" onClick={onSubmit} className="search-form__button">
        Search
      </button> */}
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
  // setSearchText: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  // onSubmit: PropTypes.func.isRequired,
};
