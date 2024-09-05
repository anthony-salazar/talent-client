import React, {useState} from "react";
import {TextField, Button, Container, Typography, Alert, Select, MenuItem, InputLabel, FormControl} from '@mui/material';
import { registerUser } from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import RouteConstants from "../../routeConstants";

export default function RegisterPage() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [userType, setUserType] = useState('');
    const [fullName, setFullName] = useState('');
    const [department, setDepartment] = useState('');
    const [address, setAddress] = useState('');
    const [resume, setResume] = useState('');
    const navigate = useNavigate();
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
        registerUser({username: username, password: password, type: userType, email: email, phone: phone, full_name: fullName, department: department, address: address, resume: resume})
        navigate(RouteConstants.Login)
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
                <TextField
                    label="Phone Number"
                    fullWidth
                    variant="outlined"
                    margin="normal" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                    label="Full Name"
                    fullWidth
                    variant="outlined"
                    margin="normal" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
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
                    { 
                        userType === 'Hiring_Manager' &&
                         <>
                        <TextField
                            label="Department"
                            fullWidth
                            variant="outlined"
                            margin="normal" 
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                        />
                        </>
                    }
                    {
                        userType === 'Candidate' && 
                        <>
                        <TextField
                            label="Address"
                            fullWidth
                            variant="outlined"
                            margin="normal" 
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <TextField
                            label="Resume"
                            fullWidth
                            variant="outlined"
                            margin="normal" 
                            value={resume}
                            onChange={(e) => setResume(e.target.value)}
                        />
                        </>
                    }
                </FormControl>
                <br></br>
                <Button type="submit" variant="contained" sx={{backgroundColor: '#52A447'}}  onClick={(e) => handleSubmit(e)}>Register</Button>
            </FormControl>
        </Container>
        
    )
}