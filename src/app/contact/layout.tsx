import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Free Billing Audit",
  description: "Request a free, no-obligation billing audit from Logicware. We'll review your claims, denial patterns, and AR aging at no cost.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
