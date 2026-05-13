import Link from "next/link";

export const metadata = { title: 'Payment Received — Clearform' };

export default function ThankYouPage() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-white px-4">
      <div className="max-w-lg w-full text-center">

        {/* Success icon */}
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
          Payment received!
        </h1>
        <p className="text-lg text-gray-500 mb-10 leading-relaxed">
          Welcome to the Clearform Pilot. You&apos;re all set — we&apos;ll be in touch within 24 hours to kick things off.
        </p>

        {/* Next steps */}
        <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 mb-10 text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">What happens next</p>
          <ul className="space-y-3">
            {[
              "You'll get a confirmation email with your receipt",
              "We'll reach out within 24 hours to schedule your onboarding call",
              "We'll set up Clearform for your product together",
              "You'll start collecting structured, actionable feedback immediately",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Book onboarding CTA */}
        <a
          href="https://cal.com/abbubakar-mohammed-clearform/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3.5 text-base font-semibold text-white shadow transition-all hover:-translate-y-0.5 hover:bg-black mb-6"
        >
          Book your onboarding call
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>

        <div className="block">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Clearform
          </Link>
        </div>
      </div>
    </main>
  );
}
