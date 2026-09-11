"use client";

import { useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { gsap, useGSAP } from "@/lib/gsap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/PageBanner";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blogPosts";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const post = getPostBySlug(params.slug);
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power1.out" }
    );
  }, []);

  if (!post) {
    return (
      <div ref={pageRef}>
        <Navbar />
        <main className="bg-[var(--color-bg)] min-h-screen">
          <section className="pt-48 pb-32 px-6 text-center">
            <h1 className="text-[var(--color-text-primary)] font-bold text-3xl mb-4">
              Post not found
            </h1>
            <p className="text-[var(--color-text-secondary)] mb-8">
              This article may have been moved or removed.
            </p>
            <Link
              href="/blogs"
              className="inline-block bg-blue text-[var(--color-text-primary)] px-8 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-300 hover:bg-blue-dim"
            >
              Back to Blogs
            </Link>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://logicware.tech",
    },
    publisher: {
      "@type": "Organization",
      name: "Logicware LLC",
      url: "https://logicware.tech",
      logo: {
        "@type": "ImageObject",
        url: "https://logicware.tech/favicon/android-chrome-512x512.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://logicware.tech/blogs/${post.slug}`,
    },
  };

  return (
    <div ref={pageRef}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <Navbar />
      <PageBanner
        badge={post.category}
        title={post.title}
        subtitle={`${formatDate(post.date)} · ${post.readTime} · By ${post.author}`}
      />
      <main className="bg-[var(--color-bg)] min-h-screen">
        {/* Back link */}
        <section className="px-6 pt-8 pb-2">
          <div className="max-w-[760px] mx-auto">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-blue transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Blogs
            </Link>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 pb-24">
          <div className="max-w-[760px] mx-auto flex flex-col gap-6">
            {post.content.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  section.level === 3 ? (
                    <h3 className="text-[var(--color-text-primary)] font-semibold text-lg mb-2 mt-5">
                      {section.heading}
                    </h3>
                  ) : (
                    <h2 className="text-[var(--color-text-primary)] font-bold text-xl mb-2 mt-6">
                      {section.heading}
                    </h2>
                  )
                )}
                {section.body && (
                  <p className="text-[var(--color-text-secondary)] text-base leading-[1.8]">
                    {section.body}
                  </p>
                )}
                {section.list && (
                  <ul className="mt-3 flex flex-col gap-2">
                    {section.list.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-[var(--color-text-secondary)] text-base leading-[1.8]">
                        <span className="text-blue flex-shrink-0 mt-[0.35em] text-xs">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24">
          <div
            className="max-w-[760px] mx-auto rounded-[24px] px-8 py-10 border border-[rgba(0,122,255,0.2)] text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,122,255,0.1) 0%, rgba(0,122,255,0.05) 100%)",
            }}
          >
            <h2 className="text-[var(--color-text-primary)] font-bold text-xl sm:text-2xl mb-3">
              Want this handled for you?
            </h2>
            <p className="text-[var(--color-text-secondary)] text-sm leading-[1.7] max-w-[480px] mx-auto mb-6">
              Logicware handles claims, denials, credentialing, and reporting
              for dental practices. Start with a free billing audit.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue text-white hover:text-white px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-blue-dim hover:shadow-[0_0_30px_rgba(0,122,255,0.5)]"
            >
              Get Your Free Billing Audit →
            </Link>
          </div>
        </section>

        {/* Related posts */}
        <section className="px-6 pb-32">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-[var(--color-text-primary)] font-bold text-2xl mb-6 text-center">
              More from the Blog
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blogs/${p.slug}`}
                  className="block rounded-2xl p-6 bg-[var(--color-surface)] border border-[rgba(0,122,255,0.12)] transition-all duration-300 hover:border-[rgba(0,122,255,0.4)] hover:bg-[rgba(0,122,255,0.05)]"
                >
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-blue bg-[rgba(0,122,255,0.1)] border border-[rgba(0,122,255,0.25)] rounded-full px-2 py-1">
                    {p.category}
                  </span>
                  <h3 className="text-[var(--color-text-primary)] font-semibold mt-3 mb-2 leading-[1.4]">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)]">{formatDate(p.date)} · {p.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
