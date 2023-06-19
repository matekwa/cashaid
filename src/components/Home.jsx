import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import RightSidebar from './RightSidebar';
import axios from 'axios';
import { baseURL } from '../utils/constant';

const Home = () => {

  const [userData, setUsertData] = useState({});
  const navigate = useNavigate();


  useEffect(() => {
    const token = window.localStorage.getItem("token");

    const tokenObj = {
      token
    };

    const fetchData = async () => {
      try {
        await axios.post(`${baseURL}/details`, tokenObj).then((response) => { setUsertData(response.data.data) }).catch((error) => { console.log(error) });
      } catch (error) {
        console.log('Errrrror fetching data', error);
      }
    };

    if (token) {
      fetchData();
    }
  }, []);

  return (
    Object.keys(userData).length > 0 && (
      <>
        <Dashboard {...userData} />
        <RightSidebar {...userData} />
      </>
    )
  );
};

export default Home;
