import React from 'react';
import styled from 'styled-components';
import {IoMdArrowRoundBack} from 'react-icons/io';
import { Link } from 'react-router-dom';

const AddShop = () => {
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
            <form action="">
                <div className="input-element">
                    <input type="text" autoFocus />
                    <p>example.cashaid.com</p>
                </div>
                <div className='button'>
                    <button>Save</button>
                </div>
            </form>
        </div>
        <div className="box-c">
            <div className='feedback'>
                <h2>comeback.cashaid.com is OK</h2>
            </div>
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
                    font-familly: 'serif';
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
                    }
            }
            .button{

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
                button:hover{
                    background: 
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