import React from 'react';

interface SparkleOrnamentProps {
  color?: string;
  variant?: 'hero-trail' | 'section-divider' | 'minimal';
  className?: string;
}

export const SparkleOrnament: React.FC<SparkleOrnamentProps> = ({
  color = '#3FD3C6',
  variant = 'hero-trail',
  className = '',
}) => {
  if (variant === 'hero-trail') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {/* Trailing fine horizontal lines */}
        <div className="flex flex-col gap-1.5 w-24 sm:w-36">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#3FD3C6]/60 to-[#3FD3C6]" />
          <div className="h-[1px] w-3/4 ml-auto bg-gradient-to-r from-transparent to-[#3FD3C6]/40" />
        </div>
        {/* Starburst icon */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          <path
            d="M12 0L13.8 8.2L22 12L13.8 15.8L12 24L10.2 15.8L2 12L10.2 8.2L12 0Z"
            fill={color}
          />
        </svg>
        {/* Minor second star */}
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 opacity-80 -ml-1 mt-3"
        >
          <path
            d="M12 0L13.8 8.2L22 12L13.8 15.8L12 24L10.2 15.8L2 12L10.2 8.2L12 0Z"
            fill={color}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'section-divider') {
    return (
      <div className={`flex items-center justify-center gap-4 py-2 ${className}`}>
        <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent to-current opacity-30" />
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          <path
            d="M12 0L13.8 8.2L22 12L13.8 15.8L12 24L10.2 15.8L2 12L10.2 8.2L12 0Z"
            fill="currentColor"
          />
        </svg>
        <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent to-current opacity-30" />
      </div>
    );
  }

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 0L13.8 8.2L22 12L13.8 15.8L12 24L10.2 15.8L2 12L10.2 8.2L12 0Z"
        fill={color}
      />
    </svg>
  );
};
