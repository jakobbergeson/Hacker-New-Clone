import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ThemeConsumer } from "../contexts/theme";

export default function Title({ title, url, id }) {
  return url ? (
    <ThemeConsumer>
      {({ theme }) => (
        <a className={`link-${theme}`} target="_blank" href={url}>
          {title}
        </a>
      )}
    </ThemeConsumer>
  ) : (
    <ThemeConsumer>
      {({ theme }) => (
        <Link className={`link-${theme}`} target="_blank" to={`/post?id=${id}`}>
          {title}
        </Link>
      )}
    </ThemeConsumer>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  id: PropTypes.number.isRequired,
};
