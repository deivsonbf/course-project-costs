import styles from "./Main.module.scss";

export default function Main({ custom, children }) {
  return (
    <main className={`${styles.contentWrapper} ${styles[custom]}`}>
      {children}
    </main>
  );
}
