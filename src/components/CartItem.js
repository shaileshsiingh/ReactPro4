import { useContext } from "react";
import AuthContext from "../store/auth-context";


const CartItem = (props) => {
const authCtx = useContext(AuthContext)
  return (
    <div>
      {authCtx.isLoggedIn&&
        <div className="cart-item" key={props.index}>
          <img src={props.imageUrl} alt={props.title} className="cart-image" />
          <div className="cart-details">
            <h3>{props.title}</h3>
            <span>${props.price}</span>
            <span>Quantity: {props.quantity}</span>
            <button onClick={props.onRemove}>Remove</button>
          </div>
        </div>
    }
    </div>
  );
};

export default CartItem;
