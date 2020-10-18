import React from "react";
import "./search.css";

function Search({ handleSearch }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="searchBar">
      <span id="directoryTitle">EMPLOYEE DIRECTORY</span>
      <div>
        <form className="form-inline float-right my-2 my-lg-0" id="searchItems">
          <input
            name="search"
            id="employees"
            className="form-control mr-sm-2 search"
            type="text"
            onChange={handleSearch}
            placeholder="Insert Employee Name"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
  );
}

export default Search;
