import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Logicware LLC privacy policy — how we collect, use, and protect your information as a HIPAA-compliant billing partner.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
