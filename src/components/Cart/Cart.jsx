import { useContext } from "react";
import { CartContext } from "../../Context/Context.jsx";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal.jsx";
import CartItem from "./CartItem/CartItem.jsx";

function Cart(props) {
  const { cartMeals } = useContext(CartContext);

  const checkoutPrice = Object.keys(cartMeals).reduce(
    (acc, cur) => acc + cartMeals[cur].totalValue,
    0,
  );

  return (
    <Modal onClose={props.onClose}>
      <ul className={styles["cart-items"]}>
        {Object.keys(cartMeals)?.map((item, idx) => {
          return (
            <CartItem
              name={cartMeals[item].name}
              qty={+cartMeals[item].qty}
              value={cartMeals[item].totalValue}
              key={idx}
              itemId={item}
            ></CartItem>
          );
        })}
      </ul>
      <h2>Total Amount: {checkoutPrice.toFixed(2)}$</h2>
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
