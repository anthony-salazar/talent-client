import React from 'react';
import '../jobSearchStyling.css';

const JobCard = (props) => {
    return(
        <div className='job-card'>
            <h4 className='job-title'>{props.job.title}</h4>
            <div className='job-details'>
                <p>{props.job.company}</p>
                <p><img src='location.png' alt='location' className='job-icon'></img> {props.job.location}</p>
                <p>{props.job.type}</p>
            </div>
        </div>
    );
}

export default JobCard;