import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineScan } from 'react-icons/ai';

const Products = () => {

    useEffect(()=> {
        
    })
    return (
        <Section>
            <div className="search">
                <BiSearch />
                <input type="text" placeholder="Search item" />
                <AiOutlineScan />
            </div>
            <div className="products">
                <div className='item'>
                    <button>Breakfast</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Dinner & Breakfast</button>
                </div>
                <div className='item'>
                    <button>Drinks</button>
                </div>
                <div className='item'>
                    <button>Chrome</button>
                </div>
                <div className='item'>
                    <button>Chrome</button>
                </div>
                <div className='item'>
                    <button>Chrome</button>
                </div>
                <div className='item'>
                    <button>Chrome</button>
                </div>
                <div className='item'>
                    <button>Chrome</button>
                </div>
                <div className='item'>
                    <button>Chrome</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
                <div className='item'>
                    <button>Lunch</button>
                </div>
            </div>
        </Section>
    )
}

export default Products
const Section = styled.section`
background: white;
padding: 1rem;

.search {
    background-color: white;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: .8rem 1rem .8rem .8rem;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    
    svg{
        color: grey;
        font-size: 25px;
        font-weight; bold;
    }
    input{
        background-color: transparent;
        border: none;
        color: grey;
        font-size: 16px;
        width: 100%;
        &:focus{
            outline: none;
        }
        &::placeholder {
            color: grey;
            }
        }
}

    .products{
        width: 100px;
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 10px;


        .item{
            button{
                width: 9rem;
                height: 8rem;
                color: black;
                background: #F5F5FD;
                border: none;
                outline: none;
                font-size: 20px;
                padding: 1rem;
                border-radius: 4px;
                cursor: pointer;
                transition: background-color 0.4s ease;
            }
            button:hover{
                background: #0C2340;
                color: white;
            }
        }
    }
`
    ;