import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Billing Insights Blog",
  description: "Practical guides on mental health billing, credentialing, denials, and revenue cycle management — written for therapists, not billers.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
