import React, {useState} from "react";
import {TextField, Button, Container, Typography, Alert, Select, MenuItem, InputLabel, FormControl} from '@mui/material';
import { registerUser } from "../../api/authApi";

export default function RegisterPage() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userType, setUserType] = useState('');

    const handleSubmit = (e) => {
        console.log("SUBMITTING")
        e.preventDefault();
        if(!email || !username || !password || !confirmPassword || !userType) {
            setError('Please enter all fields.');
            return;
        }

        if(password !== confirmPassword) {
            setError('Passwords must match');
            return;
        }
        console.log("END SUBMIT")
        registerUser({username: username, password: password, type: userType})
    };

    return (
        <Container maxWidth="xs" className="registration-container"
            sx={{backgroundColor: '#f0f0f0',
                padding: '16px',
                marginTop: '16px',
                borderRadius: '8px'
            }}
        >
            <Typography variant="h4" component="h2" gutterBottom align="center">Register</Typography>
            <FormControl onSubmit={(event) => handleSubmit(event)}>
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    variant="outlined"
                    margin="normal" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Username"
                    fullWidth
                    variant="outlined"
                    margin="normal" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    margin="normal" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                    label="Confirm Password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    margin="normal" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel>Account Type</InputLabel>
                    <Select
                        value={userType}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        label="Account Type"
                        onChange={(e) => setUserType(e.target.value)}
                    >
                        <MenuItem value="Candidate">Candidate</MenuItem>
                        <MenuItem value="Hiring_Manager">Manager</MenuItem>
                    </Select>
                </FormControl>
                <br></br>
                <Button type="submit" variant="contained" sx={{backgroundColor: '#52A447'}}  onClick={(e) => handleSubmit(e)}>Register</Button>
            </FormControl>
        </Container>
        
    )
}