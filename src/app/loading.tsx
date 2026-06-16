import Spinner from "@/components/ui/Spinner";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--color-bg)]">
      <Spinner size={64} />
    </div>
  );
}
