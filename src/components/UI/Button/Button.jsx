import styles from "./Button.module.css";

function Button(props) {
  return (
    <>
      <button className={styles.btn}>Your cart</button>
    </>
  );
}

export default Button;
