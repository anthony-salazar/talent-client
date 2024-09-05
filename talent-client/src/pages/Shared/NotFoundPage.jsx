import React from "react";
import {Container, Typography, Link, Box} from '@mui/material';
import RouteConstants from "../../routeConstants";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

function NotFoundPage(props) {
    const navigate = useNavigate();
    return (
        <Box sx = {{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <Header user={props.user} specificUser={props.specificUser} logOut={props.logOut}/>
            <Container  sx = {{flex: '1 0 auto'}}>

            <Typography variant = 'h3' align = 'center'>404 - Page Not Found </Typography>
            <Link onClick={() => navigate(RouteConstants.Home)}>Go Back to Home</Link>
        </Container>
        <Footer/>
        </Box>

    )

}

export default NotFoundPage;