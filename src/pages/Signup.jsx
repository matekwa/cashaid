import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import background from '../assets/background.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../utils/constant';

const Signup = () => {
    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);


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
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
                window.location.href = '../auth/login';
            }
            catch (e) {
                console.log(e);
                setLoading(false);
            }
        } else {
            // Form is invalid, update errors state
            setErrors(validationErrors);
            setLoading(false);
        }
    }
    useEffect(()=>{
        document.title = 'StockySpace - Sign up';
    }, []);
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
                            <p>Have an account? <Link to='auth/login'>Log in</Link></p>
                        </div>
                        <div className='submitbutton'>
                            <button type='submit'> {loading ? <Loader /> : 'Sign Up'}</button>
                        </div>
                    </form>
                </div>
            </body>
        </Section>
    )
}

export default Signup
// Keyframe animation for loader
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${rotate} 1s linear infinite;
  margin-left: 45%;
`;
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
                    transition: background-color 0.3s ease;
                }
                button: hover{
                    background: #0C2330;
                }
            }
        }

`;