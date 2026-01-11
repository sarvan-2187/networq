import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HeroButtonOne } from "@/components/HeroButtonOne";
import { HeroButtonTwo } from "@/components/HeroButtonTwo";

export function HeroSection() {
  return (
    <BackgroundBeamsWithCollision className="flex flex-col">
      <div className="flex flex-col items-center justify-center text-center gap-6 flex-1">

        {/* Tag */}
        <div className="font-sans px-3 py-1 text-sm rounded-full
          bg-blue-500/10 text-blue-200
          border border-blue-500/20
          backdrop-blur-sm">
          #Networq
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-semibold leading-tight tracking-tight
          bg-linear-to-b from-white via-slate-200 to-slate-400
          bg-clip-text text-transparent">
          Seamless Video Calling
          <br />
          <span className="bg-linear-to-r from-sky-400 to-blue-200 bg-clip-text text-transparent">
            at a Serious Quality
          </span>
        </h1>

        <p className="max-w-xl text-sm md:text-base text-slate-400">
          Built for low-latency, real-time communication with clarity you can trust.
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-4 mt-2">
          <HeroButtonOne />
          <HeroButtonTwo />
        </div>

      </div>
    </BackgroundBeamsWithCollision>
  );
}
