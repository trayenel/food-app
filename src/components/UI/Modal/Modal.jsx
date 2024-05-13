import styles from "./Modal.module.css";

function Modal(props) {
  return (
    <>
      <button className={styles.btn}>{props.name}</button>
    </>
  );
}

export default Modal;
