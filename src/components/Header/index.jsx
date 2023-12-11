import { NavLink } from "react-router-dom";
import { Timer } from "phosphor-react";

import logo from "../../assets/logo.svg";

import styles from "./Header.module.css";

export function Header() {
  return (
    // <HeaderContainer>
    //   <img src={igniteLogo} alt="" />
    //   <nav>
    //     <NavLink to="/" title="Timer">
    //       <Timer size={24} />
    //     </NavLink>
    //     <NavLink to="/history" title="Histórico">
    //       <Scroll size={24} />
    //     </NavLink>
    //   </nav>
    // </HeaderContainer>

    <header className={styles.header}>
      <img src={logo} alt="Logotipo da FertilizaStore" />
      <h1>FertilizaStore</h1>
      
    </header>
  );
}
