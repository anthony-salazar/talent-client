import axios from 'axios';

const baseApplicationURL = 'http://localhost:8080/applications';

//Get all application
export const getAllApplications = async() =>{
    try{
        const response = await axios.get(baseApplicationURL);
        console.log("Get All Application ",response.data);
        return response.data;
    }catch(error){
        console.error(error);
        //throw error;
    }
};

//Get application by ID
export const getApplicationById = async(id) =>{
    try{
        const response = await axios.get(`${baseApplicationURL}/${id}`);
        console.log("Get Application by ID ",response.data);
    }catch(error){
        throw error;
    }

};

//Get application by Manager ID
export const getApplicationByManagerId = async(manager_id) =>{
    try{
        const response = await axios.get(`${baseApplicationURL}/manager/${manager_id}`);
        console.log("Get Application by Manager ID ",response.data);
    }catch(error){
        throw error;
    }

};

//Get application by Job ID
export const getApplicationByJobId = async(job_id) =>{
    try{
        const response = await axios.get(`${baseApplicationURL}/job/${job_id}`);
        console.log("Get Application by Job ID ",response.data);
    }catch(error){
        throw error;
    }
};

//Get application by User ID
export const getApplicationByUserId = async(user_id) =>{
    try{
        const response = await axios.get(`${baseApplicationURL}/user/${user_id}`);
        console.log("Get Application by User ID ",response.data);
    }catch(error){
        throw error;
    }
};

//Delete application by ID
export const deleteApplicationById = async(id) =>{
    try{
        const response = await axios.delete(`${baseApplicationURL}/${id}`);
        console.log("Delete flag ",response.data);
    }catch(error){
        throw error;
    }
};

//Add application
export const addApplication = async(application) =>{
    try{
        const response = await axios.post(`${baseApplicationURL}`, application);
        //response.status
        console.log("Add Application ",response.data);
    }catch(error){
        throw error;
    }
};

//Update application
export const updateApplication = async(id, application) =>{
    try{
        const response = await axios.put(`${baseApplicationURL}/${id}`, application);
        //response.status
        console.log("Update Application ",response.data);
    }catch(error){
        throw error;
    }
};