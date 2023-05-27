import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function AddCard() {
    return (
        <Section>
            <Link to='link-card'>
                <div className="card">
                    <p>Link card</p>
                    <AiOutlinePlus />
                </div>
            </Link>
        </Section>
    )
}
export default AddCard
const Section = styled.section`
text-decoration: none;
.card {
    height: 10rem;
    padding: 0.8rem 0.8rem 0.8rem 0.8rem;
    border-radius: 1rem;
    color: grey;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem .5rem;
    transition: 0.5s ease-in-out;
    border: 1px dotted grey;
    cursor: pointer;
    
    &:hover {
        background-color: blue;
        color: white;
        svg {
            color: white;
        }
    }
}
`;