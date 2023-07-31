// Cart.js
import React, { useState } from 'react';
import Header from './Header';
import Products from './Products';
import Footer from './Footer';
import CartModal from './CartModel';


const Cart = () => {
    const productsArr = [
        {
          title: "Colors",
    
          price: 100,
    
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        },
    
        {
          title: "Black and white Colors",
    
          price: 50,
    
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        },
    
        {
          title: "Yellow and Black Colors",
    
          price: 70,
    
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        },
    
        {
          title: "Blue Color",
    
          price: 100,
    
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        },
      ];
    
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
        },
      ]);
  

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
    <div id="EcommerceContainer">
      <Header onCartToggle={handleCartToggle} />

      <Products title="MUSIC" products={productsArr} />


      {showCart && (
        <CartModal
          cartElements={cartElements}
          onRemoveFromCart={handleRemoveFromCart}
          onClose={handleCartToggle}
        />
      )}

      <Footer />
    </div>
  );
};

export default Cart;
