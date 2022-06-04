import styles from "./Home.module.scss";
import savings from "../img/savings.svg";
import LinkButton from "./../Components/content/LinkButton/LinkButton";

export default function Home() {
  return (
    <>
      <section className={styles.homeWrapper}>
        <h1>
          Bem-vindo ao <span>Costs</span>
        </h1>
        <LinkButton to="/newproject" text="Novo Projeto" />
        <img src={savings} alt="home" />
      </section>
    </>
  );
}
