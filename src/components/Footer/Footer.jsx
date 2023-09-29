//vFooter.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 16px;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    border-bottom: 2px solid white;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © 2023 Your Company | <FooterLink href="#">Terms of Service</FooterLink> |{' '}
        <FooterLink href="#">Privacy Policy</FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;