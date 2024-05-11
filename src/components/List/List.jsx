import styles from "./List.module.css";

function List(props) {
  return (
    <div className={styles.list}>
      <ul>{props.children}</ul>
    </div>
  );
}

export default List;
