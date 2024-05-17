import { useContext } from "react";
import { CartContext } from "../../Context/Context.jsx";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal.jsx";

function Cart(props) {
  const { cartMeals } = useContext(CartContext);
  let checkoutPrice = cartMeals?.reduce(
    (acc, curr) => acc + curr.totalValue,
    0,
  );

  return (
    <Modal onClose={props.onClose}>
      <ul className={styles.cart}>
        {cartMeals.map((item, idx) => {
          return (
            <li key={idx}>
              {item.name} {item.qty} {item.totalValue}
            </li>
          );
        })}
      </ul>
      <h2>Total Amount: {checkoutPrice.toFixed(2)}</h2>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.cartAction}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
