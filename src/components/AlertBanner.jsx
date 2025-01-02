import React from 'react';

const AlertBanner = ({ message, type = 'info' }) => {
  const bgColor = type === 'emergency' ? 'bg-red-600' : 'bg-yellow-500';
  
  return (
    <div className={`${bgColor} text-white px-4 py-3 text-center`}>
      <p className="font-bold">{message}</p>
    </div>
  );
};

export default AlertBanner;