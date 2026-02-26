"use client";

import Image from "next/image";
import MeitY from "@/public/images/MeitYStartup.png";
import { motion } from "framer-motion";

export default function PreIncubated() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
            className="relative py-0 -mt-6 mb-4"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="pt-4 md:pt-0 flex flex-col items-center gap-3">
                    <div className="flex w-full items-center justify-center gap-4">
                        <div className="w-12 md:w-16 h-px bg-gray-200" />
                        <p className="text-center text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gray-500 whitespace-nowrap">
                            Supported by
                        </p>
                        <div className="w-12 md:w-16 h-px bg-gray-200" />
                    </div>
                    <Image
                        src={MeitY}
                        alt="MeitY Startup Hub"
                        width={310}
                        height={155}
                        className="object-contain opacity-80"
                    />
                </div>
            </div>
        </motion.section>
    );
}
