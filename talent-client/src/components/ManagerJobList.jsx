import React, { useState } from 'react';
import JobCard from './JobCard';
import '../App.css';
import JobApplicationDetails from '../pages/Shared/JobApplicationDetails';

const ManagerJobList = (props) => {
    const blankJob = {
        "id" : '',
        "manager_id": '',
        "department": "",
        "listing_title": "",
        "date_listed": "",
        "date_closed": "",
        "job_title": "",
        "job_description": "",
        "additional_information" : "",
        "listing_status": ""};
    const [selectedjob, setjob] = useState(blankJob);
    //data needs to be filtered so that it only shows jobs posted by the current manager id
    return(
        <div className='job-container'>
            <div className='column'>
            <div className='job-list'>
                {props.jobs.length > 0 ?
                (props.jobs.map(job => <JobCard key={job.id} job={job} setjob={setjob}/>)) : (<p>No Job Found</p>)}
            </div>
            </div>
            <div className='column'>
                <JobApplicationDetails job={selectedjob}/>
            </div>

        </div>
    );
}

export default ManagerJobList;