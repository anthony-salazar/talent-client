import React from "react";
import {Link} from "react-router-dom";
import DataTable from "../../components/DataTable";
import jobs from "../../data/jobs.json";
import HeaderComponent from '../../components/Header';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import WorkIcon from '@mui/icons-material/Work';
import JobUpdate from "../../components/JobUpdate";

import { Box, Container, Typography,Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';


export default function ManagerDash() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }
    return (
        <Box sx = {{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <HeaderComponent />
            <Container sx = {{flex: '1 0 auto', padding:'10px'}}>
                <Typography variant = 'h4' align = 'center'>Welcome, Hiring Manager</Typography>
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
                        <Typography variant="button">View Applications For Your Postings</Typography>
                    </Button>
        
                <Button
                        onClick={handleClickOpen}
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
                        <Typography variant="button">Create A New Job Posting</Typography>
                    </Button>
                    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                    <DialogTitle>Create Job</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <JobUpdate onClose={handleClose}/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
                </Box>
                
                
            </Container>
            
        </Box>
    )
}