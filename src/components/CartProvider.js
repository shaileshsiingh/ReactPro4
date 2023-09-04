import React, { useState } from 'react';
import axios from 'axios';
import CartContext from './cart-context';

const CartProvider = (props) => {
  const [cartElements, setCartElements] = useState([]);

  // Function to add an item to the cart (POST)
  const addToCart = async (newItem,email) => {
    try {
      const response = await axios.post(`https://crudcrud.com/api/0c43b761c06a4a879aed199a1bbcfb18/cart?email=${email}`, newItem);
      
      if (response.status === 201) {
        // Successfully added item to the cart on the server
        const addedItem = response.data;
        setCartElements((prevCart) => [...prevCart, addedItem]);
      } else {
        console.error('Failed to add item to the cart on the server');
      }
    } catch (error) {
      console.error('Error adding item to the cart:', error);
    }
  };

  // Function to remove an item from the cart (DELETE)
  const removeFromCart = async (title) => {
   
        // Successfully removed item from the cart on the server
        setCartElements((prevCart) =>
          prevCart.filter((item) => item.title !== title)
        );
    
  };

  const cartContext = {
    cartElements: cartElements,
    totalAmount: 0, // You can calculate the total amount here
    addItem: addToCart,
    removeItem: removeFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
