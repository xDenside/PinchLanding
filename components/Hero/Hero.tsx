import FloatingTags from "@/components/FloatingTags/FloatingTags";
import PhoneShowcase from "@/components/PhoneShowcase/PhoneShowcase";
import { BOT_HANDLE, BOT_URL } from "@/lib/site";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.badge}>
            <span className={styles.dot} aria-hidden="true" />
            Telegram Mini App · {BOT_HANDLE}
          </span>

          <h1 className={styles.title}>
            Знакомства прямо <span className={styles.accent}>внутри Telegram</span>
          </h1>

          <p className={styles.lead}>
            Pinch — это Mini App, где люди знакомятся, листают анкеты, ставят
            лайки и находят мэтчи, не выходя из Telegram. Без лишних установок.
            Без скучных форм. Просто открыл, посмотрел, лайкнул.
          </p>

          <div className={styles.actions}>
            <a
              className={styles.primary}
              href={BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Открыть Pinch
            </a>
            <a className={styles.secondary} href="#features">
              Посмотреть возможности
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <FloatingTags />
          <PhoneShowcase
            src="/screenshots/pinch-feed.png"
            alt="Лента анкет в приложении Pinch с лайками и тегами"
            priority
          />
        </div>
      </div>
    </section>
  );
}
