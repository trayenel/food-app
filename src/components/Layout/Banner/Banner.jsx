import styles from "./Banner.module.css";

function Banner(props) {
  return <div className={styles.banner}>{props.children}</div>;
}

export default Banner;
