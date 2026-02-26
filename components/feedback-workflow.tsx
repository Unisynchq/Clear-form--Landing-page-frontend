'use client';

export default function FeedbackWorkflow() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div
          className="space-y-6"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            A Complete Feedback Workflow for Modern Teams
          </h2>

          {/* Accent Line */}
          <div className="h-1 w-24 bg-linear-to-r from-gray-900 via-slate-500 to-gray-300 rounded-full" />

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            Clearform helps you <span className="text-blue-600 font-bold">monitor</span> incoming responses, <span className="text-blue-600 font-bold">measure</span> their quality and completeness, and <span className="text-blue-600 font-bold">act</span> on structured insights — without messy dashboards or manual analysis.
          </p>
        </div>
      </div>
    </div>
  );
}
