import React from "react";
import { styled } from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 2;
  padding: 40px;
`;

const Logo = styled.h1`
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 40px;
`;

const NavItem = styled.a`
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Header = () => {
  return (
    <Container>
      <Logo>Logo</Logo>
      <Nav>
        <NavItem href="#about">ABOUT</NavItem>
        <NavItem href="#work">WORK</NavItem>
        <NavItem href="#skill">SKILL</NavItem>
        <NavItem href="#contact">CONTACT</NavItem>
      </Nav>
    </Container>
  );
};
