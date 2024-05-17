import { useContext } from "react";
import { CartContext } from "../../Context/Context.jsx";
import styles from "./Cart.module.css";
import { createPortal } from "react-dom";
import Modal from "../UI/Modal/Modal.jsx";

function Cart(props) {
  const { cartMeals } = useContext(CartContext);
  if (Object.keys(cartMeals).length < 1) return;

  return (
    <Modal onClose={props.onClose}>
      <ul className={styles.cart}>
        {Object.keys(cartMeals).map((item, idx) => (
          <li key={idx}>
            {item} {cartMeals[item]}
          </li>
        ))}
      </ul>
    </Modal>
  );
}
export default Cart;
