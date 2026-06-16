import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen flex items-center justify-center bg-[var(--color-bg)] px-6 pt-24 overflow-hidden">
        {/* Decorative large logo mark */}
        <svg
          width={480}
          height={480}
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="absolute right-[-80px] top-1/2 -translate-y-1/2 rotate-12 pointer-events-none hidden lg:block opacity-[0.04]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M144.901 115.484L144.901 297.124L166.328 318.546L144.898 339.973L144.898 342.191C144.898 371.596 165.373 396.498 194.77 396.498H367V339.51L226.166 339.51L366.874 198.366L326.547 158.349L201.804 283.075L201.804 115.484L144.901 115.484Z"
            fill="#007AFF"
          />
        </svg>

        {/* Decorative blurred circle */}
        <div
          className="absolute top-1/4 left-[10%] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,122,255,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="relative z-10 max-w-[640px] mx-auto text-center py-20">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-blue bg-[rgba(0,122,255,0.1)] border border-[rgba(0,122,255,0.3)] mb-6">
            Error 404
          </span>

          <h1
            className="text-[var(--color-text-primary)] font-bold leading-[1.1] mb-4"
            style={{ fontSize: "clamp(64px, 12vw, 140px)" }}
          >
            <span className="text-blue">4</span>0
            <span className="text-blue">4</span>
          </h1>

          <h2 className="text-[var(--color-text-primary)] font-bold text-2xl mb-4">
            We couldn&apos;t find that page.
          </h2>

          <p className="text-[var(--color-text-secondary)] text-base leading-[1.7] max-w-[480px] mx-auto mb-10">
            The page you&apos;re looking for doesn&apos;t exist, may have been
            moved, or your search didn&apos;t match anything on the site. Try
            searching again with <kbd className="px-1.5 py-0.5 rounded bg-[var(--color-surface-2)] border border-[var(--color-border)] text-xs">⌘K</kbd>, or head back to a page below.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link
              href="/"
              className="bg-blue text-white hover:text-white px-7 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-300 hover:bg-blue-dim hover:shadow-[0_0_30px_rgba(0,122,255,0.5)]"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border border-[var(--color-border-light)] text-[var(--color-text-primary)] px-7 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-300 hover:border-blue hover:text-blue"
            >
              Get Your Free Billing Audit
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
            <Link href="/services" className="text-[var(--color-text-secondary)] hover:text-blue transition-colors duration-200">
              Services
            </Link>
            <Link href="/about" className="text-[var(--color-text-secondary)] hover:text-blue transition-colors duration-200">
              About Logicware
            </Link>
            <Link href="/how-it-works" className="text-[var(--color-text-secondary)] hover:text-blue transition-colors duration-200">
              How It Works
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
