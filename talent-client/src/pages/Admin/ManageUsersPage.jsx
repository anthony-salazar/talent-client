import React, {useState, useEffect} from "react";
import {Container, Typography, Link, Box} from '@mui/material';
import RouteConstants from "../../routeConstants";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DataTable from "../../components/DataTable";
// import users from "../../data/users.json";
import { USER_TYPES } from '../../userTypes';
import axios from "axios";
import {TextField, Button, Alert, Select, MenuItem, InputLabel, FormControl} from '@mui/material';
import { registerUser } from "../../api/authApi";
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';


export default function ManageUsersPage(props) {
    const [users, setUsers] = useState([]);
    const [openModal, setOpenModal] = useState(false);   


    useEffect(() => {
        console.log("in useeffect");
        const fetchUsers = async () => {
          try {
            const response = await fetch("http://localhost:8080/users");
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json(); // Parse response data
            console.log("resp", JSON.stringify(data));
            console.log(JSON.stringify(data))
            console.log("****************");
            console.log(JSON.stringify(users))
                if (JSON.stringify(data) !== JSON.stringify(users)) { // Simple comparison
                    setUsers(data);
                }
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        };
    
        fetchUsers();
      }, [users]); 

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userType, setUserType] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);

    const openRegisterDialog = () => {
        console.log("in opendialog");
        setButtonClicked(true);
    }

    const closeRegisterDialog = () => {
        console.log("in closedialog");
        setButtonClicked(false);
        setUsername("");
        setConfirmPassword("");
        setUserType('');
        setPassword('');
        setEmail('');
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
        onDataChange();
    };

    const onDataChange = () => {
        setUsers([]);
    }


    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'username', headerName: 'Username', width: 150 },
        { field: 'password', headerName: 'Password', width: 150 },
        { field: 'type', headerName: 'Type', width: 150}
    ];
    return (
        <Box sx = {{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <Header user={props.user} specificUser={props.specificUser} />
            <Container  sx = {{flex: '1 0 auto'}}>

            <Typography variant = 'h3' align = 'center'>Manage Users Page </Typography>
            <DataTable
            data={users}
            modalTitle="User Details"
            buttonLabel="Add New"
            onButtonClick={()=>{openRegisterDialog();}}
            onDataChange={()=>{onDataChange();}}
            fields={[
              { name: 'username', label: 'Username', type: 'text' },
              { name: 'password', label: 'Password', type: 'text' },
              { name: 'type', label: 'Type', type: 'select', options: USER_TYPES},
            ]}
            cols={columns}>
                
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