import axios from "axios"
import { candidateEndpoints } from "./apiConstants"

export const getCandidates = () => {
    return axios.get(candidateEndpoints.base).then(res => {return res.data;}).catch(
        (err) => console.log(err));
}

export const getCandidateById = (id) => {
    return axios.get(`${candidateEndpoints.base}/${id}`).then(res => {return res.data;}).catch(
        (err) => console.log(err));
}

export const addCandidate = (candidate) => {
    return fetch(`${candidateEndpoints.base}/`, {method: 'POST', mode: 'cors', 
        headers: {'Content-Type': 'application/json'}, body: JSON.stringify(candidate)})
}

export const updateCandidate = (candidate) => {
    return fetch(`${candidateEndpoints.base}/${candidate.id}`, {method: 'PUT', mode: 'cors', 
        headers: {'Content-Type': 'application/json'}, body: JSON.stringify(candidate)})
}

export const deleteCandidate = (candidate) => {
    return fetch(`${candidateEndpoints.base}/${candidate.id}`, {method: 'DELETE', mode: 'cors'})
}