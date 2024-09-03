import React, {useState} from "react";
import SearchBar from "../components/JobSearchBar";
import JobList from "../components/JobList";
import list from '../joblist.json';
import '../App.css';
import Header from "../components/Header";

export default function JobSearch() {
    return(
        <div>
            <div>
                <Header />
            </div>
            <div className="job-search-page">
                <h2>Search Jobs</h2>
                <SearchBar />
                <JobList jobs={list}/>
            </div>
        </div>
    );
}