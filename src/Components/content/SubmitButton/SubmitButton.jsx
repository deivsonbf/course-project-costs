import styles from "./SubmitButton.module.scss";

export default function SubmitButton({ text, handleOnClick }) {
  return (
    <div className={styles.buttonControl}>
      <button onClick={handleOnClick} className={styles.submitBtn}>
        {text}
      </button>
    </div>
  );
}
