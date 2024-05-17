import styles from "./Meals.module.css";
import MealItem from "./MealItem/MealItem.jsx";
import Card from "../UI/Card/Card.jsx";
import { useContext } from "react";
import { MealsContext } from "../../Context/Context.jsx";

function Meals(props) {
  const foodData = useContext(MealsContext);

  if (foodData.meals.length < 1) return;
  return (
    <ul className={styles.list}>
      {foodData.meals.map((food, idx) => (
        <Card key={idx}>
          <MealItem
            itemId={food.id}
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
