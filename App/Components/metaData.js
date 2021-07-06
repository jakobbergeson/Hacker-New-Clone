import * as React from "react";
import { formatDate } from "../utils/time";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ThemeConsumer } from "../contexts/theme";

export default function MetaData({ by, time, descendants, id }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`meta-data-${theme}`}>
          <span>
            by <Link to={`/user?id=${by}`}>{by}</Link>
          </span>
          <span>at {formatDate(time)}</span>
          {descendants === null ? null : (
            <span>
              with <Link to={`/post?id=${id}`}>{descendants}</Link> comments
            </span>
          )}
        </div>
      )}
    </ThemeConsumer>
  );
}

MetaData.propTypes = {
  by: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  descendants: PropTypes.number,
  id: PropTypes.number,
};
