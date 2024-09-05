import React from "react";
import '../App.css';

const CandidateListSearch= () => {
    return(
        <div className="search-bar">
        <label for="app-status">Filter by Application Status:</label>
        <select name="app-status" id="app-status">
        <option value="Under Review">Under Review</option>
        <option value="Open">Saab</option>
        <option value="Closed">Closed</option>
        </select>
        
        <button className="search-button" >
          Search
        </button>
        </div>
    );
}

export default CandidateListSearch;