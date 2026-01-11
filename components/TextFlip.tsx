"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

export function TextFlip() {
    return (
        <div>
            <motion.div className="relative mx-4 my-4 flex items-center justify-center gap-4 text-center text-sm sm:mx-0 sm:mb-0 flex-row">
                <LayoutTextFlip
                    text="Powered by"
                    words={["ZegoCloud", "Vercel", "Next.js"]}
                />
            </motion.div>
        </div>
    );
}
