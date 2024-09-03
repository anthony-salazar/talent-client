import React, {useState} from "react";
import SearchBar from "../../components/JobSearchBar";
import JobList from "../../components/JobList";
import list from '../../joblist.json';
import '../../App.css';
import Header from "../../components/Header";
import {Typography} from "@mui/material";

export default function JobSearch() {
    return(
        <div>
            <div>
                <Header />
            </div>
            <div className="job-search-page">
                <Typography variant="h4" component="h4">Search Jobs</Typography>
                <SearchBar />
                <JobList jobs={list}/>
            </div>
        </div>
    );
}