import styles from "./MainHeader.module.css";
import mealsImage from "../../../assets/meals.jpg";
import MainHeaderButton from "./MainHeaderButton.jsx";

function MainHeader() {
  return (
    <>
      <header className={styles["main-header"]}>
        <h1>App mancare</h1>
        <MainHeaderButton />
      </header>
      <div className={styles.image}>
        <img src={mealsImage} alt={"A table full of food."} />
      </div>
    </>
  );
}

export default MainHeader;
