import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Billing Insights Blog",
  description: "Practical guides on dental billing, credentialing, denials, and revenue cycle management, written for dentists, not billers.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
