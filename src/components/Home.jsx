import React, { useState, useEffect } from 'react'
import Dashboard from './Dashboard';
import RightSidebar from './RightSidebar';
import axios from 'axios';
import { baseURL } from '../utils/constant';


export const detailsContext = React.createContext(); //Context for user details that will will be passed down to child components

const Home = () => {
  const token = sessionStorage.getItem('token');
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  const [userDetails, setUserDetails] = useState({});

  const getData = async () => {
    if (isLoggedIn !== 'true') {
      window.location.href = './auth/login';
    } else {
      try {
        const res = await axios.post(`${baseURL}/details`, { "token": token });
        if (res) {
          setUserDetails(res);
        } else {
          console.log("Error");
        }
      }
      catch (e) {
        console.log(e);
      }
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <detailsContext.Provider value={userDetails}>
      <Dashboard />
      <RightSidebar />
    </detailsContext.Provider >
  )
}

export default Home