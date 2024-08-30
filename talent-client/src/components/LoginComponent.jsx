import { useState } from "react";
import {Typography, Button} from "@mui/material"
import ProfileComponent from "./ProfileComponent";
export default function LoginComponent(props) {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div className="Lc-wrapper">
            <div className="Login-component">
                <Typography variant="body1" style={{lineHeight: 2.25}}>{loggedIn ? "User" : "Guest"}</Typography>
                {(loggedIn) ? (<ProfileComponent setLoggedIn={setLoggedIn}/>) : ( 
                    <div>
                        <Button>Register</Button>
                        <Button onClick={() => setLoggedIn(true)}>Log In</Button>
                    </div>
                    )
                }
            </div>
        </div>
    )
}