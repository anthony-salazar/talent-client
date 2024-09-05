import React, { useState } from 'react';
import '../App.css';
import { Button } from '@mui/material';


const ApplicantDetails = (props) => {
    console.log(props.candidate);
    return(
        <div>
            <p><strong>Application ID:</strong> {props.application.id}</p>
            <p><strong>Applicant Name:</strong>  {props.candidate.full_name}</p>
            <p><strong>Applicant Email:</strong>  {props.candidate.email}</p>
            <p><strong>Applicant Phone</strong>  {props.candidate.phone}</p>
            <p><strong>Cover Letter:</strong> {props.application.cover_letter}</p>
            <p><strong>Custom Resume:</strong> {props.application.custom_resume}</p>
            <p><strong>Application Status:</strong> {props.application.application_status}</p>
        </div>
    );
}

export default ApplicantDetails;