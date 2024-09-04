import React, {useState} from "react";
import {TextField, Button, Container, Typography, Alert, FormControl, createTheme} from '@mui/material';
import { loginUser } from "../../api/authApi";
import { ErrorOutline } from "@mui/icons-material";
import { Route, useNavigate } from "react-router-dom";
import RouteConstants from "../../routeConstants";

export default function LoginPage(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isVisible, setVisible] = useState(false);
    const navigate = useNavigate();

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
        
        let user = await loginUser({username, password}, setVisible);
        if (user) {
            props.setUserType(user.type)
            props.setUsername(user.name)
            switch (user.type) {
                case 'Administrator':
                    navigate(RouteConstants.AdminDashboard)
                    break;
                case 'Hiring_Manager':
                    navigate(RouteConstants.ManagerDashboard)
                    break;
                case 'Candidate':
                    navigate(RouteConstants.CandidateDashboard)
                    break;
                default:
                    navigate('/')
                    break;
            }
        }
        console.log("USER SUBMIT: ", user)
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
            <FormControl>
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
                <Button type="submit" variant="contained" sx={{backgroundColor: '#52A447'}} onClick={(e) => handleSubmit(e)}>Login</Button>
                <Alert sx={{marginTop: '1vh', visibility: (isVisible) ? 'visible' : 'collapse'}} icon={<ErrorOutline/>} severity='error'>Login failed. Try again.</Alert>
            </FormControl>
        </Container>

    )
}