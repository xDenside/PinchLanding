import { BOT_HANDLE, BOT_URL } from "@/lib/site";
import styles from "./FinalCta.module.scss";

export default function FinalCta() {
  return (
    <section className={styles.cta} id="open">
      <div className={styles.inner}>
        <div className={styles.panel}>
          <span className={styles.spark} aria-hidden="true" />

          <h2 className={styles.title}>
            Зайди в Pinch и посмотри, <span className={styles.accent}>кто рядом</span>
          </h2>
          <p className={styles.text}>
            Открой бота, заполни профиль и начни листать анкеты. Первый мэтч —
            ближе, чем кажется.
          </p>

          <a
            className={styles.button}
            href={BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Открыть Pinch в Telegram
          </a>

          <span className={styles.handle}>{BOT_HANDLE}</span>
        </div>
      </div>
    </section>
  );
}
