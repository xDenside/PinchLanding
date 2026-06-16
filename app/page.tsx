import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Vibe from "@/components/Vibe/Vibe";
import Features from "@/components/Features/Features";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Vibe />
        <Features />
      </main>
    </>
  );
}
