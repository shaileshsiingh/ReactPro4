// Header.js
import React, { useState, useContext } from 'react';
import { Nav, NavLink, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom'
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
          <Link to="/">HOME</Link> {/* Fix NavLink to use Link */}
        </NavItem>
        <NavItem>
          <NavLink href="#">STORE</NavLink>
        </NavItem>
        <NavItem>
          <Link to="/aboutus">ABOUT</Link>
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
