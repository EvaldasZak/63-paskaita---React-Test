import React from 'react';
import styled from 'styled-components';

// Styled component
const FooterContainer = styled.div`
  background-color: #f1f1f1;
  padding: 1rem;
  text-align: center;
  font-size: 14px;
  color: #333;
`;

const Footer = () => {
  return <FooterContainer>Copyright 2023</FooterContainer>;
};

export default Footer;
