// Header.js
import React, { useState, useContext } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import CartContext from './cart-context';
import CartModal from './CartModel';

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
          <NavLink href="/">HOME</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">STORE</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">ABOUT</NavLink>
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
