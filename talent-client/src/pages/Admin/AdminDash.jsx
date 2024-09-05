import React from "react";
import {Box, Container, Typography, Button, IconButton} from '@mui/material';
import HeaderComponent from '../../components/Header';
import FooterComponent from '../../components/Footer';
import ManageUsersPage from "./ManageUsersPage";
import ManageAppsPage from "./ManageAppsPage";
import ManageJobsPage from "./ManageJobsPage";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import WorkIcon from '@mui/icons-material/Work';

export default function AdminDash(props) {
    return (
        <Box sx = {{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <HeaderComponent user={props.user} specificUser={props.specificUser} logOut={props.logOut}/>
            <Container sx = {{flex: '1 0 auto', padding:'10px'}}>
                <Typography variant = 'h4' align = 'center'>Welcome, Admin</Typography>
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
                        to="/manage_apps"
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
                        <Typography variant="button">Manage Applications</Typography>
                    </Button>
                    <Button
                        component={Link}
                        to="/manage_users"
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
                        <AccessibilityNewIcon sx={{fontSize: 40}}/>
                        <Typography variant="button">Manage Users</Typography>
                    </Button>
                    <Button
                        component={Link}
                        to="/manage_jobs"
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
                        <Typography variant="button">Manage Job Postings</Typography>
                    </Button>
                </Box>
                
            </Container>
            <Container sx={{padding:'10px'}}>
            <footer>
                <Typography variant='h6' align='center'>Click Below to Change Views</Typography>
                <Button component={Link} to='/candidate'>Candidate View</Button>
                <Button component={Link} to='/manager'>Manager View</Button>
            </footer>
            </Container>
            
        </Box>
    )
}