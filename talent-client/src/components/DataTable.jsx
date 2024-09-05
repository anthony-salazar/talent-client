import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container, Box, Button } from '@mui/material';
import DataForm from './DataForm';  // Adjust the import path if necessary
import axios from 'axios';

const DataTable = ({ data, modalTitle, buttonLabel, fields, cols, onDataChange, onButtonClick }) => {
    // const [cols, setCols] = useState([]);
    const [rows, setRows] = useState([]);

    const [selectedRow, setSelectedRow] = useState(null);
    const [rowIsSelected, setRowIsSelected] = useState(false);
    const [openModal, setOpenModal] = useState(false);   

    useEffect(() => {
        setRows(data);
    }, [data]);

    console.log("Hi");
    console.log(cols);

    const handleRowClick = (params) => {
        console.log("params.row:" + JSON.stringify(params.row));
        setRowIsSelected(true);
        setSelectedRow(params.row);
        console.log("selected row:" + JSON.stringify(selectedRow));
        setOpenModal(true);
    };

    const handleClose = () => {
        setRowIsSelected(false);
        setOpenModal(false);
    };

    const handleSave = async (formData) => {
        console.log("Saved data:", formData);
        // Implement save logic here
        if (modalTitle === "Application Details"){
            const res = await axios.put(
                "http://localhost:8080/applications/" + formData["id"],
                formData, {
                    headers: {
                        'Content-Type' : 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                }
            );
            console.log(res.data);
        } else if (modalTitle === "User Details"){
            const res = await axios.put(
                "http://localhost:8080/users/" + formData["id"],
                formData, {
                    headers: {
                        'Content-Type' : 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                }
            );
            console.log(res.data);
        }
        onDataChange();
        setOpenModal(false);
    };

    const handleDelete = (formData) => {
        console.log("Delete button clicked");
        console.log("Form:"  +formData);
        if (modalTitle === "Application Details"){
            const deleteApplication = async()=>{
                const response = await axios.delete("http://localhost:8080/applications/" + formData["id"]).then(res => {return res.data});
                //console.log("resp:" + JSON.stringify(response));
                //setApplications(response);
                console.log("delete response:" + response);
            };
            deleteApplication();
        } else if (modalTitle === "User Details"){
            const deleteUser = async()=>{
                const response = await axios.delete("http://localhost:8080/users/" + formData["id"]).then(res => {return res.data});
                //console.log("resp:" + JSON.stringify(response));
                //setApplications(response);
                console.log("delete response:" + response);
            };
            deleteUser();
        
        }
        // Implement delete logic here
        onDataChange();
        setOpenModal(false);
        handleClose();
    };

    return (
        <Container>
            <Box sx={{ height: 400, width: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                    {buttonLabel && (
                        <Button onClick={onButtonClick} variant='contained' color="primary">
                            {buttonLabel}
                        </Button>
                    )}
                </Box>
                <DataGrid
                    rows={rows}
                    columns={cols}
                    pageSize={5}
                    rowsPerPage={[10]}
                    disableSelectionOnClick
                    onRowClick={handleRowClick}
                />
            </Box>

            {rowIsSelected && (
                <DataForm
                    open={openModal}
                    onClose={handleClose}
                    onSave={handleSave}
                    onDelete={handleDelete}
                    data={selectedRow}
                    fields={fields}
                    modalTitle={modalTitle}
                />
            )}
        </Container>
    );
};

export default DataTable;
