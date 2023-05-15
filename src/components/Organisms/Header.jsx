import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f1f1f1;
`;

const Logo = styled.div`
  img {
    width: 100px;
    height: auto;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  li {
    margin-left: 1rem;

    &:first-child {
      margin-left: 0;
    }

    a {
      text-decoration: none;
      color: #333;
      font-weight: bold;

      &:hover {
        color: #555;
      }
    }
  }
`;

const Header = ({ user }) => {
  return (
    <Nav>
      <Logo>
        <img
          src="https://seeklogo.com/images/P/post-cereal-logo-A0D35CBD86-seeklogo.com.png"
          alt="logo"
        />
      </Logo>
      <NavLinks>
        {!user ? (
          <>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
          </>
        )}
      </NavLinks>
    </Nav>
  );
};

export default Header;
