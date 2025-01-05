import React, { useEffect, useState } from 'react';
import { Home, Download } from 'lucide-react';
import { Link } from './Link';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${
      isScrolled ? 'bg-gray-800/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">XeeMC</div>
          <div className="flex gap-6">
            <Link href="#home" icon={<Home size={20} />}>Home</Link>
            <Link href="#download" icon={<Download size={20} />}>Download</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}