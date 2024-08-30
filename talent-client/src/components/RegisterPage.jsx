import React, {useState} from "react";
import {TextField, Button, Container, Typography, Alert} from '@mui/material';

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
        <Container maxWidth="sm" className="registration-container">
            <Typography variant="h4" component="h2" gutterBottom align="center">Register</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    margin="normal" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Username"
                    variant="outlined"
                    margin="normal" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    margin="normal" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary">Register</Button>
            </form>
        </Container>
        
    )
}