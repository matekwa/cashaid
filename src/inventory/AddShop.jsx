import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../utils/constant';

const AddShop = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const bus_id = searchParams.get('bus_id');
    const [businessName, setBusinessName] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [feedback, setFeedback] = useState('');

    const handleAddShop = async (e) => {
        e.preventDefault();
        setLoading(true);
        //Validations
        const validationErrors = {};
        if (!businessName) {
            validationErrors.error = 'Business is required';
        }

        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, submit data to the server

            try {
                const response = await axios.post(`${baseURL}/addShopName/${bus_id}`, { businessName });
                if (response.status === "exists") {
                    validationErrors.error = `${businessName} is taken`;
                    setErrors(validationErrors);
                    setLoading(false);
                } else if (response.data === 'ok') {
                    setFeedback(`${businessName} is Available`);
                } else {
                    console.log(response);
                }
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            }
            catch (e) {
                validationErrors.error = "Error processing, try again later, we are on it!";
                console.log(e);
                setErrors(validationErrors);
                setLoading(false);
            }
        } else {
            // Form is invalid, update errors state
            setErrors(validationErrors);
            setLoading(false);
        }
    }
    return (
        <Section>
            <div className='heading'>
                <div className="back">
                    <IoMdArrowRoundBack />
                </div>
                <div className="title">
                    <h2>Add Shop Name</h2>
                </div>
            </div>
            <div className="box-a">
                <p>A shop name or business name helps easily identify your business from other businesses.
                    Additinally, the name is used to create a sub-domain for your business e.g. <span>www.shopname.cashaid.com</span></p>
            </div>
            <div className='box-b'>
                <form onSubmit={handleAddShop}>
                    <div className="input-element">
                        <input type="text" autoFocus value={businessName} onChange={(e) => { setBusinessName(e.target.value) }} />
                        <p>{businessName}.stockyspace.com</p>
                    </div>
                    <div className='button'>
                        <button type='submit'>{loading ? <Loader /> : 'Save'}</button>
                    </div>
                </form>
            </div>
            <div className="box-c">
                {Object.keys(errors).length !== 0 ? <span className="error">{errors.error}</span> : <span className="feedback">{feedback}</span>}
                <div>
                    <Link to='inventory-manager'>
                        <button>Done</button>
                    </Link>
                </div>
            </div>
        </Section>
    )
}

export default AddShop
// Keyframe animation for loader
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
    ;
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
    margin-left: 5vw;
    margin-right: 14px;
    padding: 2rem;
    

    .heading{
        background-color: #0C2340;
        padding: 4rem;
        display: flex;
        color: white;
        widthy: 100%;
        

        .back{
            width: 20%;
        }

        .title{
            width: 80%;
            text-align: center;
        }
    }
    .box-a{
        background-color: #F5F5FD;
        margin:10px 0;
        padding: 5rem;

        p{
            font-size: 20px;

            span{
                color: gray;
            }
        }
    }
    .box-b{
        background: #F5F5FD;
        color: black;
        margin: 3px 0;

        form{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 4rem;

            .input-element{

                input{
                    outline: none;
                    padding: 10px;
                    font-size: 20px;
                    font-family: 'serif';
                    color: black;
                    border: none;
                    background: white;
                    border: 1px solid #F5F5FD;
                    border-radius: 5px;
                }
                input:hover{
                    border: 1px solid gray;
                }
                input:focus{
                    border 1 solid #0C2340;
                }
                p{
                        margin: 10px 0;
                        font-size: 17px;
                        font-weight: bold;
                    }
            }
            .button{

                button{
                    display: block;
                    color: white;
                    background: #0C2340;
                    border: 1px solid black;
                    font-size: 18px;
                    padding: .5rem 1.5rem;
                    box-shadow: 2px 2px 2px 1px #0C2340;
                    border-radius: 5px;
                    cursor: pointer;
                }
                button:hover{
                    background: black;
                }
            }
        }
    }
    .box-c{
        background: #F5F5FD;
        color: black;
        margin: 3px 0;
        padding: 4rem;
        display: flex;
        justify-content: space-between;
        width: 100%;

        .feedback{
            color: green;
            text-align: center;
            width: 80%;
        }
        .error{
            color: red;
            text-align: center;
            width: 80%;
        }
        button{
            dispay: block;
            color: white;
            background: #0C2340;
            border: 1px solid black;
            font-size: 18px;
            padding: .5rem 1.5rem;
            box-shadow: 2px 2px 2px 1px #0C2340;
            border-radius: 5px;
            cursor: pointer;
        }
    }
`
    ;