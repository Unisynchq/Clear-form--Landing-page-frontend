'use client';

import PageIllustration from "@/components/page-illustration";
import Link from "next/link";
import GradientText from "@/components/gradient-text";
import { motion } from "framer-motion";

export default function HeroHome() {
    return (
        <section className="relative">

            <PageIllustration />
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                {/* Hero content */}
                <div className="pb-8 pt-24 md:pb-0 md:pt-28">
                    {/* Section header */}
                    <div className="pb-8 text-center md:pb-0">
                        <div className="mb-4">
                            <style>{`
                                @keyframes ping-green {
                                    75%, 100% { transform: scale(2); opacity: 0; }
                                }
                            `}</style>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                                className="mb-2 inline-flex items-center gap-2 border border-gray-200/60 rounded-full px-5 py-2"
                            >
                                <span className="relative flex h-2.5 w-2.5">
                                    <span
                                        className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                                        style={{ animation: "ping-green 1.4s cubic-bezier(0, 0, 0.2, 1) infinite" }}
                                    />
                                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                                </span>
                                <span className="text-sm font-medium text-gray-700">Beta is Live</span>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
                            className="mb-6 flex justify-center"
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 text-center max-w-3xl leading-tight">
                                Forms Built for{" "}
                                <GradientText
                                    colors={["#0f172a", "#475569", "#94a3b8", "#475569", "#0f172a"]}
                                    animationSpeed={10}
                                    direction="horizontal"
                                    pauseOnHover
                                    className="font-extrabold"
                                >
                                    Clarity
                                </GradientText>
                                , Not Just Collection.
                            </h1>
                        </motion.div>
                        <div className="mx-auto max-w-xl">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                                className="mb-5 text-base text-gray-600"
                            >
                                Clearform improves response quality at the source — so teams receive structured, decision-ready feedback instead of vague opinions.

                            </motion.p>
                            <div className="relative before:absolute before:inset-0 before:border-t before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
                                    className="flex flex-col items-center justify-center mx-auto pt-4 pb-5 max-w-sm"
                                >
                                    <Link href="/early-access">
                                        <button
                                            className="bg-slate-900 px-6 py-2.5 text-white rounded-xl whitespace-nowrap font-semibold shadow-md transition-all duration-300 text-base tracking-wide group hover:bg-slate-800"
                                        >
                                            <span className="relative z-10 flex items-center justify-center gap-2">
                                                Get Early Access
                                                <span className="group-hover:translate-x-1 transition-transform duration-200 flex items-center">
                                                    <svg className="w-5 h-5 -mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                                    </svg>
                                                </span>
                                            </span>
                                        </button>
                                    </Link>
                                    <p className="text-sm mx-auto text-gray-600 mt-3 text-center sm:text-left">
                                        Free early access. Limited pilot spots for startups & product teams.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    {/* Hero image */}
                    <div
                        className="mx-auto max-w-3xl"
                        data-aos="zoom-y-out"
                        data-aos-delay={600}
                    >
                    </div>
                </div>
            </div>
        </section >
    );
}
