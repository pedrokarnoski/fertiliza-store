import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.svg";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logotipo da FertilizaStore" />
        <h1>FertilizaStore</h1>
      </div>
      <nav className={styles.nav}>
        <NavLink to="/" title="Início" activeClassName={styles.activeLink}>
          Início
        </NavLink>
        <NavLink
          to="/produtos"
          title="Produtos"
          activeClassName={styles.activeLink}
        >
          Produtos
        </NavLink>
        <NavLink
          to="/servicos"
          title="Serviços"
          activeClassName={styles.activeLink}
        >
          Serviços
        </NavLink>
        <NavLink to="/sobre" title="Sobre" activeClassName={styles.activeLink}>
          Sobre
        </NavLink>
        <NavLink
          to="/contato"
          title="Contato"
          activeClassName={styles.activeLink}
        >
          Contato
        </NavLink>
      </nav>
    </header>
  );
}
