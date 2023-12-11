import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.container}>
      
      <main className={styles.main}>
        <section className={styles.featuredProducts}>
          <h2>Produtos em Destaque</h2>
          {/* Aqui você pode adicionar componentes ou seções relacionadas aos produtos */}
        </section>
        <section className={styles.aboutUs}>
          <h2>Quem Somos</h2>
          <p>Breve descrição da FertilizaStore e seus valores.</p>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2023 FertilizaStore. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};
