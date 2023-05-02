import React from 'react'
import styled from 'styled-components'
import business from '../assets/business.jpg';
import outlet from '../assets/outlet.jpg';
import product from '../assets/product.jpg';
import receipt from '../assets/receipt.jpg';
import users from '../assets/users.jpg';
import { MdOutlineAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <Section>
            <div className="heading">
                <h1>Hello Ronald, Set up your Business to get started.</h1>
                <p>Just follow our lead</p>
            </div>
            <div className="grid">
                <div className="card">
                    <div className="illustration">
                        <img src={business} alt='A shop' />
                    </div>
                    <div className="description">
                        <h3>Business name</h3>
                        <p>Add a name for your business to easily identify you from other businesses.</p>
                    </div>
                    <div className="button">
                        <Link to='add-business-name'>
                            <button>Add Shop</button>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="illustration">
                        <img src={outlet} alt='An outlet' />
                    </div>
                    <div className="description">
                        <h3>Add Outlets</h3>
                        <p>Customize settings for all your outlets to simplify checkout process. </p>
                    </div>
                    <div className="button">
                        <Link to='add-outlets'>
                            <button>Add Outlet</button>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="illustration">
                        <img src={users} alt='Users' />
                    </div>
                    <div className="description">
                        <h3>Set up your users and their roles</h3>
                        <p>Create user accounts and manage what your users can see and allowed to do.</p>
                    </div>
                    <div className="button">
                        <Link to='user-roles'>
                            <button>Add user</button>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="illustration">
                        <img src={product} alt='Product catalog' />
                    </div>
                    <div className="description">
                        <h3>Add your product catalog</h3>
                        <p>Build your product catalogue so that you can manage your stock seamleslly.</p>
                    </div>
                    <div className="button">
                        <Link to='product-catalogue'>
                            <button>Add Product</button>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="illustration">
                        <img src={receipt} alt='Receipt' />
                    </div>
                    <div className="description">
                        <h3>Customize your receipt templates</h3>
                        <p>Choose the look and feel of you receipts generated to your customers.</p>
                    </div>
                    <div className="button">
                        <button>Customize receipt <MdOutlineAdd /></button>
                    </div>
                </div>
                <div className="card">
                    <div className="illustration">
                        <img src={receipt} alt='Receipt' />
                    </div>
                    <div className="description">
                        <h3>Customize your receipt templates</h3>
                        <p>Choose the look and feel of you receipts generated to your customers.</p>
                    </div>
                    <div className="button">
                        <button>I'm Ready</button>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default index
const Section = styled.section`

    margin-left: 5vw;
    margin-right: 14px;
    padding: 2rem;
    background-color: #F5F5FD;
    
    .heading{
        width: 100%;
        padding: 2rem 5rem;
        border: 1px solid white;
        margin-bottom: 10px;
        background: #0C2340;
        text-align: center;

        h1{
            color: white;
        }
        p{
            color: white;
            margin: 10px 0;
            font-size: 20px;
        }
    }
    .grid{
        max-width: 100%;
        border: 1px solid white;
        padding: 2rem;
        display: grid;
        gap: 5rem;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);

        .card{
            background: white;
            color: black;
            padding: 2px;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            position: relative;
            height: 400px;
            

            .illustration{
                img{
                    width: 100%;
                    height:220px;
                }
            }
            .description{
                padding: 5px 10px;

                h3{
                    margin: 3px 0;
                }
            }

            button{
                dispay: block;
                width: 100%;
                color: white;
                background: #0C2340;
                border: none;
                position: absolute;
                padding: 12px;
                bottom: 0;
                cursor: pointer;
            }
        }
    }
`
    ;