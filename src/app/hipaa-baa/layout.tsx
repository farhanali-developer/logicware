import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HIPAA Compliance & BAA",
  description:
    "Learn how Logicware LLC maintains HIPAA compliance and what our Business Associate Agreement covers for dental billing clients.",
};

export default function HipaaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
