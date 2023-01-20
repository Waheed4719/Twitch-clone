import React from "react";
import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <div className="search-bar">
      <FiSearch color="#545761" style={{ marginRight: 10 }} />
      <input placeholder="Search" />
    </div>
  );
}

export default SearchBar;
