import Image from "next/image";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./ScreenshotGallery.module.scss";

const SHOTS = [
  {
    src: "/screenshots/pinch-loading.png",
    alt: "Экран загрузки Pinch с фирменным логотипом",
    caption: "Заставка",
  },
  {
    src: "/screenshots/pinch-feed.png",
    alt: "Лента анкет Pinch с кнопками лайка, звезды и тегами",
    caption: "Лента анкет",
  },
  {
    src: "/screenshots/pinch-profile.png",
    alt: "Профиль пользователя в Pinch с тегами интересов и описанием",
    caption: "Профиль",
  },
];

export default function ScreenshotGallery() {
  return (
    <section className={styles.gallery} id="screens">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Скриншоты"
          title="Как Pinch выглядит вживую"
          subtitle="Заставка, лента и профиль — тот самый тёмно-романтичный интерфейс прямо из приложения."
        />

        <div className={styles.row}>
          {SHOTS.map((shot, i) => (
            <figure key={shot.src} className={`${styles.item} ${styles[`pos${i}`]}`}>
              <div className={styles.screen}>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 860px) 80vw, 300px"
                  className={styles.shot}
                />
              </div>
              <figcaption className={styles.caption}>{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
