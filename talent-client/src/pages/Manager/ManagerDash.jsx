import React from "react";
import {Link} from "react-router-dom";
import DataTable from "../../components/DataTable";
import jobs from "../../data/jobs.json";
import HeaderComponent from '../../components/Header';

import {Box, Container, Typography, Button} from '@mui/material';

export default function ManagerDash() {
    return (
        <Box sx = {{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <HeaderComponent />
            <Container sx = {{flex: '1 0 auto', padding:'10px'}}>
                <Typography variant = 'h4' align = 'center'>Welcome, Hiring Manager</Typography>
                <DataTable data = {jobs}/>
                <Button component={Link} to="/manage_jobs">Manage Jobs</Button>
                
            </Container>
            
        </Box>
    )
}