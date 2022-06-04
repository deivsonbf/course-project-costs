import styles from "./Form.module.scss";
import Input from "./Input/Input";
import Select from "./Select/Select";
import SubmitButton from "./../SubmitButton/SubmitButton";

export default function Form({ handleOnClick, btnText }) {
  return (
    <>
      <form className={styles.formWrapper}>
        <Input
          text="Nome do Projeto"
          type="text"
          id="name"
          name="name"
          placeholder="Nome do projeto"
        />
        <Input
          text="Orçamento do projeto"
          type="number"
          id="orcamento"
          name="orcamento"
          placeholder="Orçamento do projeto"
          handleOnChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <Select name="category_id" text="Categoria" />
        <SubmitButton handleOnClick={handleOnClick} text={btnText} />
      </form>
    </>
  );
}
