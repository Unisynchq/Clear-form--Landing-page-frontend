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
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Main Title */}
        <div className="mb-5 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
            Why Clearform Wins
          </h2>
          <p className="text-[17px] text-gray-600">
            See how Clearform transforms feedback collection
          </p>
        </div>

        {/* Comparison Flex Container */}
        <div className="relative flex flex-col md:flex-row">

          {/* Column 1: Traditional Forms (Muted/Recessed) */}
          <div className="flex-1 md:pr-4 md:py-8 transition-opacity duration-300 opacity-60 hover:opacity-100">
            <div className="bg-gray-100 rounded-2xl p-6 md:p-8 h-full border border-gray-200">
              <h3 className="text-lg md:text-xl font-extrabold text-gray-700 mb-6">Traditional Forms</h3>

              {/* Example Section */}
              <div className="mb-6 p-4 bg-gray-200/60 rounded-xl min-h-[64px] flex items-center">
                <p className="text-sm font-medium text-gray-500">Complex manual entry</p>
              </div>

              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className="pb-4 border-b border-gray-300 min-h-[64px] flex items-center">
                    <p className="text-base text-gray-600 leading-relaxed font-semibold">{item.traditional}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Clearform (Prominent/Primary) */}
          <div className="flex-1 relative z-10 -mt-6 md:mt-0 md:-ml-8 transition-transform duration-500 hover:scale-[1.02]">
            <div className="bg-white p-6 md:p-8 h-full rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100">
              <div className="mb-6">
                <Image
                  src={ClearformLogo}
                  width={150}
                  height={48}
                  alt="Clearform Logo"
                  className="h-auto w-auto"
                />
              </div>

              {/* Example Section */}
              <div className="mb-6 p-4 bg-green-50/50 rounded-xl border border-green-200 min-h-[64px] flex items-center">
                <p className="text-sm font-bold text-gray-900">Intelligent, frictionless flow</p>
              </div>

              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className="pb-4 border-b border-gray-100 min-h-[64px] flex items-center">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 shrink-0">
                        <span className="text-green-600 font-bold text-sm">✓</span>
                      </div>
                      <p className="text-base text-gray-900 font-bold leading-relaxed">{item.clearform}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA Text */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 max-w-2xl text-[18px] mx-auto">
            Experience the difference between collecting feedback and understanding it.
            Clearform delivers clarity, not clutter.
          </p>
        </div>
      </div>
    </section>
  );
}