import styles from "./MainHeaderButton.module.css";
import CartIcon from "../../Cart/CartIcon.jsx";
import { useContext } from "react";
import { CartContext } from "../../../Context/Context.jsx";

function MainHeaderButton(props) {
  const { cartMeals } = useContext(CartContext);
  return (
    <button className={styles.btn} onClick={props.cartAction}>
      <CartIcon />
      <span>Your cart</span>
      <span>
        {Object.keys(cartMeals).length > 0 ? Object.keys(cartMeals).length : ""}
      </span>
    </button>
  );
}

export default MainHeaderButton;
