import AnimatedLogo from "@/components/AnimatedLogo/AnimatedLogo";
import { BOT_URL } from "@/lib/site";
import styles from "./Header.module.scss";

const NAV = [
  { href: "#vibe", label: "Вайб" },
  { href: "#features", label: "Возможности" },
  { href: "#how", label: "Как это работает" },
  { href: "#stack", label: "Что внутри" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand} aria-label="Pinch — на главную">
          <AnimatedLogo compact />
        </a>

        <nav className={styles.nav} aria-label="Основная навигация">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className={styles.cta}
          href={BOT_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Открыть Pinch
        </a>
      </div>
    </header>
  );
}
