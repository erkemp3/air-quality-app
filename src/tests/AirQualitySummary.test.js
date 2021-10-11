import React from "react";
import { render } from "@testing-library/react";
import AirQualitySummary from "../components/AirQualitySummary";

describe("AirQualitySummary", () => {
  const validProps = {
    summary: {
      city: "Leeds",
      location: "Leeds Centre",

      measurements: [
        {
          lastUpdated: "2021-02-01",
          parameter: "pm10",
          value: 9,
        },
        {
          lastUpdated: "2021-03-01",
          parameter: "s02",
          value: 10,
        },
      ],
    },
    onSubmit: () => {},
    id: 2,
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <AirQualitySummary
        summary={validProps.summary}
        id={validProps.id}
        onSubmit={validProps.onSubmit}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(
      <AirQualitySummary
        summary={validProps.summary}
        id={validProps.id}
        onSubmit={validProps.onSubmit}
      />
    );

    expect(getByText("Leeds Centre")).toHaveClass("location");
    expect(getByText("in Leeds, United Kingdom")).toHaveClass("city");
  });
});
