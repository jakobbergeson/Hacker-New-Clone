import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Title({ title, url }) {
  return (
    <div>
      <Link to={url} target="_blank" className="link">
        <h4>{title}</h4>
      </Link>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};
