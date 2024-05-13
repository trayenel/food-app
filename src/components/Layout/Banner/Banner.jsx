import styles from "./Banner.module.css";

function Banner(props) {
  return (
    <div className={styles.banner}>
      <p>{props.children}</p>
    </div>
  );
}

export default Banner;
