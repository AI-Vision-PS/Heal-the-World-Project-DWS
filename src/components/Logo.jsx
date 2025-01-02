import React from 'react';

export default function Logo() {
  return (
    <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center overflow-hidden">
      <img 
        src="https://i.imgur.com/1TfHAVm.png" 
        alt="Heal The World Project Logo" 
        className="max-w-full max-h-full"
      />
    </div>
  );
}