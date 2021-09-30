/* eslint-disable */

import React from "react";
import PropTypes from "prop-types";
import "../styles/AirQualitySummary.scss";
import ClearIcon from "@material-ui/icons/Clear";

const AirQualitySummary = ({ onSubmit, summaries }) => {
  const dateFormatter = (string) => {
    const one = string.split("").splice(8, 2).join("");
    const two = string.split("").splice(5, 2).join("");
    const three = string.split("").splice(0, 4).join("");
    const secondHalf = string.split("").splice(11, 5).join("");
    return `${one}-${two}-${three} - ${secondHalf}`;
  };

  const measurementsFormatter = (obj) => {
    let string = "";
    for (let i = 0; i < obj.measurements.length - 1; i++) {
      string += `${obj.measurements[i].parameter.toUpperCase()}: ${
        obj.measurements[i].value
      }, `;
    }
    return `${string} ${obj.measurements[
      obj.measurements.length - 1
    ].parameter.toUpperCase()}: ${
      obj.measurements[obj.measurements.length - 1].value
    }`;
  };

  return (
    <div className="summaries">
      {summaries.map((summary) => (
        <div className="summary" key={summary.location}>
          <div className="button-div">
            <button
              type="submit"
              onClick={() => {
                onSubmit(summary.location);
              }}
              className="delete-button"
            >
              <ClearIcon />
            </button>
          </div>
          <p className="date">
            LAST UPDATED: {dateFormatter(summary.measurements[0].lastUpdated)}
          </p>
          <p className="location">{summary.location}</p>
          <p className="city">in {summary.city}, United Kingdom</p>
          <p className="values">Values: {measurementsFormatter(summary)}</p>
        </div>
      ))}
    </div>
  );
};

AirQualitySummary.propTypes = {
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
};

export default AirQualitySummary;
