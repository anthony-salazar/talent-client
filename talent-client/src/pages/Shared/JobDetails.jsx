import React, { useState } from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import JobUpdate from "../../components/JobUpdate";

const JobDetails = (props) => {
    console.log(props.user);
    const navigateApply = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }
    const allowEditDelete = (props.user.type === "Hiring_Manager" || props.user.type === "Administrator" ) ? true : false;
    const allowApply = (props.user.type === "Candidate" || props.user.type === "Administrator" ) ? true : false;
    const allowClick = (props.job.id >= 0) ? true : false;
    return(
        <div>
            <p><strong>Job ID:</strong> {props.job.id}</p>
            <p><strong>Job Title:</strong> {props.job.job_title}</p>
            <p><strong>Department:</strong> {props.job.department}</p>
            <p><strong>Date Posted:</strong> {props.job.datelisted}</p>
            <p><strong>Job Status:</strong> {props.job.listing_status}</p>
            <p><strong>Job Description:</strong> {props.job.job_description}</p>
            <p><strong>Additional Information:</strong> {props.job.additional_information}</p>

            <Button variant="contained" onClick={handleClickOpen} sx={{ visibility: allowEditDelete? 'visible' : 'hidden'}}>Update</Button>
            {/* <button className="edit-button" onClick={() => navigateApply('/jobupdate/'+ props.job.id)}>Edit</button> */}
            <Button variant="contained" sx={{ backgroundColor: 'red', color: 'white' , marginLeft: 2, visibility: allowEditDelete? 'visible' : 'hidden'}}>Delete</Button>
            <Button variant="contained" sx={{ backgroundColor: 'green', color: 'white' , marginLeft: 12, visibility: allowApply? 'visible' : 'hidden'}} onClick={() => navigateApply('/apply/'+ props.job.id)}>Apply</Button>

            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle>Update Job</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <JobUpdate job={props.job} onClose={handleClose} specificUser={props.specificUser}/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default JobDetails;