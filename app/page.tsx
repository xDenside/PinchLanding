import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Vibe from "@/components/Vibe/Vibe";
import Features from "@/components/Features/Features";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import ProductStack from "@/components/ProductStack/ProductStack";
import ScreenshotGallery from "@/components/ScreenshotGallery/ScreenshotGallery";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Vibe />
        <Features />
        <HowItWorks />
        <ProductStack />
        <ScreenshotGallery />
      </main>
    </>
  );
}
