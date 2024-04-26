import React from "react";
import PropTypes from "prop-types";

function Search({ keyword, keywordChange }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Cari berdasarkan nama"
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}
    />
  );
}

Search.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default Search;
