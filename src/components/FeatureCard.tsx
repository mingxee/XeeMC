import React, { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center group">
      <div className="w-12 h-12 mx-auto mb-4 text-green-400 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}