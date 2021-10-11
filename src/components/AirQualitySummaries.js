import React from "react";
import PropTypes from "prop-types";
import AirQualitySummary from "./AirQualitySummary";

const AirQualitySummaries = ({ onSubmit, summaries }) => {
  const summaryKey = (name, id) => {
    return `${name}_${id}`;
  };

  return (
    <div className="summaries">
      {summaries.map((summary, i) => (
        <AirQualitySummary
          summary={summary}
          key={summaryKey(summary.location, i)}
          id={i}
          onSubmit={onSubmit}
        />
      ))}
    </div>
  );
};

AirQualitySummaries.propTypes = {
  summaries: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      measurements: PropTypes.arrayOf(
        PropTypes.shape({
          lastUpdated: PropTypes.string.isRequired,
          parameter: PropTypes.string.isRequired,
          value: PropTypes.number.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AirQualitySummaries;
