import styles from "./MainHeaderButton.module.css";
import CartIcon from "../../Cart/CartIcon.jsx";

function MainHeaderButton(props) {
  return (
    <button className={styles.btn}>
      <CartIcon />
      <span>Your cart</span>
      <span>3</span>
    </button>
  );
}

export default MainHeaderButton;
