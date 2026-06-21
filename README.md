# Pinch — лендинг

Промо-страница для Pinch, Telegram Mini App для знакомств.
Бот: [@pinchdatingbot](https://t.me/pinchdatingbot)

Сам Pinch — отдельный проект, живёт внутри Telegram. В этой репе только
лендинг к нему.

## Стек

Next.js 16 (App Router), React 19, TypeScript, SCSS-модули. Без Tailwind и
без UI-китов — вся вёрстка руками, на CSS Grid и Flexbox. Шрифт Manrope через
`next/font`, картинки через `next/image`. Анимации только на CSS и SVG.

## Запуск

Нужен Node 20.9+.

```
npm install
npm run dev      # http://localhost:3000
npm run build    # прод-сборка
npm run start
```

## Структура

```
app/                 layout, page, globals.scss
components/          секции лендинга, у каждой свой .module.scss
styles/             variables.scss, mixins.scss
lib/site.ts         ссылка на бота
public/screenshots  скриншоты приложения
```

Секции по порядку: hero, вайб, возможности, как это работает, стек продукта,
скриншоты, финальный CTA.

## Про сам Pinch

Продукт написан на JavaScript:

- фронт — Telegram Mini App на Vite
- бэк — Node.js + Express, REST API
- база — PostgreSQL
- медиа — S3 + Sharp
- модерация фото — TensorFlow.js (nsfwjs)
- авторизация через Telegram init data, Sentry, Docker

На лендинге это собрано в блоке «Что внутри». Скриншоты в `public/screenshots`
взяты из приложения, анкеты на них — заглушки.

## Деплой
