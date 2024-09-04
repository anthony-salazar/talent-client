import React from "react";
import {Container, Typography, Box} from '@mui/material';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DataTable from "../../components/DataTable";
import applications from "../../data/application.json";
import {STATUS_TYPES} from "../../Status";

export default function ManageAppsPage() {
    const fields = [
        { name: 'user_id', label: 'User ID', type: 'text', readonly: true },
        { name: 'job_id', label: 'Job ID', type: 'text', readonly: true },
        { name: 'date_applied', label: 'Date Applied', type: 'text', readonly: true },
        { name: 'cover_letter', label: 'Cover Letter', type: 'text' },
        { name: 'custom_resume', label: 'Custom Resume', type: 'text' },
        { name: 'application_status', label: 'Application Status', type: 'select', options: STATUS_TYPES},
      ];
    return (
        <Box sx = {{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <Header />
            <Container  sx = {{flex: '1 0 auto'}}>

            <Typography variant = 'h3' align = 'center'>Manage Applications Page </Typography>
            {/* <DataTable data = {applications} modalTitle="Application Details" buttonLabel="Create Application"/> */}
            <DataTable
            data={applications}
            modalTitle="Application Details"
            fields={fields}/>
        </Container>
        <Footer/>
        </Box>

    )

}