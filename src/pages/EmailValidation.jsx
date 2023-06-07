import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import background from '../assets/background.jpg';
import { IoMdArrowRoundForward } from 'react-icons/io';
import axios from 'axios';
import { baseURL } from '../utils/constant';


const Login = () => {
    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState("");

    const handleClick = async (e) => {
        e.preventDefault();

        //Validations
        const validationErrors = {};
        if (!email) {
            validationErrors.loginFail = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.loginFail = 'Invalid email address';
        }
        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, submit data to the server
            const userData = {
                email
            }
            try {
                await axios.post(`${baseURL}/emailverification`, userData)
                    .then((response) => {
                        if (response.data.status === "ok") {
                            window.location.href = '../auth/login';
                        } else {
                            window.location.href = '../auth/signup';
                        }
                    });
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
    useEffect(()=> {
        document.title = 'Get started';
    });
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
                    <form action='POST'>
                        <div className='inputelement'>
                            <input type="email" placeholder='johndoe@example.com' value={email} onChange={(e) => setEmail(e.target.value)} autoFocus />
                        </div>
                        <div>
                            <button className='submitbutton' onClick={handleClick}><IoMdArrowRoundForward /> </button>
                        </div>
                    </form>
                    {errors.email && <small className="error">{email}</small>}
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

            .error{
                color: red;
                width: 100%;
                padding: 10px 5px;
            }
        }
        .intro{
            color: gold;
        }
        form{
            display: flex;
            margin: 10px auto;
            width: 100%;
            gap: .5rem;
        
            
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
              button{
              color: white;
              background: #0C2340;
              border: none;
              font-size: 20px;
              padding: 18px 5rem;
              border: 1px solid #0C2340;
              cursor: pointer;
              transition: background-color 0.3s ease;

              svg{
                font-size: 20px;
                font-weight: bold;
              }
          }
          button:hover{
              background: black;
          }
        }

`;