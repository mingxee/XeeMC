import React, { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}