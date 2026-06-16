interface TestimonialCardProps {
  name: string;
  quote: string;
}

function getInitials(name: string) {
  const cleaned = name.split(",")[0].trim();
  const parts = cleaned.split(" ").filter(Boolean);
  return parts
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export default function TestimonialCard({ name, quote }: TestimonialCardProps) {
  return (
    <div className="flex-shrink-0 w-[320px] rounded-xl p-6 bg-[var(--color-surface-2)] border border-[rgba(0,122,255,0.15)]">
      <div className="text-blue text-sm" aria-hidden="true">
        ★★★★★
      </div>
      <p className="text-[var(--color-text-secondary)] text-sm leading-[1.7] italic mt-2">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-4">
        <div className="w-9 h-9 rounded-full bg-[rgba(0,122,255,0.2)] text-blue font-bold flex items-center justify-center text-sm flex-shrink-0">
          {getInitials(name)}
        </div>
        <span className="text-[var(--color-text-primary)] font-semibold text-sm">{name}</span>
      </div>
    </div>
  );
}
