// Products.js
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProductItem from './ProductItem';

const Products = ({ title, products }) => {
  return (
    <section className="container">
      <h2>{title}</h2>
      <div className="content">
        <Container>
          <Row>
            {products.map((product, index) => (
              <Col md="6" key={index}>
                <ProductItem {...product} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Products;
