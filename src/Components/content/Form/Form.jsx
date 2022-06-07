import { useState, useEffect } from 'react'
import styles from "./Form.module.scss";
import Input from "./Input/Input";
import Select from "./Select/Select";
import SubmitButton from "./../SubmitButton/SubmitButton";
import { useHistory } from 'react-router-dom';

export default function Form({ btnText, handleSubmit, projectData, value }) {

  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})

  useEffect(() => {
    const dados = fetch('http://localhost:5001/categories', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json())
      .then((data) => {
        setCategories(data)
      })
      .catch((err) => console.log(err))
  }, [])


  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
  }

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value })
    console.log(project);
  }

  function handleCategory(e) {
    setProject({
      ...project, category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      }
    })
    console.log(project);
  }


  return (
    <>
      <form onSubmit={submit} className={styles.formWrapper}>
        <Input
          text="Nome do Projeto"
          type="text"
          id="name"
          name="name"
          placeholder="Nome do projeto"
          handleOnChange={handleChange}
          value={project.name ? project.name : ''}
        />
        <Input
          text="Orçamento do projeto"
          type="number"
          id="orcamento"
          name="orcamento"
          placeholder="Orçamento do projeto"
          handleOnChange={handleChange}
          value={project.orcamento ? project.orcamento : ''}
        />
        <Select
          name="category_id"
          text="Categoria"
          handleOnChange={handleCategory}
          options={categories}
          value={project.category ? project.category.id : ''} />
        <SubmitButton text={btnText} />
      </form>
    </>
  );
}
