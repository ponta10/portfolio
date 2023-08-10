import { breakpoints } from "@/utils/const";
import React from "react";
import { keyframes, styled } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(-50%);
  }
`;

const Box = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15%;
  z-index: 2;
  animation: ${fadeIn} 0.8s ease-in-out 1.1s;

  @media (max-width: ${breakpoints.sm}) {
    left: 15%;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  text-shadow: 2px 2px 2px ${(props) => props.theme.colors.base};

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${(props) => props.theme.fontSizes.xxl};
  }
`;

const SubTitle = styled.h3`
  color: ${(props) => props.theme.colors.subText};
  font-size: ${(props) => props.theme.fontSizes.xl};
  text-shadow: 2px 2px 2px ${(props) => props.theme.colors.base};

  @media (max-width: ${breakpoints.sm}) {
    font-size: ${(props) => props.theme.fontSizes.lg};
  }
`;

export const TopTitle = () => {
  return (
    <Box>
      <Title>MIURA KOTA</Title>
      <SubTitle>web developer</SubTitle>
    </Box>
  );
};
