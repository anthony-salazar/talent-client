import React from "react";
import {Container, Typography, Link, Box} from '@mui/material';
import RouteConstants from "../../routeConstants";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DataTable from "../../components/DataTable";
import JobList from "../../components/JobList";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ManageJobsPage(props) {
    const [jobs, setJobs] = useState([])
    const [refresh, setRefresh] = useState(false)
    const refreshJobList = () => {
        setRefresh(!refresh);
    }
    useEffect(() => {
        const fetchJobs = async () => {
            const response = await axios.get("http://localhost:8080/jobs").then(res => {
                return res.data
            });
            if (!response) {
                setJobs([])
            } else {
                setJobs(response);
            }
        };
        fetchJobs();
    }, [refresh]);

    return (
        <Box sx = {{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <Header user={props.user} specificUser={props.specificUser} logOut={props.logOut}/>
            <Container  sx = {{flex: '1 0 auto'}}>

            <Typography variant = 'h3' align = 'center'>Manage Jobs Page </Typography>
            {/* <DataTable data = {jobs}/> */}
            <JobList jobs={jobs} user={props.user} specificUser={props.specificUser} refresh={refresh} refreshJobList={refreshJobList}/>
        </Container>
        <Footer/>
        </Box>

    )

}