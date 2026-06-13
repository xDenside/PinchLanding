import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.scss";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pinch — знакомства внутри Telegram",
  description:
    "Pinch — это Telegram Mini App для знакомств. Открыл, посмотрел анкеты, лайкнул — и нашёл мэтч. Без лишних установок и скучных форм.",
  keywords: [
    "Pinch",
    "Telegram",
    "Mini App",
    "знакомства",
    "dating",
    "мэтчи",
    "анкеты",
  ],
  authors: [{ name: "Denis Volyanovskiy" }],
  openGraph: {
    title: "Pinch — знакомства внутри Telegram",
    description:
      "Telegram-native знакомства: профили, теги, лайки и мэтчи прямо в Telegram.",
    type: "website",
    locale: "ru_RU",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0610",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
