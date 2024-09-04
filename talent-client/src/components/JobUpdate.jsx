import React, { useEffect } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function JobUpdate( {job, onClose } ) {
    // const params = useParams();
    // const id = params.jobId;
    // const [data, setData] = useState(null);
    // useEffect(()=> {
    //     if(id){
    //         const filteredData = list.find((item) => item.id === id);
    //         if(filteredData){
    //             setData(filteredData);
    //         }
    //         else{
    //             console.log('NO Match Found');
    //         }
    //     }
    // }, [id]);
    const [jobID, setJobID] = useState('');
    const [description, setDescription] = useState('');
    const [addInfo, setAddInfo] = useState('');
    const [listingTitle, setListingTitle] = useState('');
    const [managerID, setManagerID] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [listingStatus, setListingStatus] = useState('');
    const [department, setDepartment] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if(job){
            setJobID(job.id || '')
            setManagerID(job.manager_id || '')
            setDepartment(job.department || '')
            setListingTitle(job.listing_title || '')
            setJobTitle(job.job_title || '')
            setDescription(job.job_description || '')
            setAddInfo(job.additional_information || '')
            setListingStatus(job.listing_status || '')
        }
    }, [job])

    return (
        <Container maxWidth="xs" className="job-update-container">
            <Typography variant="h4" component="h2" gutterBottom align="center">Job Update</Typography>
            <form>
                <TextField
                    label="JOB ID"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={jobID}
                    onChange={(e) => setJobID(e.target.value)}
                />
                <TextField
                    label="Manager ID"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={managerID}
                    onChange={(e) => setManagerID(e.target.value)}
                />
                <TextField
                    label="Department"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                />
                <TextField
                    label="Listing Title"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={listingTitle}
                    onChange={(e) => setListingTitle(e.target.value)}
                />
                <TextField
                    label="Job Title"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                />
                <TextField
                    label="Job Descripiton"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <TextField
                    label="Additional Informaiton"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={addInfo}
                    onChange={(e) => setAddInfo(e.target.value)}
                />
                <TextField
                    label="Listing Status"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={listingStatus}
                    onChange={(e) => setListingStatus(e.target.value)}
                />

                <Button variant="contained" >Submit</Button>
            </form>
        </Container>
    );
}

