import AnimatedLogo from "@/components/AnimatedLogo/AnimatedLogo";
import { BOT_HANDLE, BOT_URL } from "@/lib/site";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <AnimatedLogo compact />
          <p className={styles.tagline}>Знакомства внутри Telegram.</p>
        </div>

        <nav className={styles.links} aria-label="Навигация по странице">
          <a href="#vibe">Вайб</a>
          <a href="#features">Возможности</a>
          <a href="#how">Как это работает</a>
          <a href="#stack">Что внутри</a>
          <a href={BOT_URL} target="_blank" rel="noopener noreferrer">
            {BOT_HANDLE}
          </a>
        </nav>
      </div>

      <div className={styles.bottom}>
        <span>© 2026 Pinch</span>
        <span>Автор — Denis Volyanovskiy</span>
      </div>
    </footer>
  );
}
