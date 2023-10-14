import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #618264;
  padding: 20px 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled(Link)`
  img {
    max-height: 50px;
    padding: 20px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  display: inline-block;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;

    &:hover {
      color: #b4b4b4;
    }
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo to="/" className="logo">
          <img src="src/assets/Christiane Dragvik-logos_white.png" alt="Logo" />
        </Logo>
        <nav className="nav">
          <NavList>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/projects">Projects</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </NavList>
        </nav>
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;


