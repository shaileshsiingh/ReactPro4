import React from "react";

const CartContext = React.createContext({
    cartElements: [],
    addItem : (item)=>{},
    removeItem : (id)=>{}
    
})

export default CartContext;