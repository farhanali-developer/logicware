import { ReactNode } from "react";
import Link from "next/link";

interface ServiceCardProps {
  number: string;
  icon: ReactNode;
  title: string;
  body: string;
  href?: string;
}

export default function ServiceCard({ number, icon, title, body, href }: ServiceCardProps) {
  const inner = (
    <>
      <span className="text-blue text-[11px] font-semibold tracking-widest opacity-50">
        {number}
      </span>
      <div className="w-[52px] h-[52px] rounded-[10px] bg-[rgba(0,122,255,0.1)] flex items-center justify-center mt-4">
        <span className="w-7 h-7 text-blue [&>svg]:w-full [&>svg]:h-full">{icon}</span>
      </div>
      <h3 className="text-[var(--color-text-primary)] font-semibold text-lg mt-4">{title}</h3>
      <p className="text-[var(--color-text-secondary)] text-sm leading-[1.7] mt-2">{body}</p>
      <div className="mt-4 text-blue transition-transform duration-300 group-hover:translate-x-1">→</div>
    </>
  );

  const cls =
    "service-card group relative rounded-2xl p-8 bg-[var(--color-surface)] border border-[rgba(0,122,255,0.12)] transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-blue hover:bg-[rgba(0,122,255,0.06)] hover:-translate-y-1.5 hover:shadow-[0_8px_40px_rgba(0,122,255,0.15)] will-change-transform block";

  return href ? (
    <Link href={href} className={cls}>{inner}</Link>
  ) : (
    <div className={cls}>{inner}</div>
  );
}
