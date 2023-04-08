import React from 'react'
import styled from 'styled-components'
import { FcNegativeDynamic } from "react-icons/fc";
import { AiOutlineMore } from "react-icons/ai";
import { FcPositiveDynamic } from "react-icons/fc";
import { GiMoneyStack } from "react-icons/gi";
import { GiPayMoney } from 'react-icons/gi'

function Analytic() {
    return (
        <Section>
            <div className="analytic ">
                <div className="design">
                    <div className="logo">
                        <GiMoneyStack />
                    </div>
                    <div className="action">
                    <AiOutlineMore />
                    </div>
                </div>
                <div className="transfer">
                    <h6>Total Amount</h6>
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
                    <div className="action">
                    <AiOutlineMore />
                    </div>
                </div>
                <div className="transfer">
                    <h6>Today's Expense</h6>
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
                    <div className="action">
                    <AiOutlineMore />
                    </div>
                </div>
                <div className="transfer">
                    <h6>Net Profit </h6>
                </div>
                <div className="money">
                    <h5>KES 500</h5>
                </div>
            </div>
            <div className="analytic ">
                <div className="design">
                    <div className="logo">
                        <FcNegativeDynamic />
                    </div>
                    <div className="action">
                    <AiOutlineMore />
                    </div>
                </div>
                <div className="transfer">
                    <h6>Net Loss</h6>
                </div>
                <div className="money">
                    <h5>KES 0</h5>
                </div>
            </div>
         
          
         
           
        </Section>
    )
}

export default Analytic
const Section = styled.section `
    display: flex;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    margin: 0 60px;
    .analytic {
        justify-content: space-between;
        padding: 1rem 2rem 1rem 2rem;
        border-radius: 1rem;
        color: black;
        background-color: white;
        justify-content: space-evenly;
        align-items: center;
        transition: 0.5s ease-in-out;
        width: 170px;
       
        .design{
            display: flex;
            align-items: center;
            
            .logo {
                background-color: white;
                display: flex;
                justify-content: center;
                align-items: center;
               
                svg {
                    font-size: 2rem;
                }
            }
            .action {
                margin-left: 80px;
               svg{
                font-size: 1.5rem;
               }
            }

        }
        .transfer {
            margin-top: 20px;
            color: grey
        }
        .money {
            margin-top: 20px;  
        }
    }
`;