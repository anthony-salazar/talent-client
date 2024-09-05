import React, { useState, useEffect } from "react";
import ApplicantList from "../../components/ApplicantList";
import CandidateListSearch from '../../components/CandidateListSearch';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import {Box } from "@mui/material";

const JobApplicantPage = (props) => {
    const params = useParams();
    const jobID = params.jobId;
    const [applicationList, setApplicationlist] = useState([]);
    const [job, setjob] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('http://localhost:8080/applications/job/' + jobID).then(res => {return res.data});
                setApplicationlist(response);
            }
            catch(err){
                throw new Error('There error in Job Applicant Search Page');
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('http://localhost:8080/jobs/' + jobID).then(res => {return res.data});
                setjob(response);
            }
            catch(err){
                throw new Error('There error in Job Applicant Search Page');
            }
        };
        fetchData();
    }, []);
    return(
        <Box sx = {{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <Header user={props.user}/>
            <div className="job-search-page">
                    <div className="job-card-list">
                    <div>
                        <p><strong>Job Title:</strong> {job.job_title}</p>
                        <p><strong>Job Description:</strong> {job.job_description}</p>
                    </div>
                    </div>
                    <ApplicantList applicationList={applicationList}/>
            </div>
        </Box>
    );


}

export default JobApplicantPage;