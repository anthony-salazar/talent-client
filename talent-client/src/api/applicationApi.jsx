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
    }
};

//Get application by ID
export const getApplicationById = async(id) =>{
    try{
        const response = await axios.get(`${baseApplicationURL}/${id}`);
        console.log("Get Application by ID ",response);
        return response.data;
    }catch(error){
        console.log(error);
    }

};

//Get application by Manager ID
export const getApplicationByManagerId = async(manager_id) =>{
    try{
        const response = await axios.get(`${baseApplicationURL}/manager/${manager_id}`);
        console.log("Get Application by Manager ID ",response.data);
        return response.data;
    }catch(error){
        console.log(error);
    }

};

//Get application by Job ID
export const getApplicationByJobId = async(job_id) =>{
    try{
        const response = await axios.get(`${baseApplicationURL}/job/${job_id}`);
        console.log("Get Application by Job ID ",response.data);
        return response.data;
    }catch(error){
        console.log(error);
    }
};

//Get application by User ID
export const getApplicationByUserId = async(user_id) =>{
    try{
        const response = await axios.get(`${baseApplicationURL}/user/${user_id}`);
        console.log("Get Application by User ID ",response.data);
        return response.data;
    }catch(error){
        console.log(error);
    }
};

//Delete application by ID
export const deleteApplicationById = async(id) =>{
    try{
        console.log(`${baseApplicationURL}/${id}`)
        const response = await axios.delete(`${baseApplicationURL}/${id}`,{
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
        console.log("Delete flag ",response.data);
        return response.data;
    }catch(error){
        //throw error;
        console.log(error);
    }
};

//Add application 
export const addApplication = async(application) =>{
    fetch(baseApplicationURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(application),
      })
        .then(response => { return response.json().then(data => {
            console.log(data);
            return data;
        })}
            )
        .catch(error => {
            console.log(error);
        });
};

//Update application 
export const updateApplication = async(id, application) =>{
        const response = await axios.put(`${baseApplicationURL}/${id}`, 
            application,{
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }).then(response => response).then(data => {
                return data;
            }).catch(error => {
                console.log(error);
            });
};