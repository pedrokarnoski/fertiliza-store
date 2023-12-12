import { useNavigate } from "react-router-dom";

import { Smiley } from "phosphor-react";

import styles from "./Home.module.css";

export const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToProducts = () => {
    navigate("/produtos");
  };

  return (
    <div className={styles.container}>
      <img
        src="https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background"
        className={styles.backgroundImage}
      />
      <div className={styles.overlay}>
        <h1>Bem-vindo à FertilizaStore</h1>
        <p>
          Sua fonte confiável para produtos agrícolas e pecuários de alta
          qualidade.
        </p>
        <button onClick={handleNavigateToProducts}>
          <Smiley size={24} />
          Conhecer a loja
        </button>
      </div>
    </div>
  );
};
