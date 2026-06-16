"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power1.out" }
    );
  }, []);

  return (
    <div ref={pageRef}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
