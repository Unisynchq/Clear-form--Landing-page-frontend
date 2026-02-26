'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
  title?: string;
}

export default function FAQ({
  items = [
    {
      question: "When will I get access?",
      answer: "We are rolling out invites weekly to ensure the best experience. You'll hear from us soon."
    },
    {
      question: "Is there a free tier?",
      answer: "Yes, beta users will get a free forever tier with generous limits."
    }
  ],
  title = "Frequently Asked Questions"
}: FAQProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="faq-section my-28 w-full max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-slate-900 text-center mb-10">
        {title}
      </h2>
      <div className="space-y-0 text-left border-t border-slate-200">
        {items.map((item, index) => (
          <div key={index} className="faq-item border-b border-slate-200 group">
            <button
              onClick={() => toggleFAQ(index)}
              className="accordion-button w-full flex items-center justify-between py-5 text-left focus:outline-none"
            >
              <span className="font-medium text-slate-900 text-base md:text-lg transition-colors group-hover:text-blue-600">{item.question}</span>
              <svg
                className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFAQ === index ? 'transform rotate-180' : ''
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`accordion-content ${openFAQ === index ? 'open' : ''}`}
            >
              <div className="pb-6 text-slate-500 text-sm md:text-base leading-relaxed pr-8">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .accordion-button {
          transition: all 0.2s ease-out;
        }

        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.7s ease-out;
        }

        .accordion-content.open {
          max-height: 200px;
        }
      `}</style>
    </div>
  );
}
