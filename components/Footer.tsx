import React from "react";
import { styled } from "styled-components";

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.gray};
  text-align: center;
  padding: 20px;
`;

export const Footer = () => {
  return <Container>Footer</Container>;
};
