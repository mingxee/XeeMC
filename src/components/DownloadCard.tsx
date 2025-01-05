import React from 'react';
import { Download } from 'lucide-react';
import { Card } from './Card';

interface DownloadCardProps {
  title: string;
  description: string;
  href: string;
  buttonText: string;
}

export function DownloadCard({ title, description, href, buttonText }: DownloadCardProps) {
  return (
    <Card>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <p className="text-gray-300 mb-6">{description}</p>
      <a
        href={href}
        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-600/20"
      >
        <Download size={20} className="animate-bounce" />
        {buttonText}
      </a>
    </Card>
  );
}