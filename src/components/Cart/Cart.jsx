import { useContext, useState } from "react";
import { CartContext } from "../../Context/Context.jsx";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal.jsx";
import CartItem from "./CartItem/CartItem.jsx";

function Cart(props) {
  const { cartMeals } = useContext(CartContext);

  const [checkoutPrice, setCheckoutPrice] = useState(
    Object.keys(cartMeals)?.reduce(
      (previousValue, currentValue) =>
        previousValue +
        cartMeals[currentValue].totalValue * cartMeals[currentValue].qty,
      0,
    ),
  );

  const priceUpdateHandler = (price, op = "increase") => {
    if (op === "decrease") {
      setCheckoutPrice((oldPrice) => oldPrice - price);
      return;
    }
    setCheckoutPrice((oldPrice) => oldPrice + price);
  };

  return (
    <Modal onClose={props.onClose}>
      <ul className={styles["cart-items"]}>
        {Object.keys(cartMeals)?.map((item, idx) => (
          <CartItem
            name={cartMeals[item].name}
            qty={+cartMeals[item].qty}
            value={cartMeals[item].totalValue}
            key={idx}
            itemId={item}
            priceUpdate={priceUpdateHandler}
          ></CartItem>
        ))}
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
