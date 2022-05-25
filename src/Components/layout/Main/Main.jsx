import styles from "./Main.module.scss";

export default function Main(props) {
  return (
    <main className={`${styles.contentWrapper} ${styles[props.custom]}`}>
      {props.children}
    </main>
  );
}
