import styles from "./MainHeader.module.css";
import Button from "../UI/Button/Button.jsx";

function MainHeader() {
  return (
    <>
      <div className={styles["main-header"]}>
        <h1>App mancare</h1>
        <Button />
      </div>
    </>
  );
}

export default MainHeader;
