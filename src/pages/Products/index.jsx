import { ProductCard } from "../../components/ProductCard";

import styles from "./Products.module.css";

const products = [
  {
    id: 1,
    name: "Adubo Orgânico",
    description:
      "Adubo 100% orgânico, rico em nutrientes essenciais para o crescimento saudável das plantas.",
    price: "R$19,99",
    image: "https://a-static.mlcdn.com.br/450x450/humus-de-minhoca-adubo-organico-100-natural-2kg-mogifertil-mogifertil/florabrasilpaisagismo/67af610ee5d111ed80de4201ac185033/4e54c1eb7f9187a9a23ea6d2d1ba90b0.jpeg",
  },
  {
    id: 2,
    name: "Sementes de Tomate Heirloom",
    description:
      "Sementes de tomate Heirloom de alta qualidade, ideais para o cultivo de tomates saborosos.",
    price: "R$4,99",
    image: "https://1362643621.rsc.cdn77.org/temp/1655514632_4f8c28432bc0b8d3eb28d0b13cf4d355.jpg",
  },
  {
    id: 3,
    name: "Fertilizante Líquido para Gramado",
    description:
      "Fertilizante líquido concentrado para um gramado verde e saudável durante toda a estação.",
    price: "R$14,99",
    image: "https://779028l.ha.azioncdn.net/img/2021/07/produto/9646/forth-gramado-3kg.jpg?ims=fit-in/490x490/filters:fill(white)",
  },
  {
    id: 4,
    name: "Sementes de Cenoura Orgânica",
    description:
      "Sementes orgânicas de cenoura, cultivadas sem pesticidas, para uma colheita nutritiva e saborosa.",
    price: "R$3,99",
    image: "https://images.tcdn.com.br/img/img_prod/799330/sementes_de_cenoura_brasilia_100_organica_korin_2783_1_6d6aa26cfc8ec7fa8bb66773b95edf84.jpg",
  },
];

export const Products = () => {
  return (
    <div className={styles.productsContainer}>
      <h1>Produtos de Agropecuária</h1>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
