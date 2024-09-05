import { useState } from "react";
import { authEndpoints } from "./apiConstants"
import { json } from "react-router-dom";
import axios from 'axios';

export const getManagerByID = async(id) => {
    console.log("API USER: ", id);
    const manager  = await fetch(authEndpoints.base + authEndpoints.managers + "/" + id)
    .then((res)=> {return res.json();}).then(data => {return data;});
    console.log(manager);
    return manager;
}

export const getManagers = async () => {
    const managers = await axios.get(`${authEndpoints.base}${authEndpoints.managers}`)
    .then((res) => {return res.data}).catch(err => console.log(err))
    return managers;
}

export const addManager = async (manager) => {
    return fetch(`${authEndpoints.base}${authEndpoints.managers}/`, {method: 'POST', mode: 'cors',
        headers:{'Content-Type': 'application/json'}, body: JSON.stringify(manager)}).then(data => {return data.json()})
        .catch(err => console.log(err))
}

export const updateManager = async (manager) => {
    return fetch(`${authEndpoints.base}${authEndpoints.managers}/${manager.id}`, {method: 'PUT', mode: 'cors',
        headers:{'Content-Type': 'application/json'}, body: JSON.stringify(manager)}).then(data => {return data.json()})
        .then(res => {return res}).catch(err => console.log(err))
}

export const deleteManager = async (manager_id) => {
    return fetch(`${authEndpoints.base}${authEndpoints.managers}/${manager_id}`, {method: 'DELETE', mode: 'cors'}
    ).then(data => {return data.json()}).then(res => {return res}).catch(err => console.log(err))
}