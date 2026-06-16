import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "How It Works",
  description: "From free billing audit to ongoing monthly reporting — here's exactly what happens when you start working with Logicware.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
