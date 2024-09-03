import React, { useState, useEffect } from 'react';
import {DataGrid} from '@mui/x-data-grid';
import { Container, Box , Typography } from '@mui/material';


const DataTable = ({data}) => {
    const [cols, setCols] = useState([]);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const generatedCols = Object.keys(data[0]).map((key) => ({
            field:key,
            headerName: key.charAt(0).toUpperCase() + key.slice(1),
            width: 150,
        }));
        console.log(generatedCols);
        setCols(generatedCols);
        setRows(data);
    }, []);

     
    return (
        <Box sx={{height: 400, width: '100%'}}>
        <DataGrid
            rows = {rows}
            columns = {cols}
            pageSize={5}
            rowsPerPage={[10]}
            disaableSelectionOnClick
        />
        </Box>
    );
};

export default DataTable;