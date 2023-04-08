import React, { useState } from 'react';
import styled from 'styled-components';
import background from '../assets/background.jpg';
import { IoMdArrowRoundForward } from 'react-icons/io';


const Login = () => {
    const [error, setError] = useState(false);
    return (
        <Section>

            <div>
                <img src={background} className="imagebg" alt="Background"></img>
            </div>
            <header>
                <p>Cashaid</p>
            </header>
            <body>
                <div className='card'>
                    <div className='intro'>
                        <h1>Manage All Your Cashless Payments From One Place </h1>
                        <h3 className='py-4'>Enter your Email to get started.</h3>
                    </div>
                    <form>
                        <div className='inputelement'>
                            <input type="text" placeholder='johndoe@example.com' value='' autoFocus />
                        </div>
                        <div>
                            <button className='submitbutton'><IoMdArrowRoundForward /> </button>
                        </div>
                    </form>
                </div>
            </body>
        </Section>
    )
}

export default Login
const Section = styled.section`
        .imagebg{
            height: 100vh;
            width: 100%;
            opacity: 80%;
            overflow-y: hidden;
        }
        header{
            position: absolute;
            font-size: 25px;
            margin-left: 15px;
            font-weight: bold;
            top: 0;
            color: gold;
        }
        .card{
            position: absolute;
            display:flex;
            flex-direction:column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 4px;
            top: 30%;
            left: 25%;
            right: 25%;
        }
        .intro{
            color: gold;
        }
        form{
            display: flex;
            margin: 10px auto;
            width: 100%;
        
            
            .inputelement{
                width: 100%
            }
            input{
                background: #eaeaea;
                font-size: 20px;
                outline: 0;
                border: 1px solid #0C2340;
                padding: 18px 15px;
                width: 100%;
            }
            .submitbutton{
                background: #0C2340;
                padding: 17px 15px;
                color: gold;
                border-radius: 5px;
                border: 1px solid #F5F5FD;
                font-size: 20px;
                margin-left: 2px;
                cursor: pointer;
            }
        }

`;