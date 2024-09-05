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
    const id = params.managerId;
    const [refresh, setRefresh] = useState(false);
    const refreshJobList = () => {
        setRefresh(!refresh);
    };
    useEffect(() => {
        const managerJobs = async () => {
            let temp = await getOpenJobsByManager(id)
            if (!temp) {
                temp = []
            }
            setJobs(temp)
        }
        managerJobs()
    }, [refresh]);

    return (
        <div>
            <div>
                <Header user={props.user} specificUser={props.specificUser} logOut={props.logOut}/>
            </div>
            <div >
                <Typography variant="h4" component="h4">Your Job Postings</Typography>
                {/* <SearchBar setJobs={setJobs}/> */}
                <ManagerJobList jobs={jobs} user={props.user} specificUser={props.specificUser} refresh={refresh} refreshJobs={refreshJobList}/>
            </div>
        </div>
    );
}