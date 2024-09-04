import React, {useEffect, useState} from "react";
import SearchBar from "../../components/JobSearchBar";
import ManagerJobList from "../../components/ManagerJobList";
import '../../App.css';
import Header from "../../components/Header";
import {Typography} from "@mui/material";
import axios from 'axios';

export default function ManageJobsPage(props) {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/jobs')
            .then(response => {
                setJobs(response.data);
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
                <Typography variant="h4" component="h4">Job Postings</Typography>
                <SearchBar setJobs={setJobs}/>
                <ManagerJobList jobs={jobs}/>
            </div>
        </div>
    );
}