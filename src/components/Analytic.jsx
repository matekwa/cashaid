import React from 'react'
import styled from 'styled-components'
import { GrTransaction } from "react-icons/gr";
import { FcPositiveDynamic } from "react-icons/fc";
import { GiReceiveMoney } from "react-icons/gi";
import { GiPayMoney } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function Analytic() {
    return (
        <Section>
            <div className="analytic ">
                <div className="design">
                    <div className="logo">
                        <GiReceiveMoney />
                    </div>
                </div>
                <div className="transfer">
                    <h6>Revenue</h6>
                </div>
                <div className="money">
                    <h5>KES 12,000</h5>
                </div>
            </div>
            <div className="analytic ">
                <div className="design">
                    <div className="logo">
                        <GiPayMoney />
                    </div>
                </div>
                <div className="transfer">
                    <h6>Expense</h6>
                </div>
                <div className="money">
                    <h5>KES 1,200</h5>
                </div>
            </div>
            <div className="analytic ">
                <div className="design">
                    <div className="logo">
                        <FcPositiveDynamic />
                    </div>
                </div>
                <div className="transfer">
                    <h6>Profit Margin</h6>
                </div>
                <div className="money">
                    <h5>KES 500</h5>
                </div>
            </div>
            <div className="analytic ">
                <Link to='transactions' className='link'>
                    <div className="design">
                        <div className="logo">
                            <GrTransaction />
                        </div>
                    </div>
                    <div className="transfer">
                        <h6>Transactions</h6>
                    </div>
                    <div className="money">
                        <h5>5</h5>
                    </div>
                </Link>
            </div>




        </Section>
    )
}

export default Analytic
const Section = styled.section`

    display: flex;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    margin: 0 50px;
    .analytic {
        justify-content: space-between;
        padding: 1rem 2rem 1rem 2rem;
        border-radius: 1rem;
        color: black;
        background-color: white;
        justify-content: space-evenly;
        align-items: center;
        transition: 0.5s ease-in-out;
        width: 200px;
        
        .link{
            text-decoration: none;
        }
       
        .design{
            .logo {
                background-color: white;
                display: flex;
                justify-content: center;
                align-items: center;
               
                svg {
                    font-size: 3rem;
                }
            }
        }
        .transfer {
            text-align: center;
            margin-top: 20px;
            color: black;
            font-size: 18px;
            text-decoration: none;
        }
        .money {
            margin-top: 20px;  
            font-size: 22px;
            text-align: center;
            text-decoration: none;
        }
    }
`;