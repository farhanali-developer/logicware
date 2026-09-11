"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/PageBanner";
import { BLOG_POSTS } from "@/lib/blogPosts";

const CATEGORY_ICONS: Record<string, JSX.Element> = {
  "Denial Management": (
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5" />
  ),
  "Billing Basics": (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 4v16" />
    </>
  ),
  "Insurance Verification": (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="m9 15 2 2 4-4" />
    </>
  ),
  Credentialing: (
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 1 0-16 0" />
    </>
  ),
  Operations: (
    <>
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </>
  ),
  "Payment Posting": (
    <>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20M6 15h4" />
    </>
  ),
  Compliance: (
    <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Zm0 5v8m-3-4h6" />
  ),
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export default function BlogPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power1.out" }
    );

    gsap.fromTo(
      ".blog-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".blog-masonry",
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div ref={pageRef}>
      <Navbar />
      <PageBanner
          badge="Blogs"
          title="Billing Insights for Dental Practices"
          subtitle="Practical guides on claims, credentialing, denials, and revenue cycle management, written for dentists, not billers."
          iconPath="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
        />
      <main className="bg-[var(--color-bg)] min-h-screen">

        {/* Masonry grid */}
        <section className="px-6 pb-32">
          <div className="blog-masonry max-w-[1200px] mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="blog-card group block mb-6 break-inside-avoid rounded-2xl overflow-hidden bg-[var(--color-surface)] border border-[rgba(0,122,255,0.12)] transition-all duration-300 hover:border-[rgba(0,122,255,0.4)] hover:bg-[rgba(0,122,255,0.05)]"
              >
                <div
                  className="h-28 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,122,255,0.16) 0%, rgba(0,122,255,0.04) 100%)",
                  }}
                >
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#007AFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-80 transition-transform duration-300 group-hover:scale-110"
                  >
                    {CATEGORY_ICONS[post.category] ?? <circle cx="12" cy="12" r="9" />}
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-blue bg-[rgba(0,122,255,0.1)] border border-[rgba(0,122,255,0.25)] rounded-full px-2 py-1">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-[var(--color-text-primary)] font-semibold text-lg leading-[1.4] mb-2">
                    {post.title}
                  </h2>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-[1.7] mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                    <span>{formatDate(post.date)}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
