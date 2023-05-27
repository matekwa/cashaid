import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

// Import sub-page components
import UserDetails from './UserDetails';
import Profile from './Profile';
import Password from './Password';
import Plans from './Plan';
import Billing from './Billing';
import Integration from './Integration';
import Preference from './Preference';

const Container = styled.div`
  display: flex;
`;

const Sidebar = styled.nav`
  width: 200px;
  background-color: #f1f1f1;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const NavLinkStyled = styled(Link)`
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #333;

  &.active {
    background-color: #ddd;
  }
`;

const Main = () => {
    return (
        <Router>
            <Container>
                <Sidebar>
                    <NavLinkStyled exact to="/settings" activeClassName="active">
                        User Details
                    </NavLinkStyled>
                    <NavLinkStyled to="/settings/profile" activeClassName="active">
                        Profile
                    </NavLinkStyled>
                    <NavLinkStyled to="/settings/password" activeClassName="active">
                        Password
                    </NavLinkStyled>
                    <NavLinkStyled to="/settings/plan" activeClassName="active">
                        Plan
                    </NavLinkStyled>
                    <NavLinkStyled to="/settings/billing" activeClassName="active">
                        Billing
                    </NavLinkStyled>
                    <NavLinkStyled to="/settings/integration" activeClassName="active">
                        Integration
                    </NavLinkStyled>
                </Sidebar>
                <Content>
                    <Routes>
                        <Route path="/" element={<Outlet />} />
                        <Route path="/settings" element={<UserDetails />} />
                        <Route path="/settings/profile" element={<Profile />} />
                        <Route path="/settings/password" element={<Password />} />
                        <Route path="/settings/plan" element={<Plans />} />
                        <Route path="/settings/billing" element={<Billing />} />
                        <Route path="/settings/integration" element={<Integration />} />
                        <Route path="/settings/preference" element={<Preference />} />
                    </Routes>
                </Content>
            </Container>
        </Router>
    );
};

export default Main;