import styles from "./MealItem.module.css";
import MealForm from "../MealForm/MealForm.jsx";

function MealItem(props) {
  const price = props.foodPrice.toFixed(2);

  return (
    <li className={styles.meal}>
      <div className={styles["product-info"]}>
        <p>{props.foodName}</p> <p>{props.foodDesc}</p>
        <p>{price + " $"}</p>
      </div>
      <MealForm />
    </li>
  );
}

export default MealItem;
