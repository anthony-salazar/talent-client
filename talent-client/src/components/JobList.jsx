import React, { useState } from 'react';
import JobCard from './JobCard';
import '../App.css';
import JobDetails from '../pages/Shared/JobDetails';

const JobList = (props) => {
    const [selectedjob, setjob] = useState(props.jobs[0]);
    return(
        <div className='job-container'>
            <div className='column'>
            <div className='job-list'>
                {props.jobs.length > 0 ? 
                (props.jobs.map(job => <JobCard key={job.id} job={job} setjob={setjob}/>)) : (<p>No Job Found</p>)}
            </div>
            </div>
            <div className='column'>
                <JobDetails job={selectedjob} />
            </div>
            
        </div>
    );
}

export default JobList;