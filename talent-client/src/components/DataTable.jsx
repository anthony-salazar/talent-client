import React, { useState, useEffect } from 'react';
import {DataGrid} from '@mui/x-data-grid';
import { Container, Box , Typography, Dialog, DialogActions, DialogContent, Button, TextField, DialogTitle } from '@mui/material';


const DataTable = ({data, modalTitle, buttonLabel}) => {
    const [cols, setCols] = useState([]);
    const [rows, setRows] = useState([]);

    const [selectedRow, setSelectedRow] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const [editableRow, setEditableRow] = useState({});

    useEffect(() => {
        const generatedCols = Object.keys(data[0]).map((key) => ({
            field:key,
            headerName: key.charAt(0).toUpperCase() + key.slice(1),
            width: 150,
        }));
        console.log(generatedCols);
        setCols(generatedCols);
        setRows(data);
    }, [data]);

    const handleRowClick = (params) => {
        setSelectedRow(params.row);
        setEditableRow({...params.row});
        setOpenModal(true);
    }

    const handleClose = () => {
        setOpenModal(false);
    }

    const handleSave = () => {
        console.log("Save button is clicked");
        console.log(editableRow);
    }

    const handleDelete = () => {
        console.log("Delete button clicked");
        setOpenModal(false);
    }

    const handleFieldChange = (e, field) => {
        setEditableRow({
            ...editableRow,
            [field]: e.target.value
        });
    }

     
    return (
        <Container>
            <Box sx={{height: 400, width: '100%'}}>
                <Box sx={{display: 'flex', justifyContent: 'flex-end', mb: 2}}>
                    {buttonLabel && (
                          <Button
                          variant='contained'
                          color="primary"
  
                      >
                          {buttonLabel}
                      </Button>

                    )}
                </Box>
                <DataGrid
                    rows = {rows}
                    columns = {cols}
                    pageSize={5}
                    rowsPerPage={[10]}
                    disableSelectionOnClick
                    onRowClick={handleRowClick}
                />
            </Box>

            <Dialog open={openModal} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle>{modalTitle}</DialogTitle>
                <DialogContent>
                    {selectedRow && Object.keys(selectedRow).map((key) => (
                        <TextField
                            key={key}
                            label={key.charAt(0).toUpperCase() + key.slice(1)}
                            value={editableRow[key] || ''}
                            onChange={(e) => handleFieldChange(e, key)}
                            fullWidth
                            margin="dense"
                            multiline
                            rows={2}
                            sx={{marginBottom: 2}}
                        />

                    ))}
                </DialogContent>
                <DialogActions>
                        <Button onClick={handleSave} color='primary'>
                            Save
                        </Button>
                        <Button onClick={handleClose} color='secondary'>
                            Cancel
                        </Button>
                        <Button onClick={handleDelete} color='secondary'>
                                Delete
                        </Button>
                  
                </DialogActions>

            </Dialog>

        </Container>
    );
};

export default DataTable;