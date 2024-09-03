import { authEndpoints } from "./apiConstants"

export const registerUser = (user) => {
    console.log("API USER: ", user)
    fetch(authEndpoints.base + authEndpoints.registration, {method: 'POST', 
        headers: {'Content-Type': 'application/json'}, body: JSON.stringify(user)})
}

export const loginUser = (user) => {
    console.log("LOGIN: ", user)
    return fetch(authEndpoints.base + authEndpoints.login, {method: 'POST', 
        headers: {'Content-Type': 'application/json'}, body: JSON.stringify(user)}).then((res) => {
            return res.json();
        }).then(data => {return data.type;})
}