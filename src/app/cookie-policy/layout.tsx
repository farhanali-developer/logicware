import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Logicware LLC uses cookies and similar technologies on its website.",
};

export default function CookieLayout({ children }: { children: React.ReactNode }) {
  return children;
}
