import React, {useEffect, useState} from "react";
import SearchBar from "../../components/JobSearchBar";
import ManagerJobList from "../../components/ManagerJobList";
import '../../App.css';
import Header from "../../components/Header";
import {Typography} from "@mui/material";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { getOpenJobsByManager } from "../../api/jobAPI";

export default function ManagerJobsPage(props) {
    const [jobs, setJobs] = useState([]);
    const params = useParams();
    const id = params.managerId
    useEffect(() => {
        const managerJobs = async () => {
            const temp = await getOpenJobsByManager(id)
            console.log(temp)
            setJobs(temp)
        }
        managerJobs()
    }, []);

    return (
        <div>
            <div>
                <Header user={props.user} specificUser={props.specificUser} logOut={props.logOut}/>
            </div>
            <div >
                <Typography variant="h4" component="h4">Your Job Postings</Typography>
                {/* <SearchBar setJobs={setJobs}/> */}
                <ManagerJobList jobs={jobs} user={props.user} specificUser={props.specificUser}/>
            </div>
        </div>
    );
}