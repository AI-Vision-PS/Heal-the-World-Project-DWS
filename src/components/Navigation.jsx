import React from 'react';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#warning-system', label: 'Warning System' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#get-involved', label: 'Get Involved' },
  { href: '/early-warning', label: 'Early Warning Dashboard' }
];

export default function Navigation() {
  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex justify-center space-x-8 py-4">
          {navItems.map(item => (
            <li key={item.href}>
              <a 
                href={item.href}
                className="text-white hover:text-secondary transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}