import { useState } from "react";
import { authEndpoints } from "./apiConstants"
import { json } from "react-router-dom";

export const getJobByID = (id) => {
    console.log("API USER: ", id);
    const jobdata = fetch(authEndpoints.base + authEndpoints.jobs + "/" + id)
    .then((res)=> {return res.json();}).then(data => {return data;});
    console.log(jobdata);
    return jobdata;
}