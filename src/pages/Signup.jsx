import React, { useState } from 'react';
import styled from 'styled-components';
import background from '../assets/background.jpg';
import { IoMdArrowRoundForward } from 'react-icons/io';
//import Login from './Login';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../utils/constant';


const Signup = () => {
    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSignUp = async (e) => {
        e.preventDefault();

        //Validations
        const validationErrors = {};
        if (!username) {
            validationErrors.username = 'Username is required';
        }
        if (!email) {
            validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email = 'Invalid email address';
        }
        if (!password) {
            validationErrors.password = 'Password is required';
        } else if (password.length < 6) {
            validationErrors.password = 'Password must be at least 6 characters long';
        }

        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, submit data to the server
            const userData = {
                email,
                username,
                password
            }
            try {
                await axios.post(`${baseURL}/signup`, userData).then(response => console.log(response.data));
                setEmail('');
                setPassword('');
                setUsername('');
                setErrors({});
            }
            catch (e) {
                console.log(e);

            }
        } else {
            // Form is invalid, update errors state
            setErrors(validationErrors);
        }
    }
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
                    <form onSubmit={handleSignUp}>
                        <h1>New Account</h1>
                        <div className='inputelement'>
                            <label>Email</label>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='johndoe@example.com' autoFocus />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <div className='inputelement'>
                            <label>Username</label>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='johndoe' />
                            {errors.username && <span className="error">{errors.username}</span>}
                        </div>
                        <div className='inputelement'>
                            <label>Password</label>
                            <input type="password" placeholder='****' value={password} onChange={(e) => setPassword(e.target.value)} />
                            {errors.password && <span className="error">{errors.password}</span>}
                        </div>
                        <div className='rememberme'>
                            <Link to=''>
                                <p>Have an account? Sign in</p>
                            </Link>
                        </div>
                        <div className='submitbutton'>
                            <button type='submit'>Submit &nbsp;<IoMdArrowRoundForward /> </button>
                        </div>
                    </form>
                </div>
            </body>
        </Section>
    )
}

export default Signup
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
            top: 20%;
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
                .error{
                    color: red;
                    width: 100%;
                    padding: 10px 5px;
                }
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