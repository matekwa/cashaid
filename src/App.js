import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import styled from 'styled-components';
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Signup from './pages/Signup'
import Login from './pages/Login';
import EmailValidation from './pages/EmailValidation';
import Transactions from './components/Transactions';
function App() {
  return (
    <BrowserRouter>
    <Div>
        <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="transactions" element={<Transactions />} />
      </Routes>
    </Div>
    </BrowserRouter>
  )
}

export default App
const Div = styled.div`

position: relative;
`
;
