import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./HowItWorks.module.scss";

const STEPS = [
  {
    n: "01",
    title: "Открываешь бота в Telegram",
    text: "Переходишь в @pinchdatingbot и запускаешь Mini App. Ни установок, ни регистраций — вход через Telegram.",
    icon: "chat",
  },
  {
    n: "02",
    title: "Заполняешь профиль",
    text: "Добавляешь фото, город, рост и теги интересов. Пара минут — и анкета готова к ленте.",
    icon: "profile",
  },
  {
    n: "03",
    title: "Смотришь анкеты и находишь мэтчи",
    text: "Листаешь ленту, ставишь лайки и звёзды. Взаимный интерес — и можно писать.",
    icon: "heart",
  },
] as const;

function StepIcon({ icon }: { icon: (typeof STEPS)[number]["icon"] }) {
  if (icon === "chat") {
    return (
      <svg viewBox="0 0 48 48" className={styles.svg} aria-hidden="true">
        <path
          className={styles.draw}
          d="M8 12h32a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H20l-8 7v-7H8a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4Z"
        />
        <circle className={styles.blink} cx="17" cy="24" r="2.4" />
        <circle className={styles.blink} cx="24" cy="24" r="2.4" style={{ animationDelay: "0.2s" }} />
        <circle className={styles.blink} cx="31" cy="24" r="2.4" style={{ animationDelay: "0.4s" }} />
      </svg>
    );
  }

  if (icon === "profile") {
    return (
      <svg viewBox="0 0 48 48" className={styles.svg} aria-hidden="true">
        <circle className={styles.draw} cx="24" cy="17" r="8" />
        <path className={styles.draw} d="M9 40c0-8.3 6.7-15 15-15s15 6.7 15 15" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className={styles.svg} aria-hidden="true">
      <path
        className={styles.drawHeart}
        d="M24 41S6 30.5 6 17.5C6 11.7 10.7 7 16.5 7c3.4 0 6.4 1.7 8.3 4.3l-.8-.3C25.9 8.5 28.7 7 31.5 7 37.3 7 42 11.7 42 17.5 42 30.5 24 41 24 41Z"
      />
    </svg>
  );
}

export default function HowItWorks() {
  return (
    <section className={styles.how} id="how">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Как это работает"
          title="Три шага до первого мэтча"
          subtitle="От «открыл бота» до «нашёл своих» — без лишних движений."
        />

        <ol className={styles.steps}>
          {STEPS.map((step) => (
            <li key={step.n} className={styles.step}>
              <span className={styles.num}>{step.n}</span>
              <span className={styles.iconWrap}>
                <StepIcon icon={step.icon} />
              </span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.text}>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
