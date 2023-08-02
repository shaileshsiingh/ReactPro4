// Products.js
import React, { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProductItem from './ProductItem';
import CartContext from './cart-context';

const Products = ({ title, products }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="container">
      <h2>{title}</h2>
      <div className="content">
        <Container>
          <Row>
            {products.map((product, index) => (
              <Col md="6" key={index}>
                <ProductItem
                  {...product}
                  onAddToCart={() => addToCart(product)}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Products;
