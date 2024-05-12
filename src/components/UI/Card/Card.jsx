import styles from "./Card.module.css";
import Button from "../Button/Button.jsx";

function Card(props) {
  return (
    <>
      <li className={styles.card}>
        <div className={styles["product-info"]}>
          <p>{props.foodName}</p> <p>{props.foodDesc}</p>
          <p>{props.foodPrice}</p>
        </div>
        <Button name={"+ Add"} />
      </li>
    </>
  );
}

export default Card;
