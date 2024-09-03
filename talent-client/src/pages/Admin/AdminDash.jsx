import React from "react";
import {Box, Container, Typography} from '@mui/material';
import HeaderComponent from '../../components/Header';
import FooterComponent from '../../components/Footer';


export default function AdminDash() {
    return (
        <Box sx = {{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <HeaderComponent />
            <Container sx = {{flex: '1 0 auto'}}>
                <Typography variant = 'h2' align = 'center'>Welcome, Admin</Typography>
                
            </Container>
            <FooterComponent />
        </Box>
    )
}