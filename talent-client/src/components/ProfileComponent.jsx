import { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

export default function ProfileComponent(props) {
    const [anchorEl, setAnchorEl] = useState(null)
    const [open, setOpen] = useState(false)
    const handleProfileClick = (event) => {
        setOpen(!open)
        setAnchorEl(event.currentTarget)
    }
    return (
        <div className=".Profile-component">
            <IconButton size="large" onClick={event => handleProfileClick(event)}>
                <AccountCircle fontSize="large"></AccountCircle>
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={() => setOpen(false)}>
                <MenuItem>Profile</MenuItem>
                <MenuItem onClick={() => props.setLoggedIn(false)}>Log Out</MenuItem>
            </Menu>
        </div>
    )
}