import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { BsCreditCard } from 'react-icons/bs';

const Dashboard = () => {
    return (
        <Section>
            <div className="heading">
                <BsCreditCard />
                <h1>Link Credit Card</h1>
            </div>
            <div className="card-form">
                <form action="">
                    <div className="input-element">
                        <input type="text" placeholder='Debit or credit card number' autoFocus />
                    </div>
                    <div className="input-element">
                        <select name="" id="" placeholder="Credit type">
                            <option value="">Visa</option>
                            <option value="">Mastercard</option>
                        </select>
                    </div>
                    <div className="input-element">
                        <input type="date" placeholder='Expiry date' />
                    </div>
                    <div className="input-element">
                        <input type="number" placeholder='Security code' />
                    </div>
                    <div className="submit">
                        <button>Add Card</button>
                    </div>
                </form>
            </div>
        </Section>
    )
}

export default Dashboard
const Section = styled.section`

    margin-left: 5vw;
    margin-right: 14px;
    padding: 2rem;
    background-color: #F5F5FD;
    height: 100vh;
    
    .heading{
        width: 100%;
        padding: 2rem 5rem;
        border: 1px solid white;
        margin-bottom: 10px;
        background: #0C2340;
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        svg{
            color: white;
            font-size: 30px;
        }
        h1{
            color: white;
        }
    }

    .card-form{
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        padding: 4px;
        top: 40%;
        left: 25%;
        right: 25%;
        margin-top: 5%;
        
        form{
            max-width: 400px;
            width: 100%;
            margin: 0 auto;
            padding: 25px;
            background-color: #F5F5FD;
            border-radius: 15px;
            font-familly: 'Source Sans Pro', sans-serif;
            h1{
                margin: 10px 0;
                color: #0C2340;
            }
            .input-element{
                padding: 8px 0;
                font-weight: bold;
                width: 100%;

                input, select{
                    border-radius: 5px;
                    margin-top: 2px;
                    padding: 18px 15px;
                    outline: 0;
                    border: 0;
                    background: #eaeaea;
                    width: 100%;
                }
            }
            .error{
                color: red;
                width: 100%;
                padding: 10px 5px;
            }
            .submit{
                button{ 
                    width:100%;
                    background-color: #0C2340;
                    margin: 5px auto;
                    color: white;
                    padding: 12px 0;
                    border: none;
                    font-size: 15px;
                    cursor: pointer;
                    border-radius: 10px;
                    font-weight: bold;
                    transition: .25s ease-in-out;
                }
                button: hover{
                    background: #0C2330;
                }
            }
    }

    
`
    ;