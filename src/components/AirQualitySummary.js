import React from "react";
import PropTypes from "prop-types";

const AirQualitySummary = (props) => {
  const { summary, errorMessage } = props;
  console.log(summary);
  return !summary || errorMessage ? (
    <h1 className="error-message">{errorMessage}</h1>
  ) : (
    <h1 className="location-details">{`${summary.measurements[0].lastUpdated}, ${summary.location}, ${summary.city}, ${summary.country}`}</h1>
  );
};

AirQualitySummary.propTypes = {
  summary: PropTypes.arrayOf(
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
  errorMessage: PropTypes.string,
};

AirQualitySummary.defaultProps = {
  errorMessage: "",
};

export default AirQualitySummary;
