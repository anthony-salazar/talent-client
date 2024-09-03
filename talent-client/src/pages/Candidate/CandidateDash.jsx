import React from "react";
import DataTable from "../../components/DataTable";
import applications from "../../data/application.json";
import HeaderComponent from '../../components/Header';
import {Box, Container, Typography, Button} from '@mui/material';
import { Link } from "react-router-dom";


export default function CandidateDash() {
    return (
        <Box sx = {{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <HeaderComponent />
            <Container sx = {{flex: '1 0 auto', padding:'10px'}}>
                <Typography variant = 'h4' align = 'center'>Welcome, Candidate</Typography>
                <DataTable data = {applications}/>
                <Button component={Link} to="/manage_apps">Manage Applications</Button>
                
            </Container>
        </Box>
    )
}