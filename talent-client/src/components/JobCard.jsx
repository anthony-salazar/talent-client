import React from 'react';
import '../App.css';

const JobCard = (props) => {
    return(
        <div className='job-card'>
            <h4 className='job-title'>{props.job.job_title}</h4>
            <div className='job-details'>
                <p><strong>Department: </strong> {props.job.department}</p>
                <p><strong>Date Posted: </strong> {props.job.date_listed}</p>
                <p><strong>Status: </strong> {props.job.listing_status}</p>
            </div>
        </div>
    );
}

export default JobCard;