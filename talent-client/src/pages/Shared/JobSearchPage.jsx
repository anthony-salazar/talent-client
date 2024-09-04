import React, {useEffect, useState} from "react";
import SearchBar from "../../components/JobSearchBar";
import JobList from "../../components/JobList";
import '../../App.css';
import Header from "../../components/Header";
import {Typography} from "@mui/material";
import axios from 'axios';

export default function JobSearch() {
    const [jobs, setJobs] = useState([]);
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8080/jobs')
            .then(response => {
                setJobs(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [refresh]);

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="job-search-page">
                <Typography variant="h4" component="h4">Search Jobs</Typography>
                <SearchBar setJobs={setJobs}/>
                <JobList jobs={jobs} refresh={refresh} setRefresh={setRefresh}/>
            </div>
        </div>
    );
}