import styles from "./Meals.module.css";
import MealItem from "./MealItem/MealItem.jsx";
import Card from "../UI/Card/Card.jsx";

function Meals(props) {
  if (props.foodData.length < 1) return;
  return (
    <ul className={styles.list}>
      {props.foodData.map((food, idx) => (
        <Card key={idx}>
          <MealItem
            foodName={food.name}
            foodDesc={food.desc}
            foodPrice={+food.price}
          />
        </Card>
      ))}
    </ul>
  );
}

export default Meals;
