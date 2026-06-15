import styles from "./FloatingTags.module.scss";

type FloatTag = {
  label: string;
  tone: "like" | "star" | "violet" | "blue" | "plus" | "pin";
  style: React.CSSProperties;
};

const TAGS: FloatTag[] = [
  { label: "♥", tone: "like", style: { top: "8%", right: "2%", animationDelay: "0s" } },
  { label: "★", tone: "star", style: { top: "30%", left: "-6%", animationDelay: "0.8s" } },
  { label: "Alt", tone: "violet", style: { top: "2%", left: "12%", animationDelay: "1.4s" } },
  { label: "😮‍💨 Chill", tone: "blue", style: { bottom: "20%", left: "-10%", animationDelay: "0.4s" } },
  { label: "⚡ Plus", tone: "plus", style: { top: "52%", right: "-8%", animationDelay: "1.1s" } },
  { label: "📍 Moscow", tone: "pin", style: { bottom: "6%", right: "4%", animationDelay: "1.8s" } },
];

export default function FloatingTags() {
  return (
    <div className={styles.field} aria-hidden="true">
      {TAGS.map((tag) => (
        <span
          key={tag.label}
          className={`${styles.tag} ${styles[tag.tone]}`}
          style={tag.style}
        >
          {tag.label}
        </span>
      ))}
    </div>
  );
}
