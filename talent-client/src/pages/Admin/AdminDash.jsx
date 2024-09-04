import React from "react";
import {Box, Container, Typography, Button} from '@mui/material';
import HeaderComponent from '../../components/Header';
import FooterComponent from '../../components/Footer';
import ManageUsersPage from "./ManageUsersPage";
import ManageAppsPage from "./ManageAppsPage";
import ManageJobsPage from "./ManageJobsPage";
import { Link } from "react-router-dom";

export default function AdminDash(props) {
    return (
        <Box sx = {{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <HeaderComponent user={props.user}/>
            <Container sx = {{flex: '1 0 auto', padding:'10px'}}>
                <Typography variant = 'h4' align = 'center'>Welcome, Admin</Typography>
                <Button component={Link} to="/manage_apps">Manage Applications</Button>
                <br></br>
                <Button component={Link} to="/manage_users">Manage Users</Button>
                <br></br>
                <Button component={Link} to="/manage_jobs">Manage Jobs</Button>
                
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