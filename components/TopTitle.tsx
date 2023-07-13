import React from 'react'
import { styled } from 'styled-components';

const Box = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15%;
  z-index: 2;
  color: ${(props) => props.theme.colors.text};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size:  ${(props) => props.theme.fontSizes.xxxl};
  text-shadow: 2px 2px 2px ${(props) => props.theme.colors.base};
`;

const SubTitle = styled.h3`
  color: ${(props) => props.theme.colors.subText};
  font-size:  ${(props) => props.theme.fontSizes.xl};
  text-shadow: 2px 2px 2px ${(props) => props.theme.colors.base};
`;

export const TopTitle = () => {
  return (
    <Box>
        <Title>MIURA KOTA</Title>
        <SubTitle>web developer</SubTitle>
    </Box>
  )
}
