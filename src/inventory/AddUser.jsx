import React from 'react';
import styled from 'styled-components';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const AddUser = () => {
    return (
        <Section>
            <div className='heading'>
                <div className="back">
                    <Link to='inventory-manager'>
                        <IoMdArrowRoundBack />
                    </Link>
                </div>
                <div className="title">
                    <h2>Add users and their roles</h2>
                </div>
            </div>
            <div className="box-a">
                <p>Add your users and limit what they can see and control. <span><Link>Check out user roles to learn more</Link></span></p>
            </div>
            <div className='box-b'>
                <form action="">
                    <h2>Add User</h2>
                    <div className='form-elements'>
                        <div className="input-element">
                            <label>Name</label>
                            <input type="text" autoFocus placeholder='John Doe' />
                        </div>
                        <div className="input-element">
                            <label>Email</label>
                            <input type="email" placeholder='name@example.com' />
                        </div>
                        <div className="input-element">
                            <label>Outlet</label>
                            <select>
                                <option value="main">Main</option>
                                <option value="all">All</option>
                                <option value="south-c">South-C</option>
                                <option value="westlands">Westlands</option>
                            </select>
                        </div>
                        <div className="input-element">
                            <label>Role</label>
                            <select>
                                <option value="owner">Owner</option>
                                <option value="manager">Manager</option>
                                <option value="cashier">Cashier</option>
                            </select>
                        </div>
                        <div className="input-element">
                            <label>Password</label>
                            <input type="password" placeholder='Password' />
                        </div>
                        <div className="input-element">
                            <label>Confirm Password</label>
                            <input type="password" placeholder='Confirm-Password' />
                        </div>
                    </div>
                    <div className='save-button'>
                        <button>Save</button>
                    </div>
                </form>
            </div>
            <div className="box-c">
                <div className='addedUsers'>
                    <h2 className='table-heading'>Current users</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Outlet</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Name"><Link>Ronald</Link></td>
                                <td data-label="Outlet">All</td>
                                <td data-label="Role">Owner</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Section>
    )
}

export default AddUser
const Section = styled.section`
    margin-left: 5vw;
    margin-right: 14px;
    padding: 2rem;
    

    .heading{
        background-color: #0C2340;
        padding: 3rem;
        display: flex;
        color: white;
        widthy: 100%;
        

        .back{
            width: 20%;
            svg{
                color: white;
                font-size: 20px;
            }
            svg:hover{
                transform: scale(1.5);
                font-weight: bold;
            }
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
                text-decoration: underline;
            }
        }
    }
    .box-b{
        background: #F5F5FD;
        color: black;
        margin: 3px 0;
        position: relative;
        padding: 4rem;
        width: 100%;

        form{
            h2{
                margin-bottom: 4rem;
            }
            .form-elements{
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
            }

            .input-element{
                label{
                    font-weight: bold;
                    padding: .5rem 0;
                }

                input, select{
                    outline: none;
                    padding: 10px;
                    font-size: 15px;
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
            .save-button{
                position: absolute;
                margin: 10px 4rem;
                right: 0;

                button{
                    color: white;
                    background: #0C2340;
                    border: none;
                    font-size: 18px;
                    padding: 10px 20px;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
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
        width: 100%;
        position: relative;

        .addedUsers{
            .table-heading{
                    margin-bottom: 3rem;
            }
            table {
                border: none;
                width: 100%;
                margin: 0 auto;
                margin-bottom: 20px;
            }
            
            th, td {
                text-align: left;
                padding: 8px;
            }
            td{
                background: white;
                padding: 1rem;
            }
            
            tr:nth-child(even) {
                background-color: white;
            }
            
            @media only screen and (max-width: 600px) {
                table {
                    width: 100%;
                    max-width: 400px;
                    margin: 0 auto;
                    margin-bottom: 20px;
                }
                th, td {
                    display: block;
                }
                td {
                    border: none;
                }
                td:before {
                    content: attr(data-label);
                    float: left;
                    font-weight: bold;
                }
            }
        }
    }
`
    ;