import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Billing Services",
  description: "End-to-end mental health billing services: insurance verification, claim submission, payment posting, denial management, monthly reporting, and provider credentialing.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
