import React from 'react';

export function ParallaxBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607988795691-3d0147b43231?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.1)_0%,transparent_25%)]" />
    </div>
  );
}