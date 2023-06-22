import React from 'react';
import styled from 'styled-components';
import Receipt from './Receipt';
import Products from './Products';
import Sidebar from '../components/Sidebar';
const Darshboard = () => {
  return (
      <Section>
        <div className='grid'>
          <Receipt />
          <Products />
        </div>
      </Section>
  )
}

export default Darshboard
const Section = styled.section`
margin-left: 5vw;
padding: 2rem;
background-color: #F5F5FD;
height: 100vh;
overflow-y: hidden;
.grid{ 
    margin-top: 0.5rem;
    z-index: 2;
    display: grid;
    grid-template-columns: 30% 70%;
    grid-gap: 20px;
}
`