import { authEndpoints } from "./apiConstants"

export const registerUser = (user) => {
    console.log("API USER: ", user)
    fetch(authEndpoints.base + authEndpoints.registration, {method: 'POST', 
        headers: {'Content-Type': 'application/json'}, body: JSON.stringify(user)})
}