import React from "react";
import {Container, Typography, Box} from '@mui/material';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DataTable from "../../components/DataTable";
import applications from "../../data/application.json";

export default function ManageAppsPage() {
    return (
        <Box sx = {{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <Header />
            <Container  sx = {{flex: '1 0 auto'}}>

            <Typography variant = 'h3' align = 'center'>Manage Applications Page </Typography>
            <DataTable data = {applications} modalTitle="Application Details"/>
        </Container>
        <Footer/>
        </Box>

    )

}