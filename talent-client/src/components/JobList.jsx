import React from 'react';
import JobCard from './JobCard';
import '../App.css';

const JobList = (props) => {
    return(
        <div>
            <div className='job-list'>
                {props.jobs.length > 0 ? 
                (props.jobs.map(job => <JobCard key={job.id} job={job}/>)) : (<p>No Job Found</p>)}
            </div>
        </div>
    );
}

export default JobList;