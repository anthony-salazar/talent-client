import React from 'react';
import {AppBar, Toolbar, Typography} from '@mui/material';
import App from '../App';

export default function Footer() {
    return(
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="body1" color="inherit">
                    © 2024 Talent app.
                </Typography>
            </Toolbar>

        </AppBar>

    )
}