'use client';

export default function ModernAlternative() {
  return (
    <div className="relative pt-10 pb-2 sm:pt-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-left space-y-8" data-aos="fade-up" data-aos-duration="900">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            A Modern Alternative
            <br />
            to Traditional Form Builders
          </h2>

          {/* Divider */}
          <div>
            <div className="h-1 w-16 bg-linear-to-r from-gray-900 via-slate-500 to-gray-300 rounded-full" />
          </div>

          {/* Subtitle */}
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
            Most form builders collect noise. Clearform collects clarity. By intelligently guiding users as they respond, we transform raw feedback into actionable insights — no cleanup required.
          </p>

        </div>
      </div>
    </div>
  );
}
