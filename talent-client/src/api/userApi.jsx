import { useState } from "react";
import { authEndpoints } from "./apiConstants"
import { json } from "react-router-dom";
import axios from 'axios';

export const getUserByID = async(id) => {
    console.log("API USER: ", id);
    const user  = await fetch(authEndpoints.base + authEndpoints.users + "/" + id)
    .then((res)=> {return res.json();}).then(data => {return data;});
    console.log(user);
    return user;
}

export const getUsers = async () => {
    const users = await axios.get(`${authEndpoints.base}${authEndpoints.users}`)
    .then((res) => {return res.data}).catch(err => console.log(err))
    return users;
}

export const addUser = async (user) => {
    return fetch(`${authEndpoints.base}${authEndpoints.users}/`, {method: 'POST', mode: 'cors',
        headers:{'Content-Type': 'application/json'}, body: JSON.stringify(user)}).then(data => {return data.json()})
        .catch(err => console.log(err))
}

export const updateUser = async (user) => {
    return fetch(`${authEndpoints.base}${authEndpoints.users}/${user.id}`, {method: 'PUT', mode: 'cors',
        headers:{'Content-Type': 'application/json'}, body: JSON.stringify(user)}).then(data => {return data.json()})
        .then(res => {return res}).catch(err => console.log(err))
}

export const deleteUser = async (user_id) => {
    return fetch(`${authEndpoints.base}${authEndpoints.users}/${user_id}`, {method: 'DELETE', mode: 'cors'}
    ).then(data => {return data.json()}).then(res => {return res}).catch(err => console.log(err))
}