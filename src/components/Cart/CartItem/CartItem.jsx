import styles from "./CartItem.module.css";
import { useContext } from "react";
import { CartContext } from "../../../Context/Context.jsx";

function CartItem(props) {
  const { cartMeals, mealsDispatcher } = useContext(CartContext);

  return (
    <div className={styles["cart-item"]}>
      <h3>{props.name}</h3>
      <span className={styles.info}>
        <h4>${props.value}</h4>
        <h4>x{props.qty}</h4>
      </span>
      <form className={styles.actions}>
        <button
          className={styles.button}
          onClick={(event) => {
            event.preventDefault();
            cartMeals[props.itemId].qty++;
            mealsDispatcher({
              type: "increment_qty",
            });
          }}
        >
          +
        </button>
        <button
          className={styles["button--alt"]}
          onClick={(event) => {
            event.preventDefault();
            if (cartMeals[props.itemId] < 2) return;
            cartMeals[props.itemId].qty--;
            mealsDispatcher({
              type: "decrement_qty",
            });
          }}
        >
          -
        </button>
        <button
          className={styles["button--delete"]}
          onClick={(event) => {
            event.preventDefault();
            mealsDispatcher({
              type: "remove_meal",
              mealId: props.itemId,
            });
          }}
        >
          Delete
        </button>
      </form>
    </div>
  );
}

export default CartItem;
