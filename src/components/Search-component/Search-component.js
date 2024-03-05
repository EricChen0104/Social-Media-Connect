import React from "react";
import "./Search.css";

const SearchComponent = () => {
  return (
    <div className="mainbg">
      <div className="searchBar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchComponent;
