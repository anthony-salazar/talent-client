import React, { useState } from 'react';
import '../App.css';
import ApplicantCard from './ApplicantCard';
import ApplicantDetails from './ApplicationDetails';

const ApplicantList = (props) => {
    const blankCandidate = {
        id: '',
        full_name:'',
        email: '',
        address: '',
        phone: '',
        resume: ''
    };
    const [selectedApplication, setApplication] = useState({});
    const [selectedCandidate, setSelectedCandidate] = useState(blankCandidate);
    return(
        <div className='job-container'>
            <div className='column'>
            <div className='job-list'>
                {props.applicationList.length > 0 ?
                (props.applicationList.map(application => <ApplicantCard key={application.id} application={application} setSelectedCandidate={setSelectedCandidate} setApplication={setApplication}/>)) : (<p>No Applicants Found</p>)}
            </div>
            </div>
            <div className='column'>
                <ApplicantDetails candidate={selectedCandidate} application={selectedApplication} />
            </div>

        </div>
    );
}

export default ApplicantList;