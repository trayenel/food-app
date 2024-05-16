import { useContext } from "react";
import { CartContext } from "../../Context/Context.jsx";
import styles from "./Cart.module.css";

function Cart(props) {
  const { cartMeals } = useContext(CartContext);

  return (
    <>
      <ul>
        {cartMeals.map((item, idx) => (
          <li key={idx}>
            {item.name} {item.qty}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cart;
