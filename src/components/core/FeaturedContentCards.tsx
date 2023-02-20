import styles from "@/styles/ContentCard.module.css";
import ContentCard from "@/components/core/ContentCard";

type ComponentProps = {
  children?: React.ReactNode;
  className?: string;
  title?: string;
};

export default function FeaturedContentCards({
  children,
  className,
  title,
}: ComponentProps) {
  return (
    <section
      className={`${styles.scrollContainer} container-inner ${className}`}
    >
      {title && <h2 className={styles.heading}>{title}</h2>}

      <section className={`${styles.container}`}>{children}</section>
    </section>
  );
}
