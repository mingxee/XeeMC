import React, { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
}

export function Link({ href, children, icon }: LinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <a
      href={href}
      onClick={handleClick}
      className="flex items-center gap-2 hover:text-green-400 transition-colors"
    >
      {icon}
      {children}
    </a>
  );
}