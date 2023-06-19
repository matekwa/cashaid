import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BounceLoader } from 'react-spinners';

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const SplashScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Spinner = styled(BounceLoader)`
  animation: ${bounceAnimation} 1s infinite;
`;


const Splashscreen = () => {
  return (
    <SplashScreenContainer>
      <Spinner size={80} color="#262661" />
      <h1>Loading...</h1>
    </SplashScreenContainer>
  )
}

export default Splashscreen