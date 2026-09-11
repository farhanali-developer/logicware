import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us",
  description: "Logicware LLC is a Delaware-registered dental billing company with deep expertise in dental revenue cycle management. HIPAA compliant, US-based, built for dentists.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
