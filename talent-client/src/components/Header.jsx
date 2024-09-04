import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import ProfileComponent from "./ProfileComponent";
import RouteConstants from '../routeConstants';
import { useNavigate } from 'react-router-dom';

export default function Header(props) {
    console.log(props.user)
    console.log(RouteConstants)
    const [loggedIn, setLoggedIn] = useState(false)
    const navigate = useNavigate()
    const navOptions = ["Home", "JobSearch"]
    const onNavClick = (id) => {
        navigate(RouteConstants[id])
    }
    useEffect(() => {if (props.user.username && props.user.type){
        setLoggedIn(true)
    } else {
        setLoggedIn(false)
    }}, [props.user])
    return(
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" color="inherit" component="div">
                    Talent App
                </Typography>
                <Box className="Nav-buttons">
                    {navOptions.map((page) => (
                        <Button onClick={(event) => onNavClick(event.target.id)} id={page} sx={{color: 'white'}}>{page}</Button>
                    ))}
                    
                </Box>
                <Typography variant="h6" color="inherit" component="div">
                        {loggedIn ? props.user.username : "Guest"}
                </Typography>
                    {(loggedIn) ? (<ProfileComponent setLoggedIn={setLoggedIn} initial={props.user.username[0]}/>) : (
                        <div>
                            <Button sx={{color: 'white'}} onClick={() => onNavClick("Register")}>Register</Button>
                            <Button sx={{color: 'white'}} onClick={() => {onNavClick("Login")}}>Log In</Button>
                        </div>
                        )
                    }
            </Toolbar>
            
        
        </AppBar>
    )
}