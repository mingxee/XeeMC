import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-gray-800 p-8 rounded-lg transform hover:scale-[1.02] transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}