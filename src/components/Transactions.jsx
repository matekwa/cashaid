import React from 'react';
import styled from 'styled-components';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


function Transactions() {
    const rows = [
        { id: 1, col1: 'JHGKJDF', col2: 'Ronald', col3: '0713490657', col4: 'Kes 250', col5: '1/3/2023', col6: '12:23:00', col7: 'success' },
        { id: 2, col1: 'RJJJH0FD', col2: 'Joseph', col3: '0713490657', col4: 'Kes 250', col5: '1/3/2023', col6: '12:23:00', col7: 'success' },
        { id: 3, co11: '5HGHG7I', col2: 'Shaline', col3: '0713490657', col4: 'Kes 250', col5: '1/3/2023', col6: '12:23:00', col7: 'success' },
        { id: 4, col1: 'RJJ40FD', col2: 'Moses', col3: '0713490657', col4: 'Kes 250', col5: '1/3/2023', col6: '12:23:00', col7: 'success' },
    ];

    const columns = [
        { field: 'col1', headerName: 'Transaction Code', width: 200 },
        { field: 'col2', headerName: 'Name', width: 200 },
        { field: 'col3', headerName: 'Phone Number', width: 200 },
        { field: 'col4', headerName: 'Amount', width: 150 },
        { field: 'col5', headerName: 'Date', width: 200 },
        { field: 'col6', headerName: 'Time', width: 200 },
        { field: 'col7', headerName: 'Status', width: 200 },
    ];
    return (
        <Section>
            <div style={{width: '100%'}}>
                <div className="header">
                    <p>Daily Transactions</p>
                    <div className="datepicker">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker />
                        </LocalizationProvider>
                    </div>
                </div>
                <DataGrid autoHeight  rows={rows} columns={columns} slots={{ toolbar: GridToolbar }} />
            </div>
        </Section>
    );
}

export default Transactions
var Section = styled.section`

padding: 2rem;
margin-left: 5vw;
background-color: #F5F5FD;

.header{
    margin: 10px 0;
    display: flex;
    justify-content: space-between;

    p{
        font-weight: bold;
        color: gray;
    }
}

`;