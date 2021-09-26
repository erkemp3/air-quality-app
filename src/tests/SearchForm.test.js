import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    searchText: "",
    onSubmit: () => {},
    setSearchText: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <Search
        setSearchText={validProps.setSearchText}
        searchText={validProps.searchText}
        onSubmit={validProps.onSubmit}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
