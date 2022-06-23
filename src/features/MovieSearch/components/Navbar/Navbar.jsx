import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

// === styles == //

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  // padding: 0 24px;
  max-width: 1100px;
`;

const NavLogo = styled(Link)`
  color: #F7F5FB;
  cursor: pointer;
  font-size: 2.25rem;
  font-weight: 400;
  letter-spacing: .1em;
  display: flex;
  align-items: center;
  justify-self: flex-start;
  text-decoration: none;
  text-transform: uppercase;

  span {
    color: #FF7D00;
  }

  
`;

const NavLogoMobile = styled(Link)`
  display: none;
  color: #F7F5FB;
  cursor: pointer;
  font-size: 1.75rem;
  font-weight: 400;
  letter-spacing: .1em;
  text-decoration: none;
  text-transform: uppercase;
  align-items: center;

  span {
    color: #FF7D00;
  }

  @media screen and (max-width: 768px) {
    display: block;
    place-content: center;
    margin-top: 1.4rem;
  }



`

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #FF7D00;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 70px;
`;

const NavLinks = styled(Link)`
  color: #F7F5FB;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: .1em;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 10rem;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    border-bottom: 3px solid #FF7D00;
  }
`;
// === Navbar Component === //

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavLogoMobile to="/">Movie <span>App</span></NavLogoMobile>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavLogo to="/">Movie <span>App</span></NavLogo>
            <NavItem>
              <NavLinks to="favorites">Favorites</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
