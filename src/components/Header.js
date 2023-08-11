// Header.js
import React, { useState, useContext } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'; // Import NavLink from 'react-router-dom'
import CartContext from './cart-context';
import CartModal from './CartModel'; // Fix the import name

const Header = () => {
  const { cartElements } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  const handleCartToggle = () => {
    setShowCart(!showCart);
  };

  return (
    <header>
      <Nav className="header">
        <NavItem>
          <NavLink to="/Home" activeClassName="active-link">HOME</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/" activeClassName="active-link">STORE</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/aboutus" activeClassName="active-link">ABOUT</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" activeClassName="active-link">CONTACT</NavLink>
        </NavItem>
        <a href="#cart" className="cart-holder" onClick={handleCartToggle}>
          cart<span className="cart-number">{cartElements.length}</span>
        </a>
      </Nav>
      <h1>The Generics</h1>

      {showCart && <CartModal onClose={handleCartToggle} />}
    </header>
  );
};

export default Header;
