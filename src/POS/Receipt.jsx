import React from 'react'
import styled from 'styled-components'
import SelectInput from './SelectInput'
import TextInput from './TextInput';
import {MdOutlinePayments} from 'react-icons/md';
import {RiDeleteBin6Line} from 'react-icons/ri';
import { FaGift } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';


const option = [
    { label: 'Walk In Customer', value: 'walk_in_customer' },
    { label: 'Ronald Matekwa', value: 'ronald' },
    { label: 'Martin Lawrence', value: 'martin lawrence' },
];

const Receipt = () => {
    const [selectedOPtion, setSelectedOption] = React.useState('');
    const handleSelectedOption = (event) => {
        setSelectedOption(event.target.value);
    }
    const [textValue, setTextValue] = React.useState(2);
    const handleQuantity = (event) => {
        setTextValue(event.target.value);
    }
    return (
        <Div>
            <div className="dropdown">
                <SelectInput options={option} value={selectedOPtion} onChange={handleSelectedOption} />
                <button><AiOutlinePlus /></button>
            </div>
            <div className="suspend-sales">
                <button className='loyalty'>< FaGift />&nbsp;Issue Loyalty Card</button>
                <button className='suspend'>Suspend Sales</button>
            </div>
            <div className="list-items">
                <table>
                    <thead>
                        <tr>
                            <th>Items</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Subtotal</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Indomie Lorem ipsum dolor sit amet.</td>
                            <td >KES 200</td>
                            <td ><TextInput value={textValue} onChange={handleQuantity} /></td>
                            <td>KES 400</td>
                            <td><RiDeleteBin6Line /></td>
                        </tr>
                        <tr>
                            <td>Soda</td>
                            <td>KES 200</td>
                            <td><TextInput value={textValue} onChange={handleQuantity} /></td>
                            <td>KES 400</td>
                            <td><RiDeleteBin6Line /></td>
                        </tr>
                        <tr>
                            <td>Biscuites</td>
                            <td >KES 200</td>
                            <td ><TextInput value={textValue} onChange={handleQuantity} /></td>
                            <td>KES 400</td>
                            <td><RiDeleteBin6Line /></td>
                        </tr>
                        <tr>
                            <td>Biscuites</td>
                            <td >KES 200</td>
                            <td ><TextInput value={textValue} onChange={handleQuantity} /></td>
                            <td>KES 400</td>
                            <td><RiDeleteBin6Line /></td>
                        </tr>
                        <tr>
                            <td>Biscuites</td>
                            <td >KES 200</td>
                            <td ><TextInput value={textValue} onChange={handleQuantity} /></td>
                            <td>KES 400</td>
                            <td><RiDeleteBin6Line /></td>
                        </tr>
                        <tr>
                            <td>Biscuites</td>
                            <td >KES 200</td>
                            <td ><TextInput value={textValue} onChange={handleQuantity} /></td>
                            <td>KES 400</td>
                            <td><RiDeleteBin6Line /></td>
                        </tr>
                        <tr>
                            <td>Biscuites</td>
                            <td >KES 200</td>
                            <td ><TextInput value={textValue} onChange={handleQuantity} /></td>
                            <td>KES 400</td>
                            <td><RiDeleteBin6Line /></td>
                        </tr>
                        <tr>
                            <td>Biscuites</td>
                            <td >KES 200</td>
                            <td ><TextInput value={textValue} onChange={handleQuantity} /></td>
                            <td>KES 400</td>
                            <td><RiDeleteBin6Line /></td>
                        </tr>
                        <tr>
                            <td>Biscuites</td>
                            <td >KES 200</td>
                            <td ><TextInput value={textValue} onChange={handleQuantity} /></td>
                            <td>KES 400</td>
                            <td><RiDeleteBin6Line /></td>
                        </tr>
                        <tr>
                            <td>Biscuites</td>
                            <td >KES 200</td>
                            <td ><TextInput value={textValue} onChange={handleQuantity} /></td>
                            <td>KES 400</td>
                            <td><RiDeleteBin6Line /></td>
                        </tr>
                        <tr>
                            <td>Beef mix</td>
                            <td >KES 200</td>
                            <td ><TextInput value={textValue} onChange={handleQuantity} /></td>
                            <td>KES 400</td>
                            <td><RiDeleteBin6Line /></td>
                        </tr>
                        <tr>
                            <td>Beef mix</td>
                            <td >KES 200</td>
                            <td ><TextInput value={textValue} onChange={handleQuantity} /></td>
                            <td>KES 400</td>
                            <td><RiDeleteBin6Line /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="overlay">
                <div className='discount'>
                    <div className="top">
                        <p>Discount&nbsp; <span>KES 0.00</span></p>
                        <p>VAT&nbsp; <span>KES 12.90</span></p>
                    </div>
                    <div className="bottom">
                        <p>KES</p>
                        <h2>23,000</h2>
                    </div>
                </div>
                <div className='payment-button'>
                    <button><MdOutlinePayments />Payment</button>
                </div>
            </div>
        </Div>
    )
}

export default Receipt
const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: relative;
    
    .dropdown{
        display: flex;
        flex-diretion: row;
        gap: 1rem;
        margin-bottom: 2rem;

        button{
            color: white;
            background: #0C2340;
            border: none;
            font-size: 16px;
            padding: 8px 15px;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        button:hover{
            background: black;
        }
    }
    .suspend-sales{
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: right;
        margin-bottom: 3rem;
        .suspend{
            color: white;
            background: gold;
            border: none;
            font-size: 16px;
            padding: 8px 15px;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .suspend:hover{
            background: yellow;
        }
        .loyalty{
            color: white;
            background: purple;
            border: none;
            font-size: 16px;
            padding: 8px 15px;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .loyalty:hover{
            background: #0C2340;
        }
    }
    .list-items{
        background: #F5F5FD;
        color: black;
        width: 100%;
        height: 60%;
        overflow-y: scroll;
        
            table {
                border: none;
                width: 100%;
                height: auto; 
                   
            }
            th, td {
                text-align: left;
                padding: 2px;
            }
            td{
                background: white;
                padding: 5px;
                text-align: left;
                font-size: 16px;
                border:none;
            }
            td:first-child{
                width: 150px;
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
        .overlay{
            position: absolute;
            background: white;
            padding: 20px;
            bottom: 0;
            width: 100%;
            height: 10rem;
            box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.75);
            display: grid;
            grid-template-columns: 70% 30%;

            .discount{
                display: flex;
                flex-direction: column;
                gap: .5rem;
                padding: 8px;
                margin-right: 1rem;

                .top{
                    border-bottom: 2px solid  rgba(0, 0, 0, 0.2);
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 2px;
                    p{
                        font-size: 15px;
                        color: gray;

                        span{
                            color: black;
                            font-size: 16px;
                            font-weight: bold;
                        }
                    }
                }
                .bottom{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                    p{
                        color: gray;
                        font-size: 20px;
                    }
                }
            }

            .payment-button{
                padding: 3px;
                button{
                    width: 8rem;
                    height: 5rem;
                    margin: auto;
                    color: white;
                    background: #0C2340;
                    border: none;
                    font-size: 20px;
                    padding: 8px 15px;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                button:hover{
                    background: black;
                }
            }
        }

    }
`;