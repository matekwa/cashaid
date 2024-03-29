import React from 'react';
import styled from 'styled-components';
import errorImage from '../assets/404.jpg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: white;
`;

const ErrorImage = styled.img`
  width: 200px;
  height: 200px;
`;

const ErrorMessage = styled.h1`
  font-size: 24px;
  margin-top: 20px;
`;

const HomeLink = styled.a`
  margin-top: 20px;
  color: #333;
  text-decoration: none;
`;

const NetworkErr = () => {
  return (
    <Wrapper>
      <ErrorImage src={ errorImage } alt="Error" />
      <ErrorMessage>You are offline!</ErrorMessage>
      <HomeLink href="/">Reload</HomeLink>
    </Wrapper>
  );
};

export default NetworkErr;