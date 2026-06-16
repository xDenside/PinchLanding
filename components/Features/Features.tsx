import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./Features.module.scss";

type Feature = {
  icon: string;
  title: string;
  text: string;
};

const FEATURES: Feature[] = [
  {
    icon: "✈️",
    title: "Telegram Mini App",
    text: "Работает прямо внутри Telegram — без сторов, скачиваний и отдельных аккаунтов.",
  },
  {
    icon: "🖼️",
    title: "Профили и фотографии",
    text: "Фото на весь экран, рост, город, интересы и пара слов о себе. Анкета, которую хочется листать.",
  },
  {
    icon: "💗",
    title: "Лайки и мэтчи",
    text: "Лайк, звезда-суперлайк или мимо. Совпало у обоих — это мэтч, можно писать.",
  },
  {
    icon: "🏷️",
    title: "Теги интересов",
    text: "Alt, Chill, Social, Bars, Nightclubs и десятки других — находи своих по вайбу.",
  },
  {
    icon: "⚡",
    title: "Premium / Plus",
    text: "Статусы OG и Plus выделяют анкету и дают больше лайков, суперлайков и внимания.",
  },
  {
    icon: "🔔",
    title: "Медиа и уведомления",
    text: "Фото, реакции и пуши о новых лайках и мэтчах — ничего не пропустишь.",
  },
  {
    icon: "🚀",
    title: "Быстрый вход через Telegram",
    text: "Вход в один тап через аккаунт Telegram. Никаких новых паролей и регистраций.",
  },
  {
    icon: "📱",
    title: "Адаптивный интерфейс",
    text: "Удобно и на телефоне, и на десктопе — интерфейс подстраивается под экран.",
  },
];

export default function Features() {
  return (
    <section className={styles.features} id="features">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Возможности"
          title="Всё, что нужно для знакомств"
          subtitle="Ничего лишнего — только то, что помогает быстрее найти своих."
        />

        <ul className={styles.grid}>
          {FEATURES.map((feature) => (
            <li key={feature.title} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">
                {feature.icon}
              </span>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.text}>{feature.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
