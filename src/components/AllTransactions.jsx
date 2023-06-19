import React from 'react'
import Transactions from './Transactions'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const AllTransactions = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const dailyTransactions = JSON.parse(searchParams.get('dailyTransactions'));
    return (
        <div>
            <Sidebar />
            <Section>
                <div className="header">Transactions History</div>
                <Transactions data={dailyTransactions} />
            </Section>
        </div>
    )
}

export default AllTransactions
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
        color: black;
        font-weight: bold;
    }
}

`;