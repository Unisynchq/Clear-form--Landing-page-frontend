'use client';

import Image from "next/image";
import ClearformLogo from "@/public/images/logowname.png";

export default function ComparisonTable() {
  const comparisonData = [
    {
      traditional: "Collect raw responses",
      clearform: "Improve response quality at the source"
    },
    {
      traditional: "Quantity-driven metrics",
      clearform: "Decision-ready clarity, every time"
    },
    {
      traditional: "Analyze after submission",
      clearform: "Advanced trends and analysis in one go"
    },
    {
      traditional: "Manual filtering required",
      clearform: "Escalation on the spot — with your notes"
    },
    {
      traditional: "Dashboards full of noise",
      clearform: "One view. All your forms. All your signals."
    }
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Main Title */}
        <div className="mb-3 text-center">
          <h2 className="mb-1 text-2xl font-bold text-gray-900 md:text-4xl">
            Why Clearform Wins
          </h2>
          <p className="text-base text-gray-600">
            See how Clearform transforms feedback collection
          </p>
        </div>

        {/* Comparison Flex Container */}
        <div className="relative flex flex-col md:flex-row">

          {/* Column 1: Traditional Forms (Muted/Recessed) */}
          <div className="flex-1 opacity-60 transition-opacity duration-300 hover:opacity-100 md:basis-[46%] md:flex-none md:py-4 md:pr-3">
            <div className="h-full rounded-2xl border border-gray-200 bg-gray-100 p-4 md:p-5">
              <h3 className="mb-4 text-base font-extrabold text-gray-700 md:text-lg">Traditional Forms</h3>

              {/* Example Section */}
              <div className="mb-4 flex min-h-12 items-center rounded-xl bg-gray-200/60 p-2.5">
                <p className="text-sm font-medium text-gray-500">Complex manual entry</p>
              </div>

              <div className="space-y-2">
                {comparisonData.map((item, index) => (
                  <div key={index} className="flex min-h-12 items-center border-b border-gray-300 pb-2">
                    <p className="text-sm font-semibold leading-relaxed text-gray-600 md:text-base">{item.traditional}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Clearform (Prominent/Primary) */}
          <div className="relative z-10 -mt-4 flex-1 transition-transform duration-500 hover:scale-[1.01] md:-ml-6 md:mt-0 md:basis-[54%] md:flex-none">
            <div className="h-full rounded-3xl border border-gray-100 bg-white p-4 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] md:p-5">
              <div className="mb-4">
                <Image
                  src={ClearformLogo}
                  width={130}
                  height={42}
                  alt="Clearform Logo"
                  className="h-auto w-auto"
                />
              </div>

              {/* Example Section */}
              <div className="mb-4 flex min-h-12 items-center rounded-xl border border-green-200 bg-green-50/50 p-2.5">
                <p className="text-sm font-bold text-gray-900">Intelligent, frictionless flow</p>
              </div>

              <div className="space-y-2">
                {comparisonData.map((item, index) => (
                  <div key={index} className="flex min-h-12 items-center border-b border-gray-100 pb-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100">
                        <span className="text-xs font-bold text-green-600">✓</span>
                      </div>
                      <p className="text-sm font-bold leading-relaxed text-gray-900 md:text-base">{item.clearform}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA Text */}
        <div className="mt-5 text-center">
          <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-[17px]">
            Experience the difference between collecting feedback and understanding it.
            Clearform delivers clarity, not clutter.
          </p>
        </div>
      </div>
    </section>
  );
}