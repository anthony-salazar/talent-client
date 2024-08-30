import React from "react";
import '../jobSearchStyling.css';

const SearchBar= () => {
    return(
        <div className="search-bar">
            <input type="text" placeholder="Job Title or Keyword" className="search-input"></input>
            <input type="text" placeholder="Country or City" className="search-input"></input>
            <button className="search-button">Search</button>
        </div>
    );
}

export default SearchBar;