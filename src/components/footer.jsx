import React from 'react';
import styled from 'styled-components';

// Create a styled footer component
const FooterWrapper = styled.footer`
  background-color: #618264;
  padding: 20px 0;
  color: #ffffff;
  text-align: center;
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>&copy; {new Date().getFullYear()} Christiane Nanette Dragvik
      </p>
    </FooterWrapper>
  );
}

export default Footer;
