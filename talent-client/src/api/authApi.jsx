import { authEndpoints } from "./apiConstants"

export const registerUser = (user) => {
    console.log("API USER: ", user)
    fetch(authEndpoints.base + authEndpoints.registration, {method: 'POST', 
        headers: {'Content-Type': 'application/json'}, body: JSON.stringify(user)}).catch(err => console.log(err))
}

export const loginUser = (user, setVisible) => {
    console.log("LOGIN: ", user)
    return fetch(authEndpoints.base + authEndpoints.login, {method: 'POST', 
        headers: {'Content-Type': 'application/json'}, body: JSON.stringify(user)}).then((res) => {
            return res.json();
        }).then(data => {setVisible(false); return {name: data.username, type: data.type};}).catch((err) => setVisible(true))
}