import React, {useState} from "react";
import {TextField, Button, Container, Typography, Alert, FormControl, createTheme} from '@mui/material';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const theme = createTheme({
        palette: {
          ochre: {
            main: '#E3D026',
            light: '#E9DB5D',
            dark: '#A29415',
            contrastText: '#242105',
          },
        },
      });

    const login = (user) => {
        setLoggedIn(true);
        setUsername(user.username);
        setUser(user);
        localStorage.setItem("user",JSON.stringify(user));
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!username || !password) {
            setError('Please enter a username and password.');
        }
        try {
            // let fullUrl = "http://localhost:3000/login";
            // let credentials = { "username": username, "password": password }
            // const response = await axios.post(fullUrl, credentials);
            // if(response.status == 200){
            //   let user = response.data;
            //   login(user);
            //   navigate("/");
            // }
            const response = await fetch('/users.json');
            const users = await response.json();

            const user = users.find(user => user.username === username && user.password === password);
            if(user) {
                login(user);
                setError('');
                Alert('login successful');
                //needs to be routed to dashboardw
            } else {
                setError('User does not exist');
            }
          } catch (error) {
            setError(error.message);
          }
    };

    return (
        <Container maxWidth="xs" className="login-container"
            sx={{backgroundColor: '#f0f0f0',
                padding: '16px',
                marginTop: '16px',
                borderRadius: '8px'
            }}
        >
            <Typography variant="h4" component="h2" gutterBottom align="center">Login</Typography>
            <FormControl onSubmit={handleSubmit}>
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
                <br></br>
                <Button type="submit" variant="contained" sx={{backgroundColor: '#52A447'}} >Login</Button>
            </FormControl>
        </Container>

    )
}