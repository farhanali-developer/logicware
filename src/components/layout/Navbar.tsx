"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { gsap, useGSAP } from "@/lib/gsap";
import Logo from "@/components/ui/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";
import SearchModal from "@/components/ui/SearchModal";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Testimonials", href: "/#testimonials" },
];

const PAGE_LINKS = [
  { label: "Careers", href: "/careers" },
  { label: "Blogs", href: "/blogs" },
];

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useGSAP(() => {
    gsap.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.2 }
    );

    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const hash = href.replace("/", "");
    if (pathname === "/") {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    router.push(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        ref={navRef}
        className={`relative z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(var(--color-bg-rgb),0.92)] backdrop-blur-md border-b border-[rgba(0,122,255,0.2)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
      <nav
        className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" aria-label="Logicware home">
          <Logo height={36} />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          {PAGE_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + utility icons + hamburger */}
        <div className="flex items-center gap-1 md:gap-2">
          <Link
            href="/contact"
            className="hidden md:inline-block border border-blue text-blue px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue hover:text-white hover:shadow-[0_0_20px_rgba(0,122,255,0.4)]"
            aria-label="Get Free Audit"
          >
            Get Free Audit
          </Link>

          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Search the site"
            className="flex items-center justify-center w-9 h-9 rounded-full text-[var(--color-text-secondary)] hover:text-blue hover:bg-[var(--color-surface-2)] transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>

          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative z-50 w-9 h-9 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-[var(--color-text-primary)] transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--color-text-primary)] transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--color-text-primary)] transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={`md:hidden fixed inset-0 bg-[rgba(var(--color-bg-rgb),0.98)] backdrop-blur-md transition-transform duration-300 ease-in-out z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-xl text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          {PAGE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-xl text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="border border-blue text-blue px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300 hover:bg-blue hover:text-[var(--color-text-primary)]"
          >
            Get Free Audit
          </Link>
        </div>
      </div>

      <SearchModal
        open={searchOpen}
        onOpen={() => setSearchOpen(true)}
        onClose={() => setSearchOpen(false)}
      />
    </header>
  );
}
