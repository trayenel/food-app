import styles from "./MealForm.module.css";
import Input from "../../UI/Input/Input.jsx";

function MealForm(props) {
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
      <button>+ Add</button>
    </form>
  );
}

export default MealForm;
