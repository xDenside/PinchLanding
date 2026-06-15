import Image from "next/image";
import styles from "./PhoneShowcase.module.scss";

type PhoneShowcaseProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export default function PhoneShowcase({
  src,
  alt,
  priority = false,
}: PhoneShowcaseProps) {
  return (
    <div className={styles.phone}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.frame}>
        <div className={styles.screen}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 860px) 70vw, 320px"
            className={styles.shot}
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}
