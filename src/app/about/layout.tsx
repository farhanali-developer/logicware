import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us",
  description: "Logicware LLC is a Delaware-registered medical billing company with deep expertise in mental health revenue cycle management — HIPAA compliant, US-based, built for therapists.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
