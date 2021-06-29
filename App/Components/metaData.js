import * as React from "react";
import { formatDate } from "../utils/time";
import PropTypes from "prop-types";

export default function MetaData({ by, time, descendants, id }) {
  return (
    <div className="meta-data">
      <span>
        by <a href={`/user?id=${by}`}>{by}</a>
      </span>
      <span>at {formatDate(time)}</span>
      <span>
        with <a href={`/post?id=${id}`}>{descendants}</a> comments
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
