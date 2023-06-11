import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import RightSidebar from './RightSidebar';
import axios from 'axios';
import { baseURL } from '../utils/constant';

const Home = () => {
  const token = sessionStorage.getItem('token');
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn !== 'true') {
      window.location.href = '/auth/login';
    } else {
      const fetchData = async () => {
        try {
          const response = await axios.post(`${baseURL}/details`, { token });
          setData(response.data);
        } catch (error) {
          console.log('Error fetching data', error);
        }
      };
      fetchData();
    }
  }, [token, isLoggedIn]);

  return (
    <div>
      <Dashboard {...data} />
      <RightSidebar {...data} />
    </div>
  );
};

export default Home;
