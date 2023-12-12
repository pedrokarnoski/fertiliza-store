import { ServiceCard } from "../../components/ServiceCard";

import styles from "./Services.module.css";

const services = [
  {
    id: 1,
    name: "Assessoria Técnica",
    description:
      "Serviço de consultoria técnica para otimizar a produção agrícola.",
    price: "Entre R$ 2.020 e R$ 10.561",
    image:
      "https://agropos.com.br/wp-content/uploads/2022/05/Consultoria-Agricola-2.jpg",
  },
  {
    id: 2,
    name: "Manejo Integrado de Pragas",
    description:
      "Implementação de estratégias para controle de pragas de forma sustentável.",
    price: "Análise de preço",
    image: "https://blog.chbagro.com.br/user-files/blog/159648.jpg",
  },
  {
    id: 3,
    name: "Fertilização de Solo",
    description:
      "Análise e aplicação de fertilizantes para melhorar a qualidade do solo.",
    price: "Análise de preço",
    image:
      "https://www.mundohusqvarna.com.br/img_artigos/img_g/capa-artigo-f-19-12-87.png",
  },
];

export const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <h1>Nossos serviços</h1>
      <div className={styles.serviceGrid}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};
