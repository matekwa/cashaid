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
                <div className='logincard'>
                    <form>
                        <h1>Sign in</h1>
                        <div className='inputelement'>
                            <label>Email</label>
                            <input  type="text" value='kashaid@gmail.com' />
                        </div>
                        <div className='inputelement'>
                            <label>Password</label>
                            <input  type="password" autoFocus />
                        </div>
                        <div>
                            {error ? <p className='error'>Error</p> : ''}
                        </div>
                        <div className='rememberme'>
                            <p>Forgot Password</p>
                        </div>
                        <div className = 'submitbutton'>
                            <button>Sign In &nbsp;<IoMdArrowRoundForward /> </button>
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
            color: yellow;
        }
        .logincard{
            position: absolute;
            display:flex;
            flex-direction:column;
            align-items: center;
            justify-content: center;
            padding: 4px;
            top: 25%;
            left: 25%;
            right: 25%;
        }
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
            .inputelement{
                display: flex;
                flex-direction: column;
                padding: 8px 0;
                font-weight: bold;

                label{
                    color: #0C2340;
                }
                input{
                    border-radius: 5px;
                    margin-top: 2px;
                    padding: 18px 15px;
                    outline: 0;
                    border: 0;
                    background: #eaeaea;
                }
            }
            .error{
                color: red;
                width: 100%;
                padding: 10px 5px;
            }
            .rememberme{
                display: flex;
                justify-content: space-between;
                margin: 5px 0;
                color: #0C2340;
            }
            .submitbutton{
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

`;