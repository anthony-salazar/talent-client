import React, { useState, useEffect } from "react";
import ApplicantList from "../../components/ApplicantList";
import CandidateListSearch from '../../components/CandidateListSearch';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import {Box, Typography } from "@mui/material";

const JobApplicantPage = (props) => {
    const params = useParams();
    const jobID = params.jobId;
    const [applicationList, setApplicationList] = useState([]);
    const [job, setjob] = useState({});
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/applications/job/' + jobID);
                setApplicationList(response.data);
            } catch (err) {
                if (err.response && err.response.status === 404) {
                    alert('No applications found');
                } else {
                    console.error('Error in Job Applicant Search Page 1:', err);
                    // Handle the error here, such as displaying an error message to the user
                }
            }
        };
        fetchData();
    }, [refresh]);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('http://localhost:8080/jobs/' + jobID).then(res => {return res.data});
                setjob(response);
            }
            catch(err){
                throw new Error('There error in Job Applicant Search Page 2');
            }
        };
        fetchData();
    }, []);
    const refreshList = () => {
        setRefresh(!refresh);
    };
    return(
        <Box sx = {{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <Header user={props.user}/>
            <div className="job-search-page">
                    <Typography variant="h4" component="h4">Applications for {job.job_title} (Job ID: {job.id})</Typography>
                    <ApplicantList refreshList={refreshList} applicationList={applicationList}/>
            </div>
        </Box>
    );


}

export default JobApplicantPage;