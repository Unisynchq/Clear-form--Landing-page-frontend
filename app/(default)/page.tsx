import dynamic from "next/dynamic";
import Hero from "@/components/hero-home";
import PreIncubated from "@/components/pre-incubated";
import ScrollIndicator from "@/components/scroll-indicator";

// Below-fold components — loaded only when needed, reducing initial JS bundle
const ModernAlternative = dynamic(() => import("@/components/modern-alternative"));
const Dashboard = dynamic(() => import("@/components/dashboard"));
const FeedbackWorkflow = dynamic(() => import("@/components/feedback-workflow"));
const DemoNav = dynamic(() => import("@/components/demoNav"));
const BusinessCategories = dynamic(() => import("@/components/business-categories"));
const ComparisonTable = dynamic(() => import("@/components/comparisonTable"));
const Cta = dynamic(() => import("@/components/cta"));

export default function Home() {
  return (
    <>
      {/* Above the fold — loaded eagerly */}
      <Hero />
      <PreIncubated />
      <ScrollIndicator />

      {/* Below the fold — dynamically imported */}
      <ModernAlternative />
      <Dashboard />
      <FeedbackWorkflow />
      <DemoNav />
      <BusinessCategories />
      <ComparisonTable />
      <Cta />
    </>
  );
}
