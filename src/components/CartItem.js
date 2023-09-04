import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CartItem = (props) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async (email) => {
      try {
        const response = await axios.get('https://crudcrud.com/api/0c43b761c06a4a879aed199a1bbcfb18/cart?email=aagmailcom');

        if (response.status === 200 || 201) {
          const data = response.data;
          setCartItems(data);
          console.log(data)
        } else {
          console.error('Failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div>
      {cartItems.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src={item.imageUrl} alt={item.title} className="cart-image" />
          <div className="cart-details">
            <h3>{item.title}</h3>
            <span>${item.price}</span>
            <span>Quantity: {item.quantity}</span>
            <button onClick={props.onRemove}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
