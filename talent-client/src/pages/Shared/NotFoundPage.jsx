import React from "react";
import {Container, Typography, Link, Box} from '@mui/material';
import RouteConstants from "../../routeConstants";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function NotFoundPage() {
    return (
        <Box sx = {{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <Header />
            <Container  sx = {{flex: '1 0 auto'}}>

            <Typography variant = 'h3' align = 'center'>404 - Page Not Found </Typography>
            <Link href={RouteConstants.Home}>Go Back to Home</Link>
        </Container>
        <Footer/>
        </Box>

    )

}

export default NotFoundPage;