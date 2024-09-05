import React, { useState } from "react";
import "../App.css";
import axios from "axios";

const SearchBar = ({ setJobs }) => {
  const [searchTerm, setSearch] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get("http://localhost:8080/jobs/search", {
        params: { searchTerm: searchTerm },
      });
      console.log("Search button triggered");
      console.log("Response:", response.data);
      setJobs(response.data);
    } catch (error) {
      alert("No matching found");
    }
  };

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
};

export default SearchBar;