import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./Vibe.module.scss";

const CARDS = [
  {
    title: "Не очередная анкета",
    text: "Pinch — это не унылая форма на десять полей. Это лента живых людей, тегов и настроений, которую хочется листать.",
  },
  {
    title: "Визуально и быстро",
    text: "Фото на весь экран, понятные кнопки, мгновенные реакции. Лайк, звезда или мимо — решение за секунду.",
  },
  {
    title: "Telegram-native",
    text: "Никаких отдельных приложений и регистраций. Вход через Telegram, всё работает там, где ты уже сидишь.",
  },
  {
    title: "Вокруг интересов",
    text: "Alt, Chill, Social, Bars, Nightclubs — теги собирают тех, кто на одной волне, а не просто рядом на карте.",
  },
];

export default function Vibe() {
  return (
    <section className={styles.vibe} id="vibe">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Вайб"
          title={
            <>
              Всё крутится вокруг профилей, тегов,{" "}
              <span className={styles.accent}>лайков и мэтчей</span>
            </>
          }
          subtitle="Быстро, наглядно и прямо в Telegram. Всё нужное под рукой, ничего лишнего."
        />

        <div className={styles.grid}>
          {CARDS.map((card) => (
            <article key={card.title} className={styles.card}>
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.text}>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
