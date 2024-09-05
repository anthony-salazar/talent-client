import {React, useEffect, useState} from "react";
import {Container, Typography, Link, Box} from '@mui/material';
import RouteConstants from "../../routeConstants";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DataTable from "../../components/DataTable";
// import users from "../../data/users.json";
import { USER_TYPES } from '../../userTypes';
import axios from "axios";
export default function ManageUsersPage(props) {
    const [users, setUsers] = useState([]);
    const [openModal, setOpenModal] = useState(false);   


    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch("http://localhost:8080/users");
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json(); // Parse response data
            console.log("resp", JSON.stringify(data));
            setUsers(data); // Update state with fetched data
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        };
    
        fetchUsers();
      }, [users]); // Empty array to run effect only once on component mount

    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'username', headerName: 'Username', width: 150 },
        { field: 'password', headerName: 'Password', width: 150 },
        { field: 'type', headerName: 'Type', width: 150}
    ];
    return (
        <Box sx = {{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <Header user={props.user}/>
            <Container  sx = {{flex: '1 0 auto'}}>

            <Typography variant = 'h3' align = 'center'>Manage Users Page </Typography>
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