import styles from "./MealItem.module.css";
import Button from "../../UI/Button/Button.jsx";

function MealItem(props) {
  const price = props.foodPrice.toFixed(2);

  return (
    <li className={styles.meal}>
      <div className={styles["product-info"]}>
        <p>{props.foodName}</p> <p>{props.foodDesc}</p>
        <p>{price + " $"}</p>
      </div>
      <div className={styles.actions}>
        <Button name={"+ Add"} />
      </div>
    </li>
  );
}

export default MealItem;
