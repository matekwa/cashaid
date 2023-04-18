import React from 'react';
import styled from 'styled-components';
import {IoMdArrowRoundBack} from 'react-icons/io';

const AddShop = () => {
  return (
    <Section>
        <div className='heading'>
            <div className="back">
                <IoMdArrowRoundBack />
            </div>
            <div className="title">
                <h2>Add shop name</h2>
            </div>
        </div>
        <div className="box-a">
            <p>A shop name or business name helps easily identify your business from other businesses. Additinally, the name is used to create a sub-domain for your business.</p>
        </div>
        <div className='box-b'>
            <form action="">
                <div className="input-element">
                    <input type="text" autoFocus />
                </div>
                <div className='button'>
                    <button>Save</button>
                </div>
            </form>
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
        background-color: #F5F5FD;
        padding: 4rem;
        display: flex;
        

        .back{
            margin: 0 10px; 
            padding: 5px;
            left: 0;
        }
        .title{
            text-align: center;
            color: black
        }
    }
    .box-a{
        background-color: #F5F5FD;
        margin:5px 0;
        padding: 5rem;
    }
    .box-b{
        background: white;
        color: black;
        margin: 3px 0;

        form{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 5rem;

            .input-element{

                input{
                    outline: none;
                    padding: 5px;
                    font-size: 15px;
                    color: black;
                    border: none;
                    border-radius: 5px;
                }
            }
            .button{

                button{
                    dispay: block;
                    color: white;
                    background: #0C2340;
                    border: none;
                    padding: 5px;
                }
            }
        }
    }
`
;