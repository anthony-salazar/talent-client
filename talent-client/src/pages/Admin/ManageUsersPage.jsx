import React, {useState, useEffect} from "react";
import {Container, Typography, Link, Box} from '@mui/material';
import RouteConstants from "../../routeConstants";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DataTable from "../../components/DataTable";
import users from "../../data/users.json";
import { USER_TYPES } from '../../userTypes';
import {TextField, Button, Alert, Select, MenuItem, InputLabel, FormControl} from '@mui/material';
import { registerUser } from "../../api/authApi";
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';


export default function ManageUsersPage(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userType, setUserType] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);

    const openRegisterDialog = () => {
        setButtonClicked(true);
    }

    const closeRegisterDialog = () => {
        setButtonClicked(false);
    }

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
        closeRegisterDialog();
    };


    return (
        <Box sx = {{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <Header user={props.user}/>
            <Container  sx = {{flex: '1 0 auto'}}>

            <Typography variant = 'h3' align = 'center'>Manage Users Page </Typography>
            {/* <DataTable data = {users} modalTitle="User Details"  buttonLabel="Create User"/> */}
            <DataTable
            data={users}
            modalTitle="User Details"
            buttonLabel="Add New"
            onButtonClick={()=>{openRegisterDialog();}}
            fields={[
              { name: 'username', label: 'Username', type: 'text' },
              { name: 'password', label: 'Password', type: 'text' },
              { name: 'type', label: 'Type', type: 'select', options: USER_TYPES},
            ]}>
            </DataTable>
            <Dialog open={buttonClicked} onClose={()=>{closeRegisterDialog();}}>
                <DialogTitle>{"Add a New User"}</DialogTitle>
                <DialogContent>
                    <Typography>
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
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>{closeRegisterDialog();}} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </Container>
        <Footer/>
        </Box>

    )

}