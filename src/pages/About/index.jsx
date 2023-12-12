import { useNavigate } from "react-router-dom";

import { Phone  } from "phosphor-react";

import styles from "./About.module.css";

export const About = () => {
  const navigate = useNavigate();

  const handleNavigateToContact = () => {
    navigate("/contato");
  };

  return (
    <div className={styles.aboutContainer}>
      <span>Sobre a </span>
      <h1>FertilizaStore</h1>
      <p>
        Bem-vindo à FertilizaStore, sua principal fonte para produtos agrícolas
        de alta qualidade. Nosso compromisso é fornecer soluções inovadoras e
        sustentáveis para atender às necessidades dos agricultores e
        pecuaristas, contribuindo para o crescimento e prosperidade no setor
        agropecuário.
      </p>
      <p>
        Na FertilizaStore, acreditamos na importância de práticas agrícolas
        responsáveis e na promoção da produtividade sustentável. Nossa equipe
        dedicada trabalha em estreita colaboração com produtores para oferecer
        orientação especializada, os melhores produtos e as últimas tecnologias
        no campo.
      </p>
      <p>
        Além disso, comprometemo-nos a manter os mais altos padrões de qualidade
        em nosso catálogo de produtos. Desde fertilizantes e pesticidas até
        equipamentos e serviços de consultoria, cada item foi selecionado para
        garantir resultados eficazes e positivos para sua produção.
      </p>
      <p>
        Explore a FertilizaStore e descubra como podemos impulsionar o sucesso
        da sua operação agrícola. Estamos aqui para apoiar o seu crescimento,
        oferecendo produtos confiáveis e um serviço excepcional.
      </p>

      <button onClick={handleNavigateToContact}>
        <Phone  size={24} /> Entre em contato
      </button>
    </div>
  );
};
