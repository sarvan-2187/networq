import BannerSection from "@/sections/banner";
import FooterSection from "@/sections/FooterSection";
import { HeroSection } from "@/sections/hero";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="bg-black text-white flex flex-col">
        <HeroSection />
        <BannerSection />
        <FooterSection/>
      </main>
    </>
  );
}
