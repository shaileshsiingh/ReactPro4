// ProductItem.js
import React from 'react';

const ProductItem = ({ title, imageUrl, price }) => {
  return (
    <div>
    <div id={title}>
      <h3>{title}</h3>
      <div className="image-container">
        <img className="prod-images" src={imageUrl} alt="" />
      </div>
      <div className="prod-details">
        <span>${price}</span>
        <button className="shop-item-button" type="button">
          ADD TO CART
        </button>
      </div>
    </div>
    </div>
  );
};

export default ProductItem
