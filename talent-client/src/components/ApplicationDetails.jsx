import React, { useState } from 'react';
import '../App.css';


const ApplicantDetails = (props) => {
    return(
        <div>
            <p><strong>Application ID:</strong> {props.application.id}</p>
            <p><strong>Cover Letter:</strong> {props.application.cover_letter}</p>
            <p><strong>Custom Resume:</strong> {props.application.custom_resume}</p>
            <p><strong>Application Status:</strong> {props.application.application_status}</p>
        </div>
    );
}

export default ApplicantDetails;