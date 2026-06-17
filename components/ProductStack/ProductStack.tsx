import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./ProductStack.module.scss";

const GROUPS = [
  {
    label: "Frontend",
    tags: ["Telegram Mini App", "JavaScript", "Vite", "Адаптивный UI"],
  },
  {
    label: "Backend",
    tags: ["Node.js", "Express", "REST API", "Telegram-авторизация"],
  },
  {
    label: "Данные и медиа",
    tags: ["PostgreSQL", "AWS S3", "Sharp", "Загрузка фото"],
  },
  {
    label: "Модерация и инфра",
    tags: ["NSFW-модерация (TensorFlow.js)", "Docker", "Sentry", "Деплой"],
  },
];

export default function ProductStack() {
  return (
    <section className={styles.stack} id="stack">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Что внутри Pinch"
          title="Собрано как полноценный продукт"
          subtitle="Это не прототип на коленке. Фронтенд, бэкенд, база, медиа и деплой — всё собрано и работает вместе."
        />

        <div className={styles.groups}>
          {GROUPS.map((group) => (
            <div key={group.label} className={styles.group}>
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <ul className={styles.tags}>
                {group.tags.map((tag) => (
                  <li key={tag} className={styles.tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
