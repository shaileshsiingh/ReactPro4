// CartContext.js
import { useState } from "react";
import CartContext from "./cart-context";

  const CartProvider = (props) => {
  const [cartElements, setCartElements] = useState([]);

  const addToCart = (newItem) => {
    const existingItem = cartElements.find((item) => item.title === newItem.title);

    if (existingItem) {
      setCartElements((prevCart) =>
        prevCart.map((item) =>
          item.title === newItem.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartElements((prevCart) => [...prevCart, { ...newItem, quantity: 1 }]);
    }
  };

  const removeFromCart = (title) => {
    setCartElements((prevCart) =>
      prevCart.filter((item) => item.title !== title)
    );
  };
  const cartContext = {
    cartElements: cartElements,
    totalAmount: 0,
    addItem: addToCart,
    removeItem: removeFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider