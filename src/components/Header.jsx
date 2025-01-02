import React from 'react';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="flex items-center justify-between">
          <Logo />
          <h1 className="text-3xl font-bold text-gray-900">
            Heal the World - Emergency Response Hub
          </h1>
          <Logo />
        </div>
      </div>
    </header>
  );
}