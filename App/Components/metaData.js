import * as React from "react";
import { formatDate } from "../utils/time";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function MetaData({ by, time, descendants, id }) {
  return (
    <div className="meta-data">
      <span>
        by <Link to={`/user?id=${by}`}>{by}</Link>
      </span>
      <span>at {formatDate(time)}</span>
      <span>
        with <Link to={`/post?id=${id}`}>{descendants}</Link> comments
      </span>
    </div>
  );
}

MetaData.propTypes = {
  by: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  descendants: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
