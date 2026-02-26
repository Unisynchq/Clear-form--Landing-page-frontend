export default function ScrollIndicator() {
    return (
        <section className="flex flex-col items-center justify-center pt-0 pb-2 gap-0 select-none -mt-8">
            <span className="text-xs font-bold tracking-[0.35em] text-gray-400 uppercase mb-0">
                Scroll
            </span>

            <div className="flex flex-col items-center">
                <svg
                    className="w-5 h-6 text-gray-400"
                    style={{ animation: "chevron-bounce 1.6s ease-in-out infinite" }}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 6l-7 7-7-7M19 13l-7 7-7-7" />
                </svg>
            </div>

            <style>{`
        @keyframes chevron-bounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50%       { transform: translateY(3px); opacity: 0.5; }
        }
      `}</style>
        </section>
    );
}
