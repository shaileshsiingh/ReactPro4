import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const { productId } = useParams();
  const product = products.find(product => product.id.toString() === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.imageUrl}  alt={product.title} />
      <img src={product.imageUrl}  alt={product.title} />
      <p>Price: ${product.price.toFixed(2)}</p>
      <h2>{product.Reviews}</h2>
    </div>
  );
};

export default ProductDetail;
