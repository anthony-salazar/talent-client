import React from 'react';
import JobCard from './JobCard';
import '../jobSearchStyling.css';
import SearchBar from './SearchBar';

const JobSearch = (props) => {
    console.log(props.jobs);
    return(
        <div>
            <div>
            <SearchBar />
            </div>
            <div className='job-list'>
                {props.jobs.length > 0 ? 
                (props.jobs.map(job => <JobCard key={job.id} job={job}/>)) : (<p>No Job Found</p>)}
            </div>
        </div>
    );
}

export default JobSearch;