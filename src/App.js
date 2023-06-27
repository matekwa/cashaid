import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate  } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import EmailValidation from './pages/EmailValidation';
import Transactions from './components/AllTransactions';
import EventScheduler from './components/EventScheduler';
import Analytics from './components/Analytics';
import InventoryIndex from './inventory/Main';
import AddShop from './inventory/AddShop';
import Outlets from './inventory/Outlets';
import AddUsers from './inventory/AddUser';
import ProductCatalogue from './inventory/ProductCatalogue';
import Receipts from './inventory/Receipts';
import POS from './POS/Darshboard';
import Card from './Card/Dashboard.jsx';
import LoyaltyList from './Loyalty/Main';
import Settings from './Settings/Main';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ErrorPage from './components/ErrorPage';
import Sidebar from './components/Sidebar';
import Category from './inventory/Category';

function App() {
  const loggedIn = window.localStorage.getItem('isLoggedIn');

  return (
    <Router>
      <Div>
        <Routes>
          {/* Routes with Sidebar */}
          <Route
            path="/"
            element={
              loggedIn ? (
                <>
                  <Sidebar />
                  <Home />
                </>
              ) : (
                <Login />
              )
            }
          />
          <Route path="/dashboard" element={
              loggedIn ? (
                <>
                  <Sidebar />
                  <Home />
                </>
              ) : (
                <Login />
              )
            } />
          <Route path="transactions" element={
              loggedIn ? (
                <>
                  <Sidebar />
                  <Transactions />
                </>
              ) : (
                <Login />
              )
            } />
          <Route path="scheduler" element={
              loggedIn ? (
                <>
                  <Sidebar />
                  <EventScheduler />
                </>
              ) : (
                <Login />
              )
            } />
          <Route path="analytics" element={
              loggedIn ? (
                <>
                  <Sidebar />
                  <Analytics />
                </>
              ) : (
                <Login />
              )
            } />
          <Route path="inventory-manager" element={
              loggedIn ? (
                <>
                  <Sidebar />
                  <InventoryIndex />
                </>
              ) : (
                <Login />
              )
            } />
          <Route path="add-business-name" element={
              loggedIn ? (
                <>
                  <Sidebar />
                  <AddShop />
                </>
              ) : (
                <Login />
              )
            } />
          <Route path="add-outlets" element={
              loggedIn ? (
                <>
                  <Sidebar />
                  <Outlets />
                </>
              ) : (
                <Login />
              )
            } />
          <Route path="user-roles" element={
              loggedIn ? (
                <>
                  <Sidebar />
                  <AddUsers />
                </>
              ) : (
                <Login />
              )
            } />
          <Route path="product-catalogue" element={
              loggedIn ? (
                <>
                  <Sidebar />
                  <ProductCatalogue />
                </>
              ) : (
                <Login />
              )
            } />
          <Route path="receipts" element={
              loggedIn ? (
                <>
                  <Sidebar />
                  <Receipts />
                </>
              ) : (
                <Login />
              )
            }/>
          <Route path="pos-terminal" element={
              loggedIn ? (
                <>
                  <Sidebar />
                  <POS />
                </>
              ) : (
                <Login />
              )
            } />
          <Route path="link-card" element={
              loggedIn ? (
                <>
                  <Sidebar />
                  <Card />
                </>
              ) : (
                <Login />
              )
            } />
          <Route path="loyal-customers" element={
              loggedIn ? (
                <>
                  <Sidebar />
                  <LoyaltyList />
                </>
              ) : (
                <Login />
              )
            } />
          <Route path="settings" element={
              loggedIn ? (
                <>
                  <Sidebar />
                  <Settings />
                </>
              ) : (
                <Login />
              )
            } />
              <Route path="category" element={
              loggedIn ? (
                <>
                  <Sidebar />
                  <Category />
                </>
              ) : (
                <Login />
              )
            } />

          {/* Routes without Sidebar */}
          <Route path="auth/verification" element={<EmailValidation />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/signup" element={<Signup />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Div>
    </Router>
  );
}

export default App;

const Div = styled.div`
  position: relative;
`;

