import styles from "./ServiceCard.module.css";

export function ServiceCard({ service }) {
  return (
    <div className={styles.serviceCard}>
      <img
        src={service.image}
        alt={service.name}
        className={styles.serviceImage}
      />
      <h3 className={styles.serviceName}>{service.name}</h3>
      <p className={styles.serviceDescription}>{service.description}</p>
      <p className={styles.servicePrice}>{service.price}</p>
    </div>
  );
}
