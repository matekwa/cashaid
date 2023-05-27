import React from 'react'
import styled from 'styled-components';

const Footer = () => {
    return (
        <Section>
            <p>Copyright &copy; 2023 Skyfalke Systems. All rights reserved &nbsp;&nbsp;| </p>
            <p>Help Center</p>
            <p>Privacy</p>
            <p>Security</p>
            <p>Terms</p>
        </Section>
    )
}

export default Footer
const Section = styled.section`
    background: #0C2340;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 3rem;
    width: 100%;
    margin-top: 2rem;
    bottom: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    font-size: 16px;
`
;