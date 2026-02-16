'use client';

export default function HeroDemo() {
    return (
        <div>
            {/* Hero image */}
            <div
                className="mx-auto max-w-3xl"
                data-aos="zoom-y-out"
                data-aos-delay={600}
            >
                <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]">
                    <div className="relative mb-8 flex items-center justify-between before:block before:h-2.25 before:w-10.25 before:bg-size-[16px_9px] before:bg-[radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-10.25">
                        <span className="text-[13px] font-medium text-white">
                            clearform's inbox
                        </span>
                    </div>
                    <div className="font-mono text-gray-500 [&_span]:opacity-0">
                        <span className="animate-[code-1_10s_infinite] text-gray-200">
                            Customer: "How do you prioritize feature requests?"
                        </span>
                        <br />
                        <span className="animate-[code-2_10s_infinite]">
                            Response: "We collect feedback through surveys and prioritize based on impact..."
                        </span>
                        <br />
                        <br />
                        <span className="animate-[code-3_10s_infinite] text-gray-200">
                            ✓ Response quality: High
                        </span>
                        <br />
                        <span className="animate-[code-4_10s_infinite]">
                            ✓ Assigned to: Product Team | Status: In Review
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
