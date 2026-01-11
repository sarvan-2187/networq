import BannerSection from "@/sections/banner";
import { HeroSection } from "@/sections/hero";

import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeroSection/>
      <BannerSection />
    </main>
  );
}
