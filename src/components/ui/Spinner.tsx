"use client";

export default function Spinner({ size = 48 }: { size?: number }) {
  const iconSize = Math.round(size * 0.45);
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Spinning ring */}
      <span
        className="absolute inset-0 rounded-full border-2 border-[rgba(0,122,255,0.18)] border-t-[#007AFF] animate-spin"
        style={{ animationDuration: "0.8s" }}
        aria-hidden="true"
      />
      {/* Logo icon mark */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M144.901 115.484L144.901 297.124L166.328 318.546L144.898 339.973L144.898 342.191C144.898 371.596 165.373 396.498 194.77 396.498H367V339.51L226.166 339.51L366.874 198.366L326.547 158.349L201.804 283.075L201.804 115.484L144.901 115.484Z"
          fill="#007AFF"
        />
      </svg>
    </div>
  );
}
