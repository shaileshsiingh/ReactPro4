// CartItem.js
import React from 'react';

const CartItem = (props) => {
  return (
    <div className="cart-item">
      <img src={props.imageUrl} alt={props.title} className="cart-image" />
      <div className="cart-details">
        <h3>{props.title}</h3>
        <span>${props.price}</span>
        <span>Quantity: {props.quantity}</span>
        <button onClick={props.onRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
