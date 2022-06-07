import styles from "./NewProject.module.scss";

import { useNavigate } from "react-router-dom";

import Form from "./../Components/content/Form/Form";

export default function NewProject() {
  const history = useNavigate();

  function createPost(project) {
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5001/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        history("/project", { message: "cadastrado com sucesso" });
        console.log(history.options);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className={styles.newProjectWrapper}>
      <h1>Criar Projeto</h1>
      <p>Crie aqui seu projeto</p>
      <Form handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}
