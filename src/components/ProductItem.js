// ProductItem.js
import React, { useContext } from 'react';
import CartContext from './cart-context';

const ProductItem = ({id, title, price, imageUrl, email }) => {
  const elements = useContext(CartContext);


  const handleAddToCart = () => {
    elements.addItem({ title, price, imageUrl, email });
  };

  return (
    <div id={id}>
     
      <h3>{title}</h3>
      <div className="image-container">
        <img className="prod-images" src={imageUrl} alt="" />
      </div>
      <div className="prod-details">
        <span>${price}</span>
        <button className="shop-item-button" onClick={handleAddToCart}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductItem;