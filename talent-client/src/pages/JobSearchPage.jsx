import React, {useState} from "react";
import SearchBar from "../components/JobSearchBar";
import JobList from "../components/JobList";
import list from '../joblist.json';
import '../App.css';

export default function JobSearch() {
    return(
        <div className="job-search-page">
            <h2>Job Search Page</h2>
            <SearchBar />
            <JobList jobs={list}/>
        </div>
    );
}