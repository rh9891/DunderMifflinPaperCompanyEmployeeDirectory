import React from "react";
import "./search.css";

function Search(props) {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="searchBar">
        <span id="directoryTitle">EMPLOYEE DIRECTORY</span>
        <div>
        <form className="form-inline float-right my-2 my-lg-0" id="searchItems">
        <input
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        id="employees"
        className="form-control mr-sm-2" 
        type="search" 
        placeholder="Employee Name" 
        aria-label="Search"/>
        <button 
        onClick={props.handleSearch} 
        className="btn btn-outline-light my-2 my-sm-0" 
        id="searchButton" 
        type="submit">SEARCH</button>
        </form>
        </div>
        </nav>
    )
}

export default Search;