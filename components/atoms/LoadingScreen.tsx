import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const fill = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.base};
  z-index: 20000;
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
`;

const ProgressBarContainer = styled.div`
  width: 20%;
  height: 5px;
  margin-top: 20px;
  background-color: ${(props) => props.theme.colors.base};
  border-radius: 2.5px;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.subText};
  animation: ${fill} 1s ease-in-out forwards;
  border-radius: 2.5px;
`;

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }
  return (
    <LoadingContainer>
      <Logo src="/logo.png" alt="Your Logo" />
      <ProgressBarContainer>
        <ProgressBar />
      </ProgressBarContainer>
    </LoadingContainer>
  );
};

export default LoadingScreen;
