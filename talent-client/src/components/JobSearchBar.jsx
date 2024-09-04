import React, { useState } from "react"; // Import useState from React

import '../App.css';
import axios from 'axios';

const SearchBar= ( {setJobs} ) => {
    const [searchTerm, setSearch] = useState('');

    const handleSearch = () => {
        axios
          .get("http://localhost:8080/jobs/search", {
            params: { searchTerm: searchTerm },
          })
          .then((response) => {
            setJobs(response.data);
          })
          .catch((error) => {
            console.error("There was an error!", error);
          });
    }


    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Job Title or Keyword"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    );
}

export default SearchBar;