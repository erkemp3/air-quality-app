import React from "react";
import PropTypes from "prop-types";

const AirQualitySummary = ({ summary }) => {
  // if (summary !== undefined) {
  //   return (
  //     <div>
  //       <h1 className="location-details">{`${summary.measurements[0].lastUpdated}, ${summary.location}, ${summary.city}, ${summary.country}`}</h1>
  //     </div>
  //   );
  // }
  // return

  console.log(summary);
  return (
    <div>
      {summary.length !== 0 && (
        <div className="summary">{summary.location}</div>
      )}
    </div>
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
};

export default AirQualitySummary;
