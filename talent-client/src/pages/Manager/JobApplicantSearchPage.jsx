import React, { useState, useEffect } from "react";
import ApplicantList from "../../components/ApplicantList";
import axios from 'axios';

const JobApplicantPage = (props) => {
    const [applicationList, setApplicationlist] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('http://localhost:8080/applications').then(res => {return res.data});
                setApplicationlist(response);
            }
            catch(err){
                throw new Error('There error in Job Applicant Search Page');
            }
        };
        fetchData();
    }, []);

    return(
        <div>
            <div>
            </div>
            <div>
                <ApplicantList applicationList={applicationList}/>
            </div>
        </div>
    );


}

export default JobApplicantPage;