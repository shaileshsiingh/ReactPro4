// CartModal.js
import React, { useContext } from 'react';
import CartItem from './CartItem';
import CartContext from './cart-context';

const CartModal = (props) => {
  const elements = useContext(CartContext)
  return (
    <div >
      <h2>CART</h2>

      <div>
        {elements.cartElements.map((item, index) => (
          <CartItem
          userEmail={item.userEmail}
            key={index}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            quantity={item.quantity}
            onRemove={()=>elements.removeItem(item.title)}
          />
        ))}
      </div>
      {/* Cart total and purchase button can be added here */}
    </div>
  );
};

export default CartModal;