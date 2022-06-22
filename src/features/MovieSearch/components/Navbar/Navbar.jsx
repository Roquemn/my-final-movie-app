import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

// === styles == //

const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
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
  padding: 0 24px;
  max-width: 1100px;
`;

const NavLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-self: flex-start;
  // margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  // @media screen and (max-width: 768px) {
  //   display: block
  // }
`;

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
    color: #fff;
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
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  display: flex;
  // justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 0 10rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid red;
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
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavLogo to="/">Movie App</NavLogo>
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
