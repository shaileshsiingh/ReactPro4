// Header.js
import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import CartModal from './CartModel';



const Header = () => {
  const [cartElements,setCartElements] = useState([

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ])
  const [showCart, setShowCart] = useState(false);

  const handleCartToggle = () => {
    setShowCart(!showCart);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCartElements = [...cartElements];
    updatedCartElements.splice(index, 1);
    setCartElements(updatedCartElements);
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

      {showCart && (
        <CartModal
          cartElements={cartElements}
          onRemoveFromCart={handleRemoveFromCart}
          onClose={handleCartToggle}
        />
      )}
    </header>
  );
};

export default Header;
