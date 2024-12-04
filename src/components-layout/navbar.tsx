import React from "react";
import { Nav, NavItem, NavList } from "../css/navbar.css";
import { StyledLink } from "../css/layout.css";

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <StyledLink to="/">Home1</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/about">About</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/contact">Contact</StyledLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
