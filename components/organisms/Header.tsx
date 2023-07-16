import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const NavItem = styled(Link)`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Header = () => {
  return (
    <Container>
      <Logo>Logo</Logo>
      <Nav>
        <NavItem
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-40}
          duration={600}
        >
          ABOUT
        </NavItem>
        <NavItem
          activeClass="active"
          to="career"
          spy={true}
          smooth={true}
          offset={-40}
          duration={600}
        >
          CAREER
        </NavItem>
        <NavItem
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          offset={-40}
          duration={600}
        >
          WORK
        </NavItem>
        <NavItem
          activeClass="active"
          to="skill"
          spy={true}
          smooth={true}
          offset={-40}
          duration={600}
        >
          SKILL
        </NavItem>
        <NavItem
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-40}
          duration={600}
        >
          CONTACT
        </NavItem>
      </Nav>
    </Container>
  );
};
