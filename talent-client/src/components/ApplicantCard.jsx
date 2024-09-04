import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

const ApplicantCard = (props) => {
    const toApplicationDetails = () => {
        props.setApplication(props.application);
    }
    const [applicant, setApplicant] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('http://localhost:8080/candidates/getcandidate/'+ props.application.user.id).then(res => {return res.data});
                setApplicant(response);
            }
            catch(err){
                throw new Error('There error in Application Card');
            }
        };
        fetchData();
    }, [props.application.user.id]);

    return(
        <div className='job-card' onClick={toApplicationDetails}>
            <h4 className='job-title'>Name: {applicant.full_name}</h4>
            <div className='job-details'>
                <p><strong>Email: </strong> {applicant.email}</p>
                <p><strong>Phone: </strong> {applicant.phone}</p>
                <p><strong>Application Status: </strong> {props.application.application_status}</p>
            </div>
        </div>
    );
}

export default ApplicantCard;
