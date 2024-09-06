import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import ProfileComponent from "./ProfileComponent";
import RouteConstants from '../routeConstants';
import { useNavigate } from 'react-router-dom';
import userNavs from '../userNavs';

export default function Header(props) {
    const [localType, setLocalType] = useState((!props.user.type) ? 'Guest' : props.user.type)
    console.log(userNavs[localType])
    const [loggedIn, setLoggedIn] = useState(false)
    const navigate = useNavigate()
    const navOptions = Object.keys(userNavs[localType])
    const onNavClick = (id) => {
        if (id === 'My Postings') {
            navigate(userNavs[localType][id] + props.specificUser.id)
        } else  {
            navigate(userNavs[localType][id])
        }
    }
    useEffect(() => {if (props.user.username && props.user.type){
            setLoggedIn(true)
        }
        if (props.user.type) {
            setLocalType(props.user.type)
        }
    }, [props.user])
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
                    {(loggedIn) ? (<ProfileComponent setLoggedIn={setLoggedIn} initial={props.user.username[0]} logOut={props.logOut}/>) : (
                        <div>
                            <Button sx={{color: 'white'}} onClick={() => navigate(RouteConstants.Register)}>Register</Button>
                            <Button sx={{color: 'white'}} onClick={() => {navigate(RouteConstants.Login)}}>Log In</Button>
                        </div>
                        )
                    }
            </Toolbar>
            
        
        </AppBar>
    )
}