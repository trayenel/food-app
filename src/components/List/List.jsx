import styles from "./List.module.css";
import Card from "../UI/Card/Card.jsx";

function List(props) {
  if (props.foodData.length < 1) return;
  return (
    <ul className={styles.list}>
      {props.foodData.map((food, idx) => (
        <Card
          id={idx}
          foodName={food.name}
          foodDesc={food.desc}
          foodPrice={food.price + " $"}
        />
      ))}
    </ul>
  );
}

export default List;
