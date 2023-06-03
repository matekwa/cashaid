import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Analytic from './Analytic';
import Balance from './Balance';
import History from './History';
import Footer from './Footer';
import axios from 'axios';
import { baseURL } from '../utils/constant';

function Dashboard() {
    const [userData, setUserData] = useState({});
    try {
        axios.post(`${baseURL}/details`, window.localStorage.getItem('token'))
            .then((res) => {
                res.json();
            }).then((data) => {
                setUserData({ "userDetails": data });
            });
    }
    catch (e) {
        console.log(e);
    }
    return (
        <Section>
            <div className="grid">
                <Navbar />
                <Analytic />
                <Balance />
                <History />
                <Footer />
            </div>
        </Section>
    );
}

export default Dashboard
const Section = styled.section`
margin-left: 5vw;
margin-right: 14px;
padding: 2rem;
height: 60rem;
background-color: #F5F5FD;
.grid{ 
    margin-top: 0.5rem;
    z-index: 2;
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

`;
