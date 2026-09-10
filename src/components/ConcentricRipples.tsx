import React from 'react';

interface ConcentricRipplesProps {
  className?: string;
  color?: string;
  size?: number;
  count?: number;
  origin?: 'top-left' | 'bottom-right' | 'bottom-left' | 'top-right' | 'center';
}

export const ConcentricRipples: React.FC<ConcentricRipplesProps> = ({
  className = '',
  color = '#3FD3C6',
  size = 500,
  count = 9,
  origin = 'top-left',
}) => {
  // Generate radius steps
  const radii = Array.from({ length: count }, (_, i) => 40 + i * 36);

  let cx = 0;
  let cy = 0;

  if (origin === 'top-left') {
    cx = 0;
    cy = 0;
  } else if (origin === 'top-right') {
    cx = size;
    cy = 0;
  } else if (origin === 'bottom-left') {
    cx = 0;
    cy = size;
  } else if (origin === 'bottom-right') {
    cx = size;
    cy = size;
  } else {
    cx = size / 2;
    cy = size / 2;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {radii.map((r, index) => {
        // Decreasing or alternating subtle opacities matching the reference design
        const opacity = 0.12 + ((index % 3) * 0.1) + (index < 4 ? 0.15 : 0.05);
        return (
          <circle
            key={index}
            cx={cx}
            cy={cy}
            r={r}
            stroke={color}
            strokeWidth="1.2"
            strokeOpacity={opacity}
          />
        );
      })}
    </svg>
  );
};
