import React from "react";
import { NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const NavBar = () => {
  const { pathname: location } = useLocation();

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">Demo</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink
            to="/contacts"
            tag={RouterNavLink}
            isActive={() => location === "/" || location.startsWith("/contacts")}
          >
            Contacts
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/add" tag={RouterNavLink}>
            Add Contact
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
