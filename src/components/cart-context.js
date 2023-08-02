import React from "react";

const CartContext = React.createContext({
    cartElements: [],
    addItem : (item)=>{},
    removeItem : (index)=>{}
})

export default CartContext;