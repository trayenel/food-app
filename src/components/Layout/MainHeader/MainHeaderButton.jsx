import styles from "./MainHeaderButton.module.css";
import CartIcon from "../../Cart/CartIcon.jsx";
import { useContext } from "react";
import { CartContext } from "../../../Context/Context.jsx";

function MainHeaderButton(props) {
  const cart = useContext(CartContext);

  return (
    <button className={styles.btn}>
      <CartIcon />
      <span>Your cart</span>
      {/*<span>{cart.items.length > 0 ? cart.items.length : ""}</span>*/}
    </button>
  );
}

export default MainHeaderButton;
