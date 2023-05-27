import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi'
import Footer from '../components/Footer';

const Main = () => {
    return (
        <Section>
            <div className="navbar">
                <h3>Loyal Customers</h3>
            </div>
            <div className='search-box'>
                <div className="search-bar">
                    <BiSearch />
                    <input type="text" placeholder="Search transaction" />
                </div>
                <button>Search</button>
            </div>
            <div className="data-grid">

            </div>
            <Footer />
        </Section>
    )
}

export default Main
const Section = styled.section`
    margin-left: 5vw;
    margin-right: 14px;
    padding: 2rem;
    min-height: 100vh;
    background-color: #F5F5FD;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .navbar{
        p{
            color: black;
            font-size: 20px;
            font-weight: bold;
            margin-left: 10px;
        }
    }
    .search-box{
        width: 100%;
        padding: .5rem;
        margin-top: 5rem;
        display: flex;
        flex-direction: row;

        .search-bar {
            background-color: white;
            display: flex;
            align-items: center;
            gap: 1rem;
            padding-left: 1rem;
            border-radius: 5px 0 0 5px;
            width: 90%;
            border: 1px solid #0C2340;
            svg{
                color: grey;
                font-size: 20px;
            }
            input{
                background-color: transparent;
                border: none;
                color: grey;
                width: 80%;
                font-size: 16px;
                padding: 5px;

                &:focus{
                    outline: none;
                }
                &::placeholder {
                    color: grey;
                }
            }
        }
        button{
                color: white;
                background: #0C2340;
                border: none;
                outline: none;
                font-size: 20px;
                padding: 1rem 2rem;
                border-radius: 0 10px 10px 0;
                cursor: pointer;
                transition: background-color 0.4s ease;
                align-item: flex-end;
            }
            button:hover{
                background: black;
            }
    }
`
    ;