"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import LightRays from "@/components/light-rays";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      {/* Fixed full-page light rays background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          opacity: 0.75,
          pointerEvents: "none",
        }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#a78bfa"
          raysSpeed={0.6}
          lightSpread={1.4}
          rayLength={2.5}
          pulsating={true}
          fadeDistance={1.2}
          saturation={1.2}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0.05}
          distortion={0.1}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <main className="grow">{children}</main>
        <Footer border={true} />
      </div>
    </>
  );
}
