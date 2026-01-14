"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { v4 as uuid } from "uuid";

export function HeroButtonOne() {
    const router = useRouter();

    const handleStartMeeting = () => {
        const roomId = uuid();
        router.push(`/room/${roomId}`);
    };

    return (
        <div className="flex justify-center text-center">
            <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                onClick={handleStartMeeting}
                className="cursor-pointer dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
                <span className="flex gap-1 items-center text-md justify-center">
                    Start Meeting <ArrowUpRight />
                </span>
            </HoverBorderGradient>
        </div>
    );
}
