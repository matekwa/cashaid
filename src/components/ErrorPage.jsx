import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'


const ErrorPage = () => {
  return (
    <Section>
        <p>404 ERROR: Page not found</p>
        <Link to='./home'>
            Go back
        </Link>
    </Section>
  )
}

export default ErrorPage
const Section = styled.section`
    heigt: 100vh;
    width: 100%;
    background: #F5F5FD;
    color: black;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
;