import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { IoMdArrowRoundBack } from 'react-icons/io';
import axios from 'axios';
import { baseURL } from '../utils/constant';
import { useLocation } from 'react-router-dom';
import Select from 'react-select';
import Splashscreen from '../components/Splashscreen';



const Outlets = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const bus_id = searchParams.get('bus_id');
  const [outletName, setOutletName] = useState('');
  const [outletLocation, setOutletLocation] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [allOutlets, setAllOutlets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleAddOutlet = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validations
    const validationErrors = {};
    if (!outletName) {
      validationErrors.outletName = 'Outlet name is required';
    }
    if (!outletLocation) {
      validationErrors.location = 'Location is required';
    }

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit data to the server
      const outletData = {
        ownerID: bus_id,
        outletLocation,
        outletName
      };
      try {
        await axios.put(`${baseURL}/addOutlet`, outletData).then((response) => {
          if (response.data.status === 'ok') {
            alert('success');
            setTimeout(() => {
              setLoading(false);
            }, 2000);
          } else {
            console.log(response.data);
            setLoading(false);
          }
        });
        setErrors({});
      } catch (e) {
        if (e.code === 'ERR_NETWORK') {
          console.log('It seems you are offline');
        }
        setLoading(false);
      }
    } else {
      // Form is invalid, update errors state
      setErrors(validationErrors);
      setLoading(false);
    }
  };

  const locationOptions = [
    { label: 'Nairobi, Kenya', value: 'Nairobi' },
    { label: 'Mombasa, Kenya', value: 'Mombasa' },
    { label: 'Kisumu, Kenya', value: 'Kisumu' },
    { label: 'Nakuru, Kenya', value: 'Nakuru' },
    { label: 'Eldoret, Kenya', value: 'Eldoret' },
    { label: 'Nyeri, Kenya', value: 'Nyeri' },
    { label: 'Malindi, Kenya', value: 'Malindi' },
    { label: 'Thika, Kenya', value: 'Thika' },
    { label: 'Kakamega, Kenya', value: 'Kakamega' }
  ];

  const handleLocationChange = (selectedOption) => {
    setOutletLocation(selectedOption.value);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: '200px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxShadow: state.isFocused ? '0 0 0 2px blue' : 'none',
    }),
    menu: (provided, state) => ({
        ...provided,
        maxHeight: '200px',
      }),
  };

  useEffect(() => {
    const fetchOutlets = async () => {
      try {
        const response = await axios.get(`${baseURL}/fetchOutlets`, { params: { ownerID: bus_id } });

        if(response.data.data){
          setAllOutlets(response.data.data);
        }
        console.log(allOutlets);
        console.log(response.data.data)
        setIsLoading(false);  
      } catch (error) {
        setIsLoading(false);
        alert(error);
      }
    };
  
    fetchOutlets();
  }, []);
  

  return (
    <Section>
      <div className="heading">
        <div className="back">
          <IoMdArrowRoundBack />
        </div>
        <div className="title">
          <h2>Add Business Outlets</h2>
        </div>
      </div>
      {isLoading ? (<Splashscreen />) : (
        <>
      <div className="box-a">
        <p>
          Adding other outlets other than the main outlet helps easily manage your business activities such as stock
          tracking, sales monitoring, invoice generation, and order taking.
        </p>
      </div>
      <div className="box-c">
        <p>These are your current outlet(s), please add more.</p>
        { allOutlets.length === 0 ? <div><p>You currently do not have any outlet</p></div> : (<table>
            <thead>
                <tr>
                    <th>Outlet name</th>
                    <th>Location</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                  {allOutlets.map((outlet) => (
                  <tr key={outlet._id}>
                    <td>{outlet.outletName}</td>
                    <td>{outlet.location}</td>
                    <td>Delete</td>
                  </tr>
              ))}
            </tbody>
        </table>)}
      </div>
      <div className="box-b">
        <h2> Add an outlet </h2>
        <form onSubmit={handleAddOutlet}>
          <div className="inputelement">
            <input type="text" placeholder="Outlet name" value={outletName} onChange={(e) => setOutletName(e.target.value)} />
            {errors.outletName && <span className="error">{errors.outletName}</span>}
          </div>
          <div className="inputelement">
            <Select options={locationOptions} placeholder="Location" isClearable={true} value={outletLocation} onChange={handleLocationChange} styles={customStyles}  />
            {errors.location && <span className="error">{errors.location}</span>}
          </div>
          <div className="button">
            <button type="submit">{loading ? <Loader /> : 'Save'}</button>
          </div>
        </form>
      </div>
      </>
    )}
    </Section>
  );
};

export default Outlets;

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

  .heading {
    background-color: #0c2340;
    padding: 4rem;
    display: flex;
    color: white;
    width: 100%;

    .back {
      width: 20%;
    }

    .title {
      width: 80%;
      text-align: center;
    }
  }

  .box-a {
    background-color: #f5f5fd;
    margin: 10px 0;
    padding: 5rem;

    p {
      font-size: 20px;

      span {
        color: gray;
      }
    }
  }

  .box-b {
    background: #f5f5fd;
    color: black;
    margin: 10px 0;
    padding: 5rem;

    h2 {
      text-align: left;
      color: blue;
    }

    form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 2rem;


      .inputelement {
        display: flex;
        flex-direction: column;
        padding: 8px 0;
        font-weight: bold;

        label {
          color: #0c2340;
          margin-bottom: 1rem;
        }

        input {
          padding: 8px 12px;
          border-radius: 4px;
          border: 1px solid #ccc;
          box-shadow: none;
          outline: none;
          width: 100%;
          font-size: 14px;
          line-height: 1.5;
          color: #333;
        }

        .error {
          color: red;
          width: 100%;
          padding: 10px 5px;
        }
      }

      .button {
        button{
            display: block;
            color: white;
            background: #0C2340;
            border: 1px solid black;
            font-size: 18px;
            padding: .5rem 1.5rem;
            box-shadow: 2px 2px 2px 1px #0C2340;
            border-radius: 5px;
            cursor: pointer;
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
    
    p{
        font-size: 20px;
        margin: 5px;
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
`;
