"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";

export function HeroButtonTwo() {
    return (
        <div className="flex justify-center text-center">
            <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-white text-black flex items-center space-x-2"
            >
                <Link className="flex gap-1 items-center justify-center text-md" href="/route">View Demo</Link>
            </HoverBorderGradient>
        </div>
    );
}

