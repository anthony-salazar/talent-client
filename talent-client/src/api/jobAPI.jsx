import { useState } from "react";
import { authEndpoints } from "./apiConstants"
import { json } from "react-router-dom";
import axios from 'axios';

export const getJobByID = async (id) => {
    console.log("API USER: ", id);
    const jobdata = await fetch(authEndpoints.base + authEndpoints.jobs + "/" + id)
    .then((res)=> {return res.json();}).then(data => {return data;});
    console.log(jobdata);
    return jobdata;
}

export const getJobs = async () => {
    const jobs = await axios.get(`${authEndpoints.base}${authEndpoints.jobs}`)
    .then((res) => {return res.data}).catch(err => console.log(err))
    return jobs;
}

export const getOpenJobs = async () => {
    const jobs = await axios.get(`${authEndpoints.base}${authEndpoints.jobs}/open`)
    .then((res) => {return res.data}).catch(err => console.log(err))
    return jobs;
}

export const getOpenJobsByManager = async (manager_id) => {
    const jobs = await axios.get(`${authEndpoints.base}${authEndpoints.jobs}/open/manager/${manager_id}`)
    .then((res) => {return res.data}).catch(err => console.log(err))
    return jobs;
}

export const addJob = async (job) => {
    return fetch(`${authEndpoints.base}${authEndpoints.jobs}`, {method: 'POST', mode: 'cors',
        headers:{'Content-Type': 'application/json'}, body: JSON.stringify(job)}).then(data => {return data.json()})
        .catch(err => console.log(err))
}

export const updateJob = async (job) => {
    return fetch(`${authEndpoints.base}${authEndpoints.jobs}/${job.id}`, {method: 'PUT', mode: 'cors',
        headers:{'Content-Type': 'application/json'}, body: JSON.stringify(job)}).then(data => {return data.json()})
        .then(res => {return res}).catch(err => console.log(err))
}

export const deleteJob = async (job_id) => {
    return fetch(`${authEndpoints.base}${authEndpoints.jobs}/${job_id}`, {method: 'DELETE', mode: 'cors'}
    ).then(data => {return data.json()}).then(res => {return res}).catch(err => console.log(err))
}

export const searchJobs = async (query) => {
    return await axios.get(`${authEndpoints.base}${authEndpoints.jobs}/search?searchTerm=${query}`).then(res => {return res.data})
    .catch(err => console.log(err))
}