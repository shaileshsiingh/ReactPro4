import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import CartContext from './cart-context';
import  AuthContext  from '../store/auth-context'; 

const CartProvider = (props) => {
  const [cartElements, setCartElements] = useState([]);
  const apiUrl = 'https://crudcrud.com/api/6f4fa6121bd9475586bd2f74a81f428a/cart';

  const authContext = useContext(AuthContext); 

  useEffect(() => {
    const fetchCartData = async (email) => {
      try {
        const response = await axios.get(`${apiUrl}?email=${email}`);
        if (response.status === 200) {
          setCartElements(response.data);
        } else {
          alert('Failed to fetch');
        }
      } catch (error) {
        console.log('Error');
      }
    };

    if (authContext.isLoggedIn) {
      fetchCartData(authContext.email);
    }
  }, [authContext]);

  const addToCart = async (newItem) => {
    try {
      if (authContext.isLoggedIn) {
        const response = await axios.post(`${apiUrl}?email=${authContext.email}`, newItem);
        if (response.status === 201) {
          const addedItem = response.data;
          setCartElements((prevCart) => [...prevCart, addedItem]);
        } else {
          alert('Failed to add');
        }
      }
    } catch (error) {
      console.error('Error');
    }
  };

  const removeFromCart = async (title) => {
    setCartElements((prevCart) => prevCart.filter((item) => item.title !== title));
  };

  const cartContext = {
    cartElements: cartElements,
    totalAmount: 0, 
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
