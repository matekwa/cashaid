import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { BiHomeAlt } from "react-icons/bi";
import { BsCreditCard2Front } from "react-icons/bs";
import { AiOutlineDotChart } from "react-icons/ai";
import { AiOutlineSchedule } from 'react-icons/ai';
import { FaAward } from 'react-icons/fa';
import { VscSettingsGear } from 'react-icons/vsc';
import { MdOutlineReceiptLong } from 'react-icons/md';


function Sidebar() {
    const [currentLink, setCurrentLink] = useState(1);
    return (
        <Section>
            <div className="top">
                <div className="brand">
                    <h3>Cashaid</h3>
                </div>
                <div className="links">
                    <ul>
                        <li
                            className={currentLink === 1 ? "active" : "none"}
                            onClick={() => setCurrentLink(1)}
                        >
                            <Link to="/">
                                <BiHomeAlt />
                            </Link>
                        </li>
                        <li
                            className={currentLink === 2 ? "active" : "none"}
                            onClick={() => setCurrentLink(2)}
                        >
                            <Link to='scheduler'>
                                <AiOutlineSchedule />
                            </Link>
                        </li>
                        <li
                            className={currentLink === 3 ? "active" : "none"}
                            onClick={() => setCurrentLink(3)}
                        >
                            <Link to='inventory-manager'>
                                < AiOutlineDotChart />
                            </Link>
                        </li>
                        <li
                            className={currentLink === 4 ? "active" : "none"}
                            onClick={() => setCurrentLink(4)}
                        >
                            <Link to='pos-terminal'>
                                < MdOutlineReceiptLong />
                            </Link>
                        </li>
                        <li
                            className={currentLink === 5 ? "active" : "none"}
                            onClick={() => setCurrentLink(5)}
                        >
                            <Link to='link-card' className="noti">
                                < BsCreditCard2Front />
                                <span>1</span>
                            </Link>
                        </li>
                        <li
                            className={currentLink === 6 ? "active" : "none"}
                            onClick={() => setCurrentLink(6)}
                        >
                            <Link to='loyal-customers'>
                                < FaAward />
                            </Link>
                        </li>
                        <li>
                            <Link to='settings' className='settings'>
                                < VscSettingsGear />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Section>
    )
}

export default Sidebar
const Section = styled.section`
position: fixed;
left: 0;
background-color: #ECECF6;
height: 100vh;
width: 6vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 2rem 0;
gap: 2rem;

  @media (max-width: 768px) {
    width: 100vw;
    flex-direction: row;
    padding: 1rem;
    gap: 0;
    height: auto;
    
    .top {
      flex-direction: row;
      justify-content: space-between;
      gap: 1rem;
      width: 100%;
      align-items: center;
      
      .brand {
        padding: 0;
      }
      
      .settings {
        position: static;
        margin-bottom: 0;
      }
    }
    
    .links {
      ul {
        display: flex;
        gap: 1rem;
        margin-bottom: 0;
        justify-content: center;
        
        li {
          margin: 0;
          border-right: none;
          
          .noti {
            margin-left: 0;
            
            span {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }


.top{
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;
    .brand {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 5px;
    }
    .settings{
        position: absolute;
        bottom: 0;
        margin-bottom: 10px;
    }
    .links {
       
        ul {
          
            margin-bottom: 3rem;
            .active {
                background: white;
                padding: 2px 0;
                margin-left: 7px;
                border-radius: 10px 0 0 10px;   
                a {
                    color: black;
                }
            }
            
            li{
                display: flex;
                justify-content: center;
               border-right: 0.2rem solid transparent;
                margin: 1rem 0;
                list-style-type: none;
                a {   
                    text-decoration: none;
                    color: grey;
                    font-size: 1.6rem;
                    gap: 0 0.4rem;;
                }
                .noti{
                    display: flex;
                    margin-left: 21px;
                    span {
                        background-color: red;
                        font-size: 0.5rem;
                        border-radius: 50%;
                        padding: 2px 5px 2px 5px;
                        color: white;
                        margin-bottom: 19px;
                        margin-top: -10px;
                    }
                }
                transition: 0.3s ease-in-out;
                &:hover{
                    a {
                        color: black;
                        transform: scale(1.1);
                    }
                }
               
            }
           
        }
    }
}
`

    ;