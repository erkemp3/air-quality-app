/* eslint-disable */

import React from "react";
import PropTypes from "prop-types";
import "../styles/AirQualitySummary.scss";
import ClearIcon from "@material-ui/icons/Clear";
import moment from "moment";

const AirQualitySummary = ({ onSubmit, summary, id }) => {
  return (
    <div className="summary" key={summary.location}>
      <div className="button-div">
        <button
          type="submit"
          onClick={() => {
            onSubmit(id);
          }}
          className="delete-button"
        >
          <ClearIcon />
        </button>
      </div>
      <p className="date">
        {`UPDATED
            ${moment(summary.measurements[0].lastUpdated)
              .fromNow()
              .toUpperCase()}`}
      </p>
      <p className="location">{summary.location}</p>
      <p className="city">in {summary.city}, United Kingdom</p>
      <p className="values">
        {`Values:${summary.measurements.map(
          (e) => ` ${e.parameter.toUpperCase()}: ${e.value}`
        )}`}
      </p>
    </div>
  );
};

AirQualitySummary.propTypes = {
  summary: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AirQualitySummary;
