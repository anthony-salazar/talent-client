import React from "react";
import DataTable from "../../components/DataTable";
import applications from "../../data/application.json";
import HeaderComponent from '../../components/Header';
import {Box, Container, Typography, Button} from '@mui/material';
import { Link } from "react-router-dom";
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import WorkIcon from '@mui/icons-material/Work';
import Footer from "../../components/Footer";

export default function CandidateDash(props) {
    return (
        <Box sx = {{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <HeaderComponent user={props.user} specificUser={props.specificUser} logOut={props.logOut}/>
            <Container sx = {{flex: '1 0 auto', padding:'10px'}}>
                <Typography variant = 'h4' align = 'center'>Welcome, Candidate</Typography>
                <Box
                    sx={{
                        display:'flex',
                        justifyContent: 'center',
                        gap: 2,
                        p: 2
                    }}
                >
                    <Button
                        component={Link}
                        to="/candidate_jobs"
                        variant="contained"
                        sx={{
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'center',
                            gap: 1,
                            p: 2,
                            textAlign: 'center'
                        }}
                    >
                        <DisplaySettingsIcon sx={{fontSize: 40}}/>
                        <Typography variant="button">View My Applications</Typography>
                    </Button>
                    <Button
                        component={Link}
                        to="/jobsearch"
                        variant="contained"
                        sx={{
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'center',
                            gap: 1,
                            p: 2,
                            textAlign: 'center'
                        }}
                    >
                        <WorkIcon sx={{fontSize: 40}}/>
                        <Typography variant="button">Search For A New Job</Typography>
                    </Button>
                </Box>
                
            </Container>
            <Footer/>
        </Box>
    )
}