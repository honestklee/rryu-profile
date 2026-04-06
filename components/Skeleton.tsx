'use client';

import type { HTMLAttributes } from 'react';

type SkeletonProps = HTMLAttributes<HTMLDivElement>;

export function Skeleton({ className = '', ...rest }: SkeletonProps) {
  return (
    <div
      className={`skeleton-shimmer rounded-md ${className}`}
      aria-hidden
      {...rest}
    />
  );
}
