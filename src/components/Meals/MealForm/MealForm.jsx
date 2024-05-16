import styles from "./MealForm.module.css";
import Input from "../../UI/Input/Input.jsx";
import { useContext, useRef } from "react";
import { CartContext } from "../../../Context/Context.jsx";

function MealForm(props) {
  const { cartItems, updateCart } = useContext(CartContext);

  const cart = useContext(CartContext);
  return (
    <form className={styles["meal-form"]}>
      <span>
        <Input
          label={"Amount"}
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
      </span>
      <button
        onClick={(event) => {
          event.preventDefault();
          updateCart({ paramar: 1 });
          console.log(cart);
        }}
      >
        + Add
      </button>
    </form>
  );
}

export default MealForm;
