import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Analytic from './Analytic';
import Balance from './Balance';
import History from './History';
import Footer from './Footer';
import axios from 'axios';
import { baseURL } from '../utils/constant';

export const detailsContext = React.createContext(); //Context for user details that will will be passed down to child components

function Dashboard() {
    const token = sessionStorage.getItem('token');
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    const getData = async () => {
        if (isLoggedIn !== 'true') {
            window.location.href = './auth/login';
        } else {
            try {
                const res = axios.post(`${baseURL}/details`, { "token": token });
                if (res) {
                    const userData = {
                        'id': id = res.data.id,
                        'email': res.data.email,
                        'username': res.data.username,
                    };
                }
            }
            catch (e) {
                    console.log(e);
                }
            }
    }
        useEffect(() => {
            getData();
        }, []);

        return (
            <detailsContext.Provider value={userData}>
                <Section>
                    <div className="grid">
                        <Navbar />
                        <Analytic />
                        <Balance />
                        <History />
                        <Footer />
                    </div>
                </Section>
            </detailsContext.Provider>
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
