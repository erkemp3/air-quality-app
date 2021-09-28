import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    searchText: "",
    placeholder: "",
    suggestions: [],
    onSuggestHandler: () => {},
    onChangeHandler: () => {},
    setSuggestions: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <Search
        placeholder={validProps.placeholder}
        searchText={validProps.searchText}
        suggestions={validProps.suggestions}
        onSuggestHandler={validProps.onSuggestHandler}
        onChangeHandler={validProps.onChangeHandler}
        setSuggestions={validProps.setSuggestions}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
