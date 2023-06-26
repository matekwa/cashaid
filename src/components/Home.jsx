import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import RightSidebar from './RightSidebar';
import axios from 'axios';
import { baseURL } from '../utils/constant';
import NetworkErr from './NetworkErr';

const Home = () => {

  const [userData, setUsertData] = useState({});
  const [offline, setOffline] = useState(false);


  useEffect(() => {
    const token = window.localStorage.getItem("token");

    const tokenObj = {
      token
    };

    const fetchData = async () => {
      try {
        await axios.post(`${baseURL}/details`, tokenObj).then((response) => { setUsertData(response.data.data) }).catch((error) => { console.log(error) });
      } catch (error) {
        if(error.code === "ERR_NETWORK"){
          setOffline(true);
        }
      }
    };

    if (token) {
      fetchData();
    } else {
      window.location.href = "auth/login";
    }
    document.title = 'Skyfalke SalesFlow | Dashbord';
  }, []);

  return (
    Object.keys(userData).length > 0 && (
      offline ? (<NetworkErr />) : (
        <>
          <Dashboard {...userData} />
          <RightSidebar {...userData} />
        </>
      )
    )
  );
};

export default Home;
