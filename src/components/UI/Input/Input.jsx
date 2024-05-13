import styles from "./Input.module.css";

function Input(props) {
  return (
    <>
      <button className={styles.btn}>{props.name}</button>
    </>
  );
}

export default Input;
