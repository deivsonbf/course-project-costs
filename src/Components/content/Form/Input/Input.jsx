import styles from "./Input.module.scss";

export default function Input({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
}) {
  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
}
