import React from "react";
import '../App.css';

const CandidateListSearch= () => {
    return(
        <div className="search-bar">
            <input
          type="text"
          placeholder="Job Title or Keyword"
          className="search-input"
        />
        <button className="search-button" >
          Search
        </button>
        </div>
    );
}

export default CandidateListSearch;