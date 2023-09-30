// Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  height:20px;
  background-color: #333;
  color: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 16px;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: white;
  font-weight: 500;0
  &:hover {
    border-bottom: 2px solid white;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo>MyLogo</Logo>
      <Navigation>
        <NavItem href="#">Home</NavItem>
        <NavItem href="#">About</NavItem>
        <NavItem href="#">Contact</NavItem>
      </Navigation>
    </HeaderContainer>
  );
};
