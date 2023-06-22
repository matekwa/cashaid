import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import business from '../assets/business.jpg';
import outlet from '../assets/outlet.jpg';
import product from '../assets/product.jpg';
import receipt from '../assets/receipt.jpg';
import users from '../assets/users.jpg';
import done from '../assets/done.jpg';
import { Link } from 'react-router-dom';
import Splashscreen from '../components/Splashscreen';
import axios from 'axios';
import { baseURL } from '../utils/constant';
import Sidebar from '../components/Sidebar';

const Index = () => {
    const [userData, setUsertData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = window.localStorage.getItem("token");

        const tokenObj = {
            token
        };

        const fetchData = async () => {
            try {
                await axios.post(`${baseURL}/details`, tokenObj).then((response) => { setUsertData(response.data.data) }).catch((error) => { console.log(error) });
                setIsLoading(false);
            } catch (error) {
                console.log('Errrrror fetching data', error);
            }
        };

        if (token) {
            fetchData();
        }
    }, []);

    return (
        <Section>
            {isLoading ? (<Splashscreen />) : (
                <>
                    <div className="heading">
                        <h1>Hello {userData.username}, Set up your Business to get started.</h1>
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
                                <Link to={{ pathname: '/add-business-name', search: '?bus_id=' + userData._id }}>
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
                                <Link to={{ pathname: '/add-outlets', search: '?bus_id=' + userData._id }}>
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
                                <Link to={{ pathname: '/user-roles', search: '?bus_id=' + userData._id }}>
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
                                <Link to={{ pathname: '/product-catalogue', search: '?bus_id=' + userData._id }}>
                                    <button>Add Product</button>
                                </Link>
                            </div>
                        </div>
                        <div className="card">
                            <div className="illustration">
                                <img src={receipt} alt='Receipt' />
                            </div>
                            <div className="description">
                                <h3>Enable receipt generation</h3>
                                <p>Enable receipts that will be generated to your customers when billing.</p>
                            </div>
                            <div className="button">
                                <Link to='receipts'>
                                    <button>Enable receipt</button>
                                </Link>
                            </div>
                        </div>
                        <div className="card">
                            <div className="illustration">
                                <img src={done} alt='Receipt' />
                            </div>
                            <div className="description">
                                <h3>I'm Ready</h3>
                                <p>I have completed all the steps successfully.</p>
                            </div>
                            <div className="button">
                                <button>Continue</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Section>
    )
}

export default Index
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