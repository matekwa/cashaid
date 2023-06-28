import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { baseURL } from '../utils/constant';
import { useLocation, Link } from 'react-router-dom';
import Splashscreen from '../components/Splashscreen';

const Brand = () => {
    const [brandName, setBrandName] = useState('');
    const [showModal, setShowModal] = React.useState(false);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const bus_id = searchParams.get('bus_id');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [brandsList, setBrandsList] = useState([]);
    

    const handleOpenModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleAddBrand = async (e) => {
        e.preventDefault();
        setLoading(true);

        //Validations
        const validationErrors = {};
        if (!brandName) {
            validationErrors.category = '   Brand is required';
        }
        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, submit data to the server
            const brandData = {
                shopID: bus_id,
                brandName
            }
            try {
                await axios.put(`${baseURL}/addBrand`, brandData)
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
        const fetchBrands = async () => {
            try {
                const response = await axios.get(`${baseURL}/fetchBrand`, { params: { ownerID: bus_id } });
                setBrandsList(response.data.data);
                setIsLoading(false); 
            } catch (error) {
                setIsLoading(false); 
                console.log('Error fetching brands', error);
            }
        };
            fetchBrands();
    }, []);
    return (
        <DIV>
            <div className="brand">
                <div>
                    <p>Add brand for your products, this makes identifiation of products easy.</p>
                </div>
                <div>
                    <button onClick={handleOpenModal}>Add Brand</button>
                    {showModal && (
                        <ModalWrapper>
                            <ModalContent>
                                <h2>Product Brand</h2>
                                <form onSubmit={handleAddBrand}>
                                    <input type="text" placeholder='Brand name' value={brandName} onChange={(e)=>setBrandName(e.target.value)} autoFocus/>
                                    {errors.brand && <span className="error">{errors.brand}</span>}
                                    <div className="buttons">
                                        <Button onClick={handleCloseModal}>Cancel</Button>
                                        <Button type='submit'> {loading ? <Loader /> : 'Save'}</Button>
                                    </div>
                                </form>
                            </ModalContent>
                        </ModalWrapper>
                    )}
                </div>
            </div>
            <div className="brands-list">
                { 
                    isLoading ? (<Splashscreen />) :
                            brandsList.length === 0 ? <div><p>Your brands list is empty.</p></div> : (
                            <>
                        <p>These are your current brand(s)</p>
                        <table>     
                            <thead>
                                <tr>
                                    <th>Brand</th>
                                </tr>
                            </thead>
                            <tbody>
                                {brandsList.map((brand) => (
                                <tr key={brand}>
                                    <td>{brand}</td>
                                    <td>Delete</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        </>
                        )
                }
            </div>
        </DIV>
    )
}

export default Brand
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
const DIV = styled.div`
  .brand{
        background-color: #F5F5FD;
        margin:10px 0;
        padding: 5rem;
        display:flex;
        justify-content: space-between;

        p{
            font-size: 20px;
        }
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
    .brands-list{
        background: #fff;
        color: gray;
        margin: 3px 0;
        padding: 4rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 20px;


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
`
    ;
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  margin: 10px 0;
  form{
    
    input, select{
        outline: none;
        padding: 10px;
        font-size: 15px;
        font-familly: 'serif';
        color: black;
        border: none;
        background: #F5F5FD;
        border: 1px solid #F5F5FD;
        border-radius: 5px;
        width: 300px;
        margin: 15px 0;
    }
    input:hover{
        border: 1px solid gray;
    }
    input:focus{
        border 1 solid #0C2340;
    }

    .buttons{
        display: flex;
        justify-content: space-between;
        margin: 5px 0;
    }
  }
`;

const Button = styled.button`
  background-color: #fff;
  color: #000;
  border: 2px solid #000;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;