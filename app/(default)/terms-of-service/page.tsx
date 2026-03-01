export default function TermsOfServicePage() {
    return (
        <section className="min-h-screen px-4 py-16 ">
            <div className="mx-auto max-w-4xl">
                <div className="mb-8 ">
                    <div className="pb-3">
                        <h1 className="mb-1 text-5xl font-bold text-gray-900 md:text-6xl text-center">Terms of Service</h1>
                    </div>
                    <div className="pl-5 flex justify-center gap-3">
                        <p className="text-gray-600 text-center">Effective Date: [27-02-2026]</p>
                        <p className="text-gray-600 text-center">Last Updated: [27-02-2026]</p>
                    </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg md:p-12">
                    <div className="mb-10 space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            These Terms of Service (“Terms”) govern your access to and use of Clearform (“Clearform”, “we”, “our”, or “us”), including our website, platform, and related services.
                        </p>
                        <p>By accessing or using Clearform, you agree to be bound by these Terms.</p>
                        <p>If you do not agree, you must not use the platform.</p>
                    </div>

                    <div className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">1. Description of Service</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">Clearform provides an online platform that enables users to:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Create forms</li>
                            <li>Collect responses</li>
                            <li>Analyze structured feedback</li>
                            <li>Monitor response quality and trends</li>
                        </ul>
                        <p className="mt-4 text-gray-700 leading-relaxed">We reserve the right to modify, update, or discontinue features at any time.</p>
                    </div>

                    <div className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">2. Eligibility</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">You must:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Be at least 18 years old</li>
                            <li>Have legal capacity to enter into a contract</li>
                            <li>Use the service in compliance with applicable laws</li>
                        </ul>
                        <p className="mt-4 text-gray-700 leading-relaxed">By using Clearform, you represent that you meet these requirements.</p>
                    </div>

                    <div className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">3. User Accounts</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">To use certain features, you must create an account.</p>
                        <p className="text-gray-700 leading-relaxed mb-3">You agree to:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Provide accurate and complete information</li>
                            <li>Maintain confidentiality of your login credentials</li>
                            <li>Be responsible for all activity under your account</li>
                        </ul>
                        <p className="mt-4 text-gray-700 leading-relaxed">We may suspend or terminate accounts that violate these Terms.</p>
                    </div>

                    <div className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">4. Customer Responsibilities (Very Important)</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">If you create forms using Clearform, you are solely responsible for:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>The legality of the data you collect</li>
                            <li>Obtaining proper consent from respondents</li>
                            <li>Compliance with applicable privacy laws (including GDPR, Indian IT laws, etc.)</li>
                            <li>Not collecting sensitive personal data unlawfully</li>
                        </ul>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Clearform acts as a data processor for form response data and does not control how you use collected responses.
                        </p>
                    </div>

                    <div className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">5. Acceptable Use</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">You agree not to use Clearform to:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Violate any laws or regulations</li>
                            <li>Collect data unlawfully</li>
                            <li>Distribute malware or harmful code</li>
                            <li>Harass, defame, or harm others</li>
                            <li>Attempt to breach platform security</li>
                            <li>Reverse engineer or exploit the system</li>
                        </ul>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            We reserve the right to suspend or terminate accounts engaging in prohibited activity.
                        </p>
                    </div>

                    <div className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">6. Data &amp; Content Ownership</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">You retain ownership of content and responses submitted through your forms.</p>
                        <p className="text-gray-700 leading-relaxed mb-3">Clearform retains ownership of all platform technology, branding, and software.</p>
                        <p className="text-gray-700 leading-relaxed mb-3">You grant Clearform a limited license to process your data solely to provide the service.</p>
                        <p className="text-gray-700 leading-relaxed">We do not claim ownership over your form data.</p>
                    </div>

                    <div className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">7. Fees &amp; Payments (If Applicable)</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">If you subscribe to a paid plan:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Fees are billed in advance</li>
                            <li>Fees are non-refundable unless otherwise stated</li>
                            <li>Failure to pay may result in suspension</li>
                        </ul>
                        <p className="mt-4 text-gray-700 leading-relaxed">We may update pricing with reasonable notice.</p>
                    </div>

                    <div className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">8. Service Availability</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">We strive to maintain platform reliability but do not guarantee:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Uninterrupted service</li>
                            <li>Error-free operation</li>
                            <li>Continuous availability</li>
                        </ul>
                        <p className="mt-4 text-gray-700 leading-relaxed">Maintenance and updates may occur without prior notice.</p>
                    </div>

                    <div className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">9. Termination</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">We may suspend or terminate your access if:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>You breach these Terms</li>
                            <li>You misuse the platform</li>
                            <li>Required by law</li>
                        </ul>
                        <p className="mt-4 text-gray-700 leading-relaxed mb-3">You may terminate your account at any time by requesting deletion.</p>
                        <p className="text-gray-700 leading-relaxed">Upon termination, access to the platform may be revoked.</p>
                    </div>

                    <div className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">10. Disclaimer of Warranties</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">Clearform is provided “as is” and “as available.”</p>
                        <p className="text-gray-700 leading-relaxed mb-3">We disclaim all warranties, including:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Fitness for a particular purpose</li>
                            <li>Non-infringement</li>
                            <li>Continuous availability</li>
                        </ul>
                        <p className="mt-4 text-gray-700 leading-relaxed">We do not guarantee specific results from using the platform.</p>
                    </div>

                    <div className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">11. Limitation of Liability</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">To the maximum extent permitted by law:</p>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Clearform shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from use of the service.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our total liability shall not exceed the amount paid by you in the preceding 12 months (if applicable).
                        </p>
                    </div>

                    <div className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">12. Indemnification</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">You agree to indemnify and hold Clearform harmless from claims arising out of:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Your misuse of the platform</li>
                            <li>Your violation of laws</li>
                            <li>Your unlawful data collection</li>
                        </ul>
                    </div>

                    <div className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">13. Governing Law &amp; Jurisdiction</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">These Terms are governed by the laws of India.</p>
                        <p className="text-gray-700 leading-relaxed">Any disputes shall be subject to the exclusive jurisdiction of the courts in:</p>
                        <p className="mt-2 text-gray-700 leading-relaxed">[Insert City, e.g., Hyderabad, Telangana]</p>
                    </div>

                    <div className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">14. Changes to Terms</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">We may update these Terms from time to time.</p>
                        <p className="text-gray-700 leading-relaxed">Continued use of Clearform after updates constitutes acceptance of revised Terms.</p>
                    </div>

                    <div>
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">15. Contact Information</h2>
                        <div className="space-y-2 text-gray-700">
                            <p><strong>Clearform</strong></p>
                            <p>
                                Email: <a href="mailto:support@clearform.in" className="font-semibold text-red-600 hover:text-red-700">support@clearform.in</a>
                            </p>
                            <p>
                                Website: <a href="https://clearform.in" target="_blank" rel="noopener noreferrer" className="font-semibold text-red-600 hover:text-red-700">https://clearform.in</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
