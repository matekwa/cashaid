import React from 'react';
import styled from 'styled-components';
import { IoMdArrowRoundBack } from 'react-icons/io';

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';

import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Outlets = () => {

    //Dtagrid
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name',
            headerName: 'Name',
            width: 200,
            editable: true,
        },
        {
            field: 'location',
            headerName: 'Location',
            width: 200,
            editable: true,
        },
        {
            field: 'accountant',
            headerName: 'Accountant',
            width: 200,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            type: 'text',
            width: 200,
            editable: true,
        },
        {
            field: 'action',
            headerName: 'Action',
            type: 'text',
            width: 200,
            editable: false,
        },
    ];


    const rows = [
        { id: 1, name: 'Main', location: 'Westlands', accountant: 'Mathews', status: 'Open', action: 'delete' }
    ];


    //Select input
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const names = [
        'Ronald Matekwa',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
    ];

    function getStyles(name, personName, theme) {
        return {
            fontWeight:
                personName.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    //Multiple select
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <Section>
            <div className='heading'>
                <div className="back">
                    <IoMdArrowRoundBack />
                </div>
                <div className="title">
                    <h2>Add Business Outlets</h2>
                </div>
            </div>
            <div className="box-a">
                <p>Adding other outlets other than the main outlet helps easily manage your business activities such as stock tracking, sales monitoring, invoice generation and order taking.</p>
            </div>
            <div className="box-c">
                <p>These are your current outlet(s), add more or continue if you only have one outlet.</p>
                <Box sx={{width: '100%' }}>
                    <DataGrid
                        autoHeight
                        rows={rows}
                        columns={columns}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </Box>
            </div>
            <div className='box-b'>
                <h2> Add outlet </h2>
                <form action="">
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div className="formElement">
                            <TextField
                                id="outlet_name"
                                label="Outlate Name"
                                type="text"
                                autoComplete="current-password"
                            />
                            <TextField
                                id="filled-search"
                                label="Location"
                                type="search"
                                variant="filled"
                            />
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="demo-multiple-name-label">Accountant</InputLabel>
                                <Select
                                    labelId="demo-multiple-name-label"
                                    id="demo-multiple-name"
                                    multiple
                                    value={personName}
                                    onChange={handleChange}
                                    input={<OutlinedInput label="Name" />}
                                    MenuProps={MenuProps}
                                >
                                    {names.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                            style={getStyles(name, personName, theme)}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div className="buttons">
                            <Stack spacing={2} direction="row">
                                <Button variant="outlined">Next</Button>
                                <Button variant="contained">Save</Button>
                            </Stack>
                        </div>
                    </Box>
                    
                </form>
            </div>
        </Section>
    )
}

export default Outlets
const Section = styled.section`
    margin-left: 5vw;
    margin-right: 14px;
    padding: 2rem;
    

    .heading{
        background-color: #0C2340;
        padding: 4rem;
        display: flex;
        color: white;
        width: 100%;
        
        

        .back{
            width: 20%;
        }

        .title{
            width: 80%;
            text-align: center;
        }
    }
    .box-a{
        background-color: #F5F5FD;
        margin:10px 0;
        padding: 5rem;

        p{
            font-size: 20px;

            span{
                color: gray;
            }
        }
    }
    .box-b{
        background: #F5F5FD;
        color: black;
        margin: 3px 0;

        h2{
            padding: 2rem;
            color: blue;
        }
        form{
            .formElement{
                display: flex;
                align-items: center;
                justify-content: space- between;
                padding: 2rem;
                }
                .buttons{
                    left: 10%;
                    margin: 1rem auto;
                    width: 100%;
                }
        }
    }
    .box-c{
        background: #F5F5FD;
        color: black;
        margin: 3px 0;
        padding: 4rem;
        width: 100%;
        
        p{
            font-size: 20px;
            margin: 5px;
        }
    }
`
    ;