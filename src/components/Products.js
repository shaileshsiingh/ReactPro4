import React, { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProductItem from './ProductItem';
import CartContext from './cart-context';
import { Link } from 'react-router-dom';

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
                <Link to={`/products/${product.id}`}>
                  {/* Wrap the ProductItem component with the Link */}
                  <ProductItem
                    {...product}
                    onAddToCart={() => addToCart(product)}
                  />
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Products;
