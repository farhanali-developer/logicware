import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of Logicware LLC's website and mental health billing services.",
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
