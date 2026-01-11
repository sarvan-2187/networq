import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HeroButtonOne } from "@/components/HeroButtonOne";
import { HeroButtonTwo } from "@/components/HeroButtonTwo";

export function HeroSection() {
  return (
    <BackgroundBeamsWithCollision className="flex flex-col gap-4 h-screen">
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <div className="font-sans bg-cyan-400/30 px-2 py-1 text-sm rounded-full border border-cyan-500">
          #Networq
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-semibold leading-tight">
          Seamless Video Calling
          <br/>at a Serious Quality
        </h1>
        <div className="flex flex-row gap-4">
          <HeroButtonOne />
          <HeroButtonTwo />
        </div>
      </div>
      
    </BackgroundBeamsWithCollision>
  );
}
