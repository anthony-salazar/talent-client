import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Container, Typography, Button } from '@mui/material';
import DataForm from "../../components/DataForm";
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import WorkIcon from '@mui/icons-material/Work';
import HeaderComponent from "../../components/Header";
import axios from 'axios';


export default function ManagerDash(props) {

    const manager = props.specificUser;

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const handleSave = async (jobs) => {
        try {
            const jobsWithManager = {
                ...jobs,
                manager: manager
            };

            await axios.post('http://localhost:8080/jobs', jobsWithManager, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
            handleClose();
        } catch (error) {
            console.error('Error updating job:', error);
        }
    }

    const fields = [
        { name: 'job_title', label: 'Job Title', type: 'text', readonly: false },
        { name: 'department', label: 'Department', type: 'text', readonly: false },
        { name: 'job_description', label: 'Job Description', type: 'text', rows: 4 },
        { name: 'additional_information', label: 'Additional Information', type: 'text', rows: 4 },
        { name: 'listing_status', label: 'Job Status', type: 'select', options: ['OPEN', 'CLOSED'] }
    ]
    console.log(props)
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <HeaderComponent user={props.user} />
            <Container sx={{ flex: '1 0 auto', padding: '10px' }}>
                <Typography variant='h4' align='center'>Welcome, Hiring Manager</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 2,
                        p: 2
                    }}
                >
                    <Button
                        component={Link}
                        to={`/manager/${props.specificUser.id}`}
                        variant="contained"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 1,
                            p: 2,
                            textAlign: 'center'
                        }}
                    >
                        <DisplaySettingsIcon sx={{ fontSize: 40 }} />
                        <Typography variant="button">View Your Postings</Typography>
                    </Button>

                    <Button
                        onClick={handleClickOpen}
                        variant="contained"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 1,
                            p: 2,
                            textAlign: 'center'
                        }}
                    >
                        <WorkIcon sx={{ fontSize: 40 }} />
                        <Typography variant="button">Create A New Posting</Typography>
                    </Button>
                    {
                        open && (
                            <DataForm
                                open={open}
                                onClose={handleClose}
                                onSave={handleSave}
                                onDelete={() => {}} // Empty onDelete function
                                data={{}}
                                fields={fields}
                                modelTitle="Create New Job"
                            />

                        )
                    }
                </Box>


            </Container>

        </Box>
    )
}