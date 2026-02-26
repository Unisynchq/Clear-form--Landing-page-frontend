'use client';

import Link from "next/link";

export default function Cta() {
  return (
    <section className="relative my-16">
      {/* Subtle fading top separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-300/60 to-transparent mb-16" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 mb-4">
          Limited Early Access
        </p>

        {/* Headline */}
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 mb-3 leading-tight">
          Start measuring what matters.
        </h2>

        <p className="text-gray-500 text-base max-w-md mx-auto mb-10">
          Join teams already using Clearform to turn feedback into clear decisions.
        </p>

        <Link href="/early-access">
          <button className="inline-flex items-center gap-3 bg-gray-900 text-white px-9 py-4 rounded-xl font-semibold text-base tracking-wide shadow-md hover:bg-gray-800 transition-all duration-200 group">
            Get Early Access
            <span className="group-hover:translate-x-0.5 transition-transform duration-200 flex items-center">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </Link>

        <p className="text-xs text-gray-400 mt-4">Free during beta · No credit card needed</p>
      </div>
    </section>
  );
}
