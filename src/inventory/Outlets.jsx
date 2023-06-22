import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { IoMdArrowRoundBack } from 'react-icons/io';
import axios from 'axios';
import { baseURL } from '../utils/constant';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useLocation } from 'react-router-dom';


const Outlets = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const bus_id = searchParams.get('bus_id');
    const [outletName, setOutletName] = useState('');
    const [OutletLocation, setOutletLocation] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        //Validations
        const validationErrors = {};
        if (!outletName) {
            validationErrors.outletName = 'Outlet name is required';
        }
        if (!location) {
            validationErrors.location = 'Location is required';
        }

        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, submit data to the server
            const outletData = {
                ownerID: bus_id,
                OutletLocation,
                outletName
            }
            try {
                await axios.post(`${baseURL}/addOutlet`, outletData)
                    .then((response) => {
                        if (response.data.status === "ok") {

                            setTimeout(() => {
                                setLoading(false);
                            }, 2000);

                        } else {
                            console.log(response.data);
                            setLoading(false);
                        }
                    });
                setErrors({});
            }
            catch (e) {
                if (e.code === "ERR_NETWORK") {
                    console.log('It seems you are offline');
                }
                setLoading(false);
            }
        } else {
            // Form is invalid, update errors state
            setErrors(validationErrors);
            setLoading(false);
        }
    }
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
                <Box sx={{ width: '100%' }}>
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
                <form onSubmit={handleSubmit}>
                    <div className="inputelement">
                        <label htmlFor="Outlet Name">Outlet Name</label>
                        <input type="text" placeholder='Main' value={outletName} onChange={(e) => { setOutletName(e.target.value) }} />
                        {errors.outletName && <span className="error">{errors.outletName}</span>}
                    </div>
                    <div className="inputelement">
                        <label htmlFor="Location">Location</label>
                        <input type="Search" placeholder='Nairobi, Kenya' value={OutletLocation} onChange={(e) => { setOutletLocation(e.target.value) }} />
                        {errors.location && <span className="error">{errors.location}</span>}
                    </div>
                    <div className="button">
                        <button type='submit'> {loading ? <Loader /> : 'Save'}</button>
                    </div>
                </form>
            </div>
        </Section>
    )
}

export default Outlets

// Keyframe animation for loader
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${rotate} 1s linear infinite;
  margin-left: 45%;
`;

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