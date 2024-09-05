import React, {useEffect, useState} from "react";
import SearchBar from "../../components/JobSearchBar";
import JobList from "../../components/JobList";
import '../../App.css';
import Header from "../../components/Header";
import {Typography} from "@mui/material";
import axios from 'axios';

export default function JobSearch(props) {
    const [jobs, setJobs] = useState([]);
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        const fetchJobs = async () => {
            const response = await axios.get("http://localhost:8080/jobs").then(res => {
                return res.data
            });
            setJobs(response);
        };
        fetchJobs();
    }, [refresh]);

    const refreshJobList = () => {
        setRefresh(!refresh);
    };
    console.log(props)
    return (
        <div>
            <div>
                <Header user={props.user} specificUser={props.specificUser}/>
            </div>
            <div className="job-search-page">
                <Typography variant="h4" component="h4">Search Jobs</Typography>
                <SearchBar setJobs={setJobs}/>
                <JobList user={props.user} jobs={jobs} refreshJobList={refreshJobList}/>
            </div>
        </div>
    );
}