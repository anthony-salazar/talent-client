import React, {useState} from "react";
// import SearchBar from "../../components/JobSearchBar";
import JobList from "../../components/JobList";
import list from '../../joblist.json';
import '../../App.css';
import Header from "../../components/Header";

export default function JobSearch() {

    const jobs = list;
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = (event) => {
      setSearchInput(event.target.value);
    };

    const filteredjobs = jobs.filter((job) => {
      return job.listing_title
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });


    return (
      <div>
        <div>
<<<<<<< HEAD
          <Header />
=======
            <div>
                <Header />
            </div>
            <div className="job-search-page">
                <h2>Search Jobs</h2>
                <SearchBar />
                <JobList jobs={list}/>
            </div>
>>>>>>> main
        </div>
        <div className="job-search-page">
          <h2>Job Search Page</h2>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Job Title or Keyword"
              className="search-input"
              onChange={handleSearch}
            ></input>
          </div>
          <JobList jobs={filteredjobs} />
        </div>
      </div>
    );
}