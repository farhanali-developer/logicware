interface LogoProps {
  height?: number;
  className?: string;
}

// SVG natural size: 594 × 114
const ASPECT = 594 / 114;

export default function Logo({ height = 40, className = "" }: LogoProps) {
  const w = Math.round(height * ASPECT);
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo/logo black.svg"
        alt="Logicware"
        height={height}
        width={w}
        className={`logo-light ${className}`}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo/logowhite.svg"
        alt="Logicware"
        height={height}
        width={w}
        className={`logo-dark ${className}`}
      />
    </>
  );
}
