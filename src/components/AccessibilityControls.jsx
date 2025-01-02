import React, { useState } from 'react';
import { languageOptions } from '../data/languages';

export default function AccessibilityControls() {
  const [isReading, setIsReading] = useState(false);
  
  const handleReadAloud = () => {
    setIsReading(!isReading);
  };

  return (
    <div className="fixed top-4 left-4 right-4 flex justify-between z-50">
      <div className="flex flex-col gap-1">
        <button 
          className="px-3 py-1 bg-white border-2 border-primary text-primary font-bold rounded hover:bg-gray-100"
          onClick={handleReadAloud}
        >
          {isReading ? 'Stop Reading' : 'Read Aloud'}
        </button>
        <select className="border-2 border-primary rounded">
          {languageOptions.map(lang => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}