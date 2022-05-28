import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

import LogoImg from "../../../img/costs_logo.png";

export default function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={LogoImg} alt="Logo" />
        </Link>
      </div>

      <nav className={styles.headerNavbar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <Link to="/company">Company</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
