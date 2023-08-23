import React, { useState, useContext } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import CartContext from './cart-context';
import CartModal from './CartModal';
import AuthContext from '../store/auth-context';
import { Link } from 'react-router-dom';

const Header = () => {
  const { cartElements } = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const [showCart, setShowCart] = useState(false);
  const history = useNavigate();

  const handleCartToggle = () => {
    setShowCart(!showCart);
  };

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logOut();
    localStorage.removeItem('token');
    history('/login'); // Use history directly, no need for replace
  };

  return (
    <header>
      <Nav className="header">
        <NavItem>
          <NavLink to="/" activeClassName="active-link" exact>
            HOME
          </NavLink>
        </NavItem>
        <NavItem>
         {isLoggedIn && <Link to="/products" activeClassName="active-link">
            STORE
          </Link>}
        </NavItem>
        <NavItem>
          <NavLink to="/aboutus" activeClassName="active-link">
            ABOUT
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" activeClassName="active-link">
            CONTACT
          </NavLink>
        </NavItem>
        <NavItem>
          {isLoggedIn ? (
            <button onClick={logoutHandler}>Logout</button>
          ) : (
            <Link to="/login" className="active-link">
              LOGIN
            </Link>
          )}
        </NavItem>
        <a href="#cart" className="cart-holder" onClick={handleCartToggle}>
          cart<span className="cart-number">{cartElements.length}</span>
        </a>
      </Nav>
      <h1>The Generics</h1>

      {showCart && <CartModal onClose={handleCartToggle} />}
    </header>
  );
};

export default Header;
