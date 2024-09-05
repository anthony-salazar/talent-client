import React, { useState } from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DataForm from '../../components/DataForm';
import Button from '@mui/material/Button';

const JobDetails = (props) => {
    // console.log(props.user);
    const navigateApply = useNavigate();
    const [open, setOpen] = React.useState(false);
    // const [userType, setUserType] = React.useState('candidate'); // Dummy usertype constant

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }
    const allowEditDelete = (props.user.type === "Hiring_Manager" || props.user.type === "Administrator" ) ? true : false;
    const allowApply = (props.user.type === "Candidate" || props.user.type === "Administrator" ) ? true : false;
    const allowClick = (props.job.id >= 0) ? true : false;
    const handleDelete = async () => {
        try {
            await axios.delete('http://localhost:8080/jobs/' + props.job.id, { headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*'
            }});
        } catch (error) {
            console.error('Error deleting job:', error);
        }
    }

    const handleSave = async (updatedJob) => {
        try {
            await axios.put('http://localhost:8080/jobs/' + props.job.id, updatedJob, { headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*'
            }});
            handleClose();
        } catch (error) {
            console.error('Error updating job:', error);
        }
    }

    //create field for dataForm using the fields from the job object
    const fields = [
        {name: 'job_title', label: 'Job Title', type: 'text', readonly: false},
        {name: 'department', label: 'Department', type: 'text', readonly: false},
        {name: 'job_description', label: 'Job Description', type: 'text', rows:4},
        {name: 'additional_information', label: 'Additional Information', type: 'text', rows:4},
        {name: 'listing_status', label: 'Job Status', type: 'select', options: ['OPEN', 'CLOSED']}
    ]

    return (
        <div>
            <p><strong>Job ID:</strong> {props.job.id}</p>
            <p><strong>Job Title:</strong> {props.job.job_title}</p>
            <p><strong>Department:</strong> {props.job.department}</p>
            <p><strong>Job Status:</strong> {props.job.listing_status}</p>
            <p><strong>Job Description:</strong> {props.job.job_description}</p>
            <p><strong>Additional Information:</strong> {props.job.additional_information}</p>


                <>
                    <Button variant="contained" onClick={handleClickOpen} sx={{ visibility: allowEditDelete? 'visible' : 'hidden'}}>Update</Button>
                    <Button variant="contained" sx={{ backgroundColor: 'red', color: 'white' , marginLeft: 2, visibility: allowEditDelete? 'visible' : 'hidden'}} onClick={handleDelete}>Delete</Button>
                </>


            <Button variant="contained" sx={{ backgroundColor: 'green', color: 'white' , marginLeft: 12, visibility: allowApply? 'visible' : 'hidden'}} onClick={() => navigateApply('/apply/'+ props.job.id)}>Apply</Button>
            {
                //once the update is clicked, the dialog will open
                open && (
                    <DataForm
                        open = {open}
                        onClose={handleClose}
                        onSave={handleSave}
                        onDelete={handleDelete}
                        data={props.job}
                        fields={fields}
                        modalTitle="Job Details"
                    />
                )         }

        </div>
    );
}

export default JobDetails;