import Pricing from "@/components/pricing";

export const metadata = { title: 'Pricing' };

export default function PricingPage() {
    return (
        <main className="mx-auto min-h-screen w-full max-w-6xl px-4 sm:px-6 pt-24 pb-20">
            <Pricing />
        </main>
    );
}
