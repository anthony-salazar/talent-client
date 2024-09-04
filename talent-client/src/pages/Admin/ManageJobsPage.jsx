import React from "react";
import {Container, Typography, Link, Box} from '@mui/material';
import RouteConstants from "../../routeConstants";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DataTable from "../../components/DataTable";
import JobList from "../../components/JobList";
import jobs from "../../data/jobs.json";

export default function ManageJobsPage(props) {
    return (
        <Box sx = {{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <Header user={props.user}/>
            <Container  sx = {{flex: '1 0 auto'}}>

            <Typography variant = 'h3' align = 'center'>Manage Jobs Page </Typography>
            {/* <DataTable data = {jobs}/> */}
            <JobList jobs={jobs}/>
        </Container>
        <Footer/>
        </Box>

    )

}