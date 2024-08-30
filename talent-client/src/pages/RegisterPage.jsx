import React, {useState} from "react";

export default function RegisterPage() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || !username || !password || !confirmPassword) {
            setError('Please enter all fields.');
            return;
        }

        if(password !== confirmPassword) {
            setError('Passwords must match');
            return;
        }
    };


    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>Email: </label>
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} required></input>
                <br></br>
                <label>Username: </label>
                <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} required></input>
                <br></br>
                <label>Password: </label>
                <input type="text" id="password" onChange={(e) => setPassword(e.target.value)} required></input>
                <br></br>
                <label>Confirm Password: </label>
                <input type="text" id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} required></input>
        
                <br></br>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}