import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import axios from 'axios';

export default function ManageCandidateApps(props) {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const fetchApplications = async () => {
            console.log("Fetching applications...");
            const apiUrl = `http://localhost:8080/applications/user/${props.user.id}`;
            try {
                const response = await axios.get(apiUrl);
                console.log("Fetched data:", response.data);
                setApplications(response.data); // Directly set the applications state with the fetched data
            } catch (error) {
                console.error("Error fetching applications:", error);
            }
        };

        fetchApplications();
    }, [props.user.id]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header user={props.user} />
            <Container sx={{ flex: '1 0 auto' }}>
                <Typography variant='h3' align='center'>Manage Applications Page</Typography>
                <TableContainer component={Paper} sx={{ mt: 3 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>User ID</TableCell>
                                <TableCell>Job ID</TableCell>
                                <TableCell>Date Applied</TableCell>
                                <TableCell>Cover Letter</TableCell>
                                <TableCell>Custom Resume</TableCell>
                                <TableCell>Application Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {applications.map((app) => (
                                <TableRow key={app.id}> {/* Use app.id as the key */}
                                    <TableCell>{app.id}</TableCell>
                                    <TableCell>{app.user?.id || 'N/A'}</TableCell> {/* Ensure user.id exists */}
                                    <TableCell>{app.job?.id || 'N/A'}</TableCell> {/* Ensure job.id exists */}
                                    <TableCell>{new Date(app.date_applied).toLocaleDateString()} {new Date(app.date_applied).toLocaleTimeString()}</TableCell>
                                    <TableCell>{app.cover_letter}</TableCell>
                                    <TableCell>{app.custom_resume}</TableCell>
                                    <TableCell>{app.application_status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            <Footer />
        </Box>
    );
}
