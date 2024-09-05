import React,{useState} from "react";
import '../App.css';

const CandidateListSearch= () => {
    const [searchTerm, setSearch] = useState("");

    const handleSearch = async () => {
        console.log('Hello');
    };

    return(
        <div className="search-bar">
        <label for="app-status">Filter by Application Status:</label>
        <select className='search-dropdown' name="app-status" id="app-status" onChange={(e) => setSearch(e.target.value)}>
        <option value="Under Review">Under Review</option>
        <option value="Open">Open</option>
        <option value="Closed">Closed</option>
        </select>
        
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
        </div>
    );
}

export default CandidateListSearch;