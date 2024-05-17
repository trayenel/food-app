import styles from "./MealForm.module.css";
import Input from "../../UI/Input/Input.jsx";
import { useContext, useRef } from "react";
import { CartContext } from "../../../Context/Context.jsx";

function MealForm(props) {
  const { updateCart } = useContext(CartContext);
  const qtyRef = useRef(null);
  const mealName = props.itemName;

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
          ref={qtyRef}
        />
      </span>
      <button
        onClick={(event) => {
          event.preventDefault();
          updateCart({ [mealName]: qtyRef.current.value });
        }}
      >
        + Add
      </button>
    </form>
  );
}

export default MealForm;
