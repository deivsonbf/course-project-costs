import styles from "./NewProject.module.scss";
import Form from "./../Components/content/Form/Form";

export default function NewProject() {
  function handleOnClick(e) {
    e.preventDefault();
    console.log("teste de click!");
  }

  return (
    <div className={styles.newProjectWrapper}>
      <h1>Criar Projeto</h1>
      <p>Crie aqui seu projeto</p>
      <Form btnText="Criar Projeto" handleOnClick={handleOnClick} />
    </div>
  );
}
