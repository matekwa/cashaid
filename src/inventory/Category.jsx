import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { baseURL } from '../utils/constant';
import { useLocation } from 'react-router-dom';
import Splashscreen from '../components/Splashscreen';

const Category = () => {
    const [categoryName, setCategoryName] = useState('');
    const [outlet, setOutlet] = useState('');
    const [showModal, setShowModal] = React.useState(false);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const bus_id = searchParams.get('bus_id');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [allOutlets, setAllOutlets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryList, setCategoryList] = useState([]);
    

    const handleOpenModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleAddCategory = async (e) => {
        e.preventDefault();
        setLoading(true);

        //Validations
        const validationErrors = {};
        if (!categoryName) {
            validationErrors.category = 'Category name is required';
        }
        if (!outlet) {
            validationErrors.outlet = 'Please choose an outlet';
        }
        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, submit data to the server
            const categoryData = {
                shopID: bus_id,
                categoryName,
                outletID: outlet
            }
            try {
                await axios.put(`${baseURL}/addCategory`, categoryData)
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
        const fetchData = async () => {
            try {
                const outletResponse = await axios.get(`${baseURL}/fetchOutlets`, { params: { ownerID: bus_id } });
                const categoriesResponse = await axios.get(`${baseURL}/fetchCategories`, { params: { ownerID: bus_id } });
                if(outletResponse.data.data){
                    setAllOutlets(outletResponse.data.data);
                  }
                  if(categoriesResponse.data.data){
                    setCategoryList(categoriesResponse.data.data);
                  }
                setIsLoading(false); 
            } catch (error) {
                setIsLoading(false); 
                console.log('Errrrror fetching outlets', error);
            }
        };
            fetchOutlets();
    }, []);
    return (
        <DIV>
            <div className="category">
                <div>
                    <p>Add categories for all your products, this makes navigation of different products easy during cashing out.</p>
                </div>
                <div>
                    <button onClick={handleOpenModal}>Add Category</button>
                    {showModal && (
                        <ModalWrapper>
                            <ModalContent>
                                <h2>Product Category</h2>
                                <form onSubmit={handleAddCategory}>
                                    <input type="text" placeholder='Category name' value={categoryName} onChange={(e)=>setCategoryName(e.target.value)} autoFocus/>
                                    {errors.category && <span className="error">{errors.category}</span>}
                                    <div className="input-element">
                                        <label htmlFor="Outlet">Outlet</label>
                                        <select value={outlet} onChange={(e) => { setOutlet(e.target.value) }}>
                                            {allOutlets.map((item) => {
                                                return <option key={item._id} value={item._id} >{item.outletName}</option>
                                            })}
                                        </select>
                                        {errors.outlet && <span className="error">{errors.outlet}</span>}
                                    </div>
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
            <div className="category-list">
            <p>These are your current category(s)</p>
                { 
                    isLoading ? (<Splashscreen />) : (
                        categoryList.length === 0 ? <div><p>You do not have any catgory</p></div> : (<table>
                            <thead>
                                <tr>
                                    <th>Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categoryList.map((category) => (
                                <tr key={category}>
                                    <td>{category}</td>
                                    <td>Delete</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>))
                }
            </div>
        </DIV>
    )
}

export default Category
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
  .category{
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
    .category-list{
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