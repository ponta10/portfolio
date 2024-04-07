import React from "react";
import { Link } from "react-scroll";
import styled, { css } from "styled-components";
import Image from "next/image";
import image from "@/public/logo.png";
import { breakpoints } from "@/utils/const";

const hoverAndActiveStyles = css`
  color: ${({ theme }) => theme.colors.accent};

  span {
    width: 100%;
  }
`;

const Underline = styled.span`
  display: block;
  width: 0;
  height: 2px;
  background: ${({ theme }) => theme.colors.accent};
  transition: width 0.3s;
`;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 2;

  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }
`;

const Logo = styled(Link)`
  margin: 0;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 40px;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  padding: 2px 0;
  height: fit-content;

  &:hover,
  &.active {
    ${hoverAndActiveStyles}
  }
`;

export const Header = () => {
  return (
    <Container>
      <Logo to="top" activeClass="active" spy smooth duration={600}>
        <Image src={image} alt="Logo Image" priority width={120} height={120} />
      </Logo>
      <Nav>
        {["about", "career", "work", "skill", "contact"].map((section) => (
          <NavItem
            key={section}
            activeClass="active"
            to={section}
            spy
            smooth
            offset={-40}
            duration={600}
          >
            {section.toUpperCase()}
            <Underline />
          </NavItem>
        ))}
      </Nav>
    </Container>
  );
};
