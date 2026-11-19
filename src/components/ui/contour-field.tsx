import type { ContourSet } from "@/lib/contours";

type ContourFieldProps = {
  set: ContourSet;
  className?: string;
  stroke?: string;
  /** Opacity of the index (major) contours; minor contours are drawn at ~45% of it. */
  intensity?: number;
};

/** Static topographic contour lines, used as a quiet backdrop on dark panels. */
export default function ContourField({
  set,
  className,
  stroke = "var(--color-ore)",
  intensity = 0.35,
}: ContourFieldProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${set.w} ${set.h}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      fill="none"
    >
      {set.paths.map((p, i) => (
        <path
          key={i}
          d={p.d}
          stroke={stroke}
          strokeWidth={p.major ? 1.4 : 0.8}
          strokeOpacity={p.major ? intensity : intensity * 0.45}
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}
