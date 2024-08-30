import React from 'react';
import { Container, Box , Typography } from '@mui/material';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';

export default function HomePage() {
    return (
        <Box sx = {{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <HeaderComponent />
            <Container sx = {{flex: '1 0 auto'}}>
                <Typography variant = 'h2' align = 'center'>Home Page</Typography>
                <Typography align = 'center'>This is the "Home" page!
                    This application provides a "partial" solution that users can use to get started on building their own full-fledged Talent Management system.
                    The application also includes source code that can be used as an example for building out the rest of the application.
                    This REACT based front-end works along with the Talent back-end REST API which is also a "partial" solution that needs to be built-out.
                    The system accepts logins from three types of users:
                    - Administrator
                    - Hiring_Manager
                    - Candidate
                    In addition, Guests can use limited functionality without having to log in.
                    Before you start your work you should become familiar with the front-end user interface and the back-end API, their code and the techniques being used.
                </Typography>
            </Container>
            <FooterComponent />
        </Box>
    )
}