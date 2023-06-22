import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { baseURL } from '../utils/constant';
import { useLocation } from 'react-router-dom';

const Suppliers = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const bus_id = searchParams.get('bus_id');
  const [businessName, setBusinessName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [town, setTown] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  }

  const handleAddSupplier = async (e) => {
    e.preventDefault();
    setLoading(true);

    //Validations
    const validationErrors = {};
    if (!firstName || !secondName || !email || !address || !town || ! phoneNumber || !businessName) {
      validationErrors.feedback = 'All fields are required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.feedback = 'Invalid email address';
    }

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit data to the server
      const supplierData = {
        firstName,
        secondName,
        email,
        address,
        town,
        phoneNumber,
        businessName,
        ownerID: bus_id
      }
      try {
        await axios.put(`${baseURL}/addSupplier`, supplierData)
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

  return (
    <DIV>
      <div className="suppliers">
        <div>
          <p>Add suppliers to easily make orders of products by automatically sending quatations.</p>
        </div>
        <div>
          <button onClick={handleOpenModal}>Add Supplier</button>
          {showModal && (
            <ModalWrapper>
              <ModalContent>
                <h2>Suppliers</h2>
                <form onSubmit={handleAddSupplier}>
                  <input type="text" placeholder='Business name' autoFocus value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
                  <input type="text" placeholder='First name' autoFocus value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                  <input type="text" placeholder='Second name' value={secondName} onChange={(e) => setSecondName(e.target.value)} />
                  <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                  <input type="text" placeholder='Postal Address' value={address} onChange={(e) => setAddress(e.target.value)} />
                  <input type="text" placeholder='Town' value={town} onChange={(e) => setTown(e.target.value)} />
                  <input type="telephone" placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
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
      <div className="suppliers-list">
        <div className="img">

        </div>
        <p>Your suppliers list is empty.</p>
      </div>
    </DIV>
  )
}

export default Suppliers
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
  .suppliers{
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
    .suppliers-list{
        background: #fff;
        color: gray;
        margin: 3px 0;
        padding: 4rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 20px;


        .img{
            width: 100%;
            hight: 220px;
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
    display: flex;
    flex-direction: column;
    input{
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
        margin: 10px 0;
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