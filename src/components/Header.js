// Header.js
import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => {
  return (
    <header>
      <Nav className="header">
        <NavItem>
          <NavLink href="/">HOME</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">STORE</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">ABOUT</NavLink>
        </NavItem>
        <a href="#cart" className="cart-holder">
          cart<span className="cart-number">0</span>
        </a>
      </Nav>
      <h1>The Generics</h1>
    </header>
  );
};

export default Header;
