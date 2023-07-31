// CartModal.js
import React from 'react';
import CartItem from './CartItem';

const CartModal = (props) => {
  return (
    <div >
      <h2>CART</h2>
      <button  onClick={props.onClose}>
        X
      </button>
      <div>
        {props.cartElements.map((item, index) => (
          <CartItem
            key={index}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            quantity={item.quantity}
            onRemove={() => props.onRemoveFromCart(index)}
          />
        ))}
      </div>
      {/* Cart total and purchase button can be added here */}
    </div>
  );
};

export default CartModal;
