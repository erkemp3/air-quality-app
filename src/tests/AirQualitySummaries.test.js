import React from "react";
import { render } from "@testing-library/react";
import AirQualitySummaries from "../components/AirQualitySummaries";

describe("AirQualitySummaries", () => {
  const validProps = {
    summaries: [
      {
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
      {
        city: "Manchester",
        location: "Manchester Centre",

        measurements: [
          {
            lastUpdated: "2021-04-01 19:00",
            parameter: "c02",
            value: 11,
          },
          {
            lastUpdated: "2021-05-01",
            parameter: "pm10",
            value: 15,
          },
        ],
      },
    ],
    onSubmit: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <AirQualitySummaries
        summaries={validProps.summaries}
        city={validProps.city}
        location={validProps.location}
        measurements={validProps.measurements}
        onSubmit={validProps.onSubmit}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(
      <AirQualitySummaries
        summaries={validProps.summaries}
        city={validProps.city}
        location={validProps.location}
        measurements={validProps.measurements}
        onSubmit={validProps.onSubmit}
      />
    );

    expect(getByText("Leeds Centre")).toHaveClass("location");
    expect(getByText("in Manchester, United Kingdom")).toHaveClass("city");
  });
});
