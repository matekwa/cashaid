import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsCreditCard2Front } from "react-icons/bs";
import { AiOutlineTrophy } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import { AiOutlineDotChart } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";


function Sidebar() {
    const [currentLink, setCurrentLink] = useState(1);
    return (
        <Section>
            <div className="top">
                    <div className="brand">
                        <h3>Kashaid</h3>
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
                                <Link to="transactions">
                                    <AiOutlineFileText />
                                </Link>
                            </li>
                            <li
                            className={currentLink === 4 ? "active" : "none"}
                            onClick={() => setCurrentLink(4)}
                            >
                                <a href="#" className="noti">
                                    <BsCreditCard2Front />
                                    <span>2</span>
                                </a>
                            </li>
                            <li
                            className={currentLink === 5 ? "active" : "none"}
                            onClick={() => setCurrentLink(5)}
                            >
                                <a href="#">
                                    <AiOutlineTrophy />
                                    
                                </a>
                            </li>
                            <li
                            className={currentLink === 6 ? "active" : "none"}
                            onClick={() => setCurrentLink(6)}
                            >
                                <a href="#">
                                    <AiOutlineDotChart />
                                    
                                </a>
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
        gap: 1.3rem 0;
        .color1{
            color: red;
        }
        .color2{
            color: yellow;
        }
        .color3{
            color: green;
        }
        svg {
            margin: 0 2px;
            font-size: 0.8rem;
            
        }
       
    }
    .links {
       
        ul {
          
            margin-bottom: 3rem;
            .active {
                border-right: 0.2rem solid black;   
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
                    }
                }
               
            }
           
        }
    }
}


`
;