import React, {useEffect, useState} from "react";
import SearchBar from "../../components/JobSearchBar";
import JobList from "../../components/JobList";
import list from '../../joblist.json';
import '../../App.css';
import Header from "../../components/Header";
import axios from 'axios';

export default function JobSearch() {
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
                <Header />
            </div>
            <div className="job-search-page">
                <h2>Search Jobs</h2>
                <SearchBar setJobs={setJobs}/>
                <JobList jobs={jobs}/>
            </div>
        </div>
    );
}