import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Logicware team. Open roles in medical billing operations in Karachi and client success in the US.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
