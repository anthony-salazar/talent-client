import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import LoginComponent from '../components/LoginComponent';

export default function Header() {
    return(
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" color="inherit" component="div">
                    Talent App
                </Typography>
            </Toolbar>
        <LoginComponent />
        </AppBar>
    )
}