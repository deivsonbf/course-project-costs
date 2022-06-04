import styles from "./LinkButton.module.scss";
import { Link } from "react-router-dom";

export default function LinkButton({ to, text }) {
  return (
    <Link className={styles.linkbutton} to={to}>
      {text}
    </Link>
  );
}
