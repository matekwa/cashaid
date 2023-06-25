import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { IoMdArrowRoundBack } from 'react-icons/io';
import axios from 'axios';
import { baseURL } from '../utils/constant';
import { useLocation, Link } from 'react-router-dom';
import Splashscreen from '../components/Splashscreen';

const AddUser = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const bus_id = searchParams.get('bus_id');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [role, setRole] = useState('');
    const [outlet, setOutlet] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const roles = ["Owner", "Manager", "Cashier"];
    const [allOutlets, setAllOutlets] = useState([]);
    const [users, setUsers] = useState([]);

    const handleAddUser = async (e) => {
        e.preventDefault();
        setLoading(true);

        //Validations
        const validationErrors = {};
        if (!email) {
            validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email = 'Invalid email address';
        }
        if (!name) {
            validationErrors.name = 'Name is required';
        }
        if (!phoneNumber) {
            validationErrors.phone = 'Phone number is required';
        }
        if (!role) {
            validationErrors.role = 'Please choose a role';
        }
        if (!outlet) {
            validationErrors.outlet = 'Please choose an outlet';
        }
        if (!password) {
            validationErrors.password = 'Password is required';
        } else if (password.length < 6) {
            validationErrors.password = 'Password must be at least 6 characters long';
        }

        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, submit data to the server
            const employeeData = {
                email,
                name,
                password,
                outletID: outlet,
                role,
                phoneNumber,
                ownerID:bus_id
            }
            try {
                await axios.post(`${baseURL}/addEmployee`, employeeData)
                    .then((response) => {
                        if (response.data.status === "ok") {
                            console.log("success");
                            setTimeout(() => {
                                setLoading(false);
                            }, 2000);

                        } else {
                            console.log(response);
                            setLoading(false);
                        }
                    });
                setErrors({});
            }
            catch (e) {
                if (e.code === "ERR_NETWORK") {
                    console.log('It seems you are offline.');
                }
                setLoading(false);
            }
        } else {
            // Form is invalid, update errors state
            setErrors(validationErrors);
            setLoading(false);
        }
    }
    useEffect(() => {
        const fetchOutlets = async () => {
          try {
            const response = await axios.get(`${baseURL}/fetchOutlets`, { params: { ownerID: bus_id } });
            setAllOutlets(response.data.data);
            setLoading(false);  
          } catch (error) {
            setLoading(false);
            alert(error);
          }
        };
        const fetchUsers = async () => {
            try {
              const response = await axios.get(`${baseURL}/fetchUsers`, { params: { shopID: bus_id } });
              setUsers(response.data.data);
              setLoading(false);  
            } catch (error) {
              setLoading(false);
              alert(error);
            }
          };
      
        fetchOutlets();
        fetchUsers();
      }, []);
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
                {loading ? (<Splashscreen />) : (
                <>
            <div className="box-a">
                <p>Add your users and limit what they can see and control. <span><Link>Check out user roles to learn more</Link></span></p>
            </div>
            <div className='box-b'>
                <form onSubmit={handleAddUser}>
                    <h2>Add User</h2>
                    <div className='form-elements'>
                        <div className="input-element">
                            <label>Name</label>
                            <input type="text" autoFocus placeholder='John Doe' value={name} onChange={(e) => setName(e.target.value)} />
                            {errors.name && <span className="error">{errors.name}</span>}
                        </div>
                        <div className="input-element">
                            <label>Email</label>
                            <input type="email" placeholder='name@example.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <div className="input-element">
                            <label>Phone Number</label>
                            <input type="telephone" placeholder='07******' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                            {errors.phone && <span className="error">{errors.phone}</span>}
                        </div>
                        <div className="input-element">
                            <label>Outlet</label>
                            <select value={outlet} onChange={(e) => { setOutlet(e.target.value) }}>
                                {allOutlets.map((item) => {
                                    return <option key={item._id} value={item._id} >{item.outletName}</option>
                                })}
                            </select>
                            {errors.outlet && <span className="error">{errors.outlet}</span>}
                        </div>
                        <div className="input-element">
                            <label>Role</label>
                            <select value={role} onChange={(e) => setRole(e.target.value)}>
                                {roles.map((item) => {
                                    return <option key={item} value={item}>{item}</option>
                                })}
                            </select>
                            {errors.role && <span className="error">{errors.role}</span>}
                        </div>
                        <div className="input-element">
                            <label>Password</label>
                            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            {errors.password && <span className="error">{errors.password}</span>}
                        </div>
                    </div>
                    <div className='save-button'>
                        <button type='submit'> {loading ? <Loader /> : 'Save'}</button>
                    </div>
                </form>
            </div>
            <div className="box-c">
                <div className='addedUsers'>
                    <h2 className='table-heading'>Current users</h2>
                    {users.length === 0 ? (
                        <div>
                            <p>You don't have any employee for this shop</p>
                        </div>
                        ) : (
                        <table>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Phone number</th>
                            </tr>
                            </thead>
                            <tbody>
                            {users.map((user) => (
                                <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                                <td>{user.phoneNumber}</td>
                                <td>Delete</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        )}
                </div>
            </div>
            </>
        )}
        </Section>
    )
}

export default AddUser
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
                display: flex;
                flex-direction: column;
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
                .error{
                    color: red;
                    text-align: center;
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