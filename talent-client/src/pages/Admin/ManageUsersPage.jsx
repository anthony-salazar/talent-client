import React from "react";
import {Container, Typography, Link, Box} from '@mui/material';
import RouteConstants from "../../routeConstants";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DataTable from "../../components/DataTable";
import users from "../../data/users.json";
import { USER_TYPES } from '../../userTypes';
export default function ManageUsersPage(props) {
    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'username', headerName: 'Username', width: 150 },
        { field: 'password', headerName: 'Password', width: 150 },
    ];
    return (
        <Box sx = {{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <Header user={props.user}/>
            <Container  sx = {{flex: '1 0 auto'}}>

            <Typography variant = 'h3' align = 'center'>Manage Users Page </Typography>
            {/* <DataTable data = {users} modalTitle="User Details"  buttonLabel="Create User"/> */}
            <DataTable
            data={users}
            modalTitle="User Details"
            buttonLabel="Add New"
            fields={[
              { name: 'username', label: 'Username', type: 'text' },
              { name: 'password', label: 'Password', type: 'text' },
              { name: 'type', label: 'Type', type: 'select', options: USER_TYPES},
            ]}
            cols={columns}>
                
            </DataTable>
        </Container>
        <Footer/>
        </Box>

    )

}