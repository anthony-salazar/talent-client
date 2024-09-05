import React, { useEffect, useState } from "react";
import {Container, Typography, Box} from '@mui/material';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DataTable from "../../components/DataTable";
//import applications from "../../data/application.json";
import {STATUS_TYPES} from "../../Status";
import axios from 'axios';

export default function ManageAppsPage(props) {

    const [applications, setApplications] = useState([]);
    useEffect(()=>{
        const fetchApplications = async()=>{
            const response = await axios.get("http://localhost:8080/applications").then(res => {return res.data});
            //console.log("resp:" + JSON.stringify(response));
          
            if (JSON.stringify(response) !== JSON.stringify(applications)) { // Simple comparison
                setApplications(response);
            }
        };
        fetchApplications();
    }, [applications]);
    const fields = [
        { name: 'user', label: 'User ID', type: 'text', readonly: true },
        { name: 'job', label: 'Job ID', type: 'text', readonly: true },
        { name: 'date_applied', label: 'Date Applied', type: 'text', readonly: true },
        { name: 'cover_letter', label: 'Cover Letter', type: 'text', rows: 4 }, // Added rows property
        { name: 'custom_resume', label: 'Custom Resume', type: 'text', rows: 4 }, // Added rows property
        { name: 'application_status', label: 'Application Status', type: 'select', options: STATUS_TYPES },
    ];
    

    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        {
            field: 'user',
            headerName: 'User ID',
            width: 150,
            valueGetter: (params) => {
                return params.id || '';
            },
        },
        {
            field: 'job',
            headerName: 'Job ID',
            width: 150,
            valueGetter: (params) => {
                return params.id || '';
            },
        },
        { field: 'date_applied', headerName: 'Date Applied', width: 150 },
        { field: 'cover_letter', headerName: 'Cover Letter', width: 150 },
        { field: 'custom_resume', headerName: 'Custom Resume', width: 150 },
        { field: 'application_status', headerName: 'Application Status', width: 150 },
    ];

    const onDataChange = () => {
        setApplications([]);
    }
    
    return (
        <Box sx = {{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <Header user={props.user} />
            <Container  sx = {{flex: '1 0 auto'}}>

            <Typography variant = 'h3' align = 'center'>Manage Applications Page </Typography>
            <DataTable
            data={applications}
            cols = {columns}
            modalTitle="Application Details"
            fields={fields}
            onDataChange={onDataChange}
            />
        </Container>
        <Footer/>
        </Box>

    )

}