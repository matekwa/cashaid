import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import styled from 'styled-components';
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import EmailValidation from './pages/EmailValidation';
import Transactions from './components/Transactions';
import EventScheduler from './components/EventScheduler';
import Analytics from './components/Analytics';
import InventoryIndex from './inventory/Main';
import AddShop from './inventory/AddShop';
import Outlets from './inventory/Outlets';
import AddUsers from './inventory/AddUser';
import ProductCatalogue from './inventory/ProductCatalogue';
import Receipts from './inventory/Receipts'
import POS from './POS/Darshboard';
import Card from './Card/Dashboard.jsx';
import LoyaltyList from './Loyalty/Main';
import Settings from './Settings/Main';
import Signup from './pages/Signup';
import Login from './pages/Login';
function App() {
  return (
    <BrowserRouter>
      <Div>
        <Routes>
            <Route path="/" element={<Login />} />
        
        </Routes>
        <Sidebar />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="scheduler" element={<EventScheduler />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="inventory-manager" element={<InventoryIndex />} />
          <Route path="inventory-manager/add-business-name" element={<AddShop />} />
          <Route path="inventory-manager/add-outlets" element={<Outlets />} />
          <Route path="inventory-manager/user-roles" element={<AddUsers />} />
          <Route path="inventory-manager/product-catalogue" element={<ProductCatalogue />} />
          <Route path="inventory-manager/receipts" element={<Receipts />} />
          <Route path="pos-terminal" element={<POS />} />
          <Route path="link-card" element={<Card />} />
          <Route path="loyal-customers" element={<LoyaltyList />} />
          <Route path="settings" element={<Settings />} />
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
