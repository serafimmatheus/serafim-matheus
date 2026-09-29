"use client";

import { useId } from "react";

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  squares = [
    [4, 4],
    [5, 1],
    [8, 2],
    [6, 6],
    [10, 5],
    [13, 3],
  ],
  className,
  ...props
}: {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: string;
  squares?: Array<[x: number, y: number]>;
  className?: string;
  [key: string]: any;
}) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full fill-white/5 stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)] ${className || ""}`}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" strokeDasharray={strokeDasharray} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y], index) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width - 1}
              height={height - 1}
              x={x * width + 1}
              y={y * height + 1}
              className="animate-pulse"
              style={{ animationDuration: `${(index % 3) + 2}s` }}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
