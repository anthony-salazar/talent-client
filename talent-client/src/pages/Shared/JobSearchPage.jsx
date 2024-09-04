import React, {useEffect, useState} from "react";
import SearchBar from "../../components/JobSearchBar";
import JobList from "../../components/JobList";
import '../../App.css';
import Header from "../../components/Header";
import {Typography} from "@mui/material";
import axios from 'axios';

export default function JobSearch(props) {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/jobs')
            .then(response => {
                setJobs(response.data);
                console.log(jobs);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <div>
            <div>
                <Header user={props.user}/>
            </div>
            <div className="job-search-page">
                <Typography variant="h4" component="h4">Search Jobs</Typography>
                <SearchBar setJobs={setJobs}/>
                <JobList jobs={jobs}/>
            </div>
        </div>
    );
}