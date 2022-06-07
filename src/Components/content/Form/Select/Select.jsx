import styles from "./Select.module.scss";

export default function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>{text}</label>
      <select onChange={handleOnChange} name={name} id={name} value={value || ''}>
        <option>Selecione uma opção</option>
        {options.map((item) => (
          <option value={item.id} key={item.id}>{item.name}</option>
        ))
        }
      </select>
    </div>
  );
}
