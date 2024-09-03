import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import ProfileComponent from "./ProfileComponent";
import RouteConstants from '../routeConstants';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    console.log(RouteConstants)
    const [loggedIn, setLoggedIn] = useState(false)
    const navigate = useNavigate()
    const navOptions = Object.keys(RouteConstants).filter(page => (page !== "Register" && page !== "Login"))
    const onNavClick = (id) => {
        navigate(RouteConstants[id])
    }
    console.log("NavOptions: ", navOptions)
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
                        {loggedIn ? "FirstName LastName" : "Guest"}
                </Typography>
                    {(loggedIn) ? (<ProfileComponent setLoggedIn={setLoggedIn}/>) : (
                        <div>
                            <Button sx={{color: 'white'}} onClick={() => onNavClick("Register")}>Register</Button>
                            <Button sx={{color: 'white'}} onClick={() => {onNavClick("Lgogin")}}>Log In</Button>
                        </div>
                        )
                    }
            </Toolbar>
            
        
        </AppBar>
    )
}