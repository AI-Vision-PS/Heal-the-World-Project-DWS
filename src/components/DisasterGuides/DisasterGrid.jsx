import React from 'react';
import DisasterCard from './DisasterCard';
import { disasterTypes } from '../../data/disasterTypes';

const DisasterGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {disasterTypes.map((disaster, index) => (
        <DisasterCard key={index} {...disaster} />
      ))}
    </div>
  );
};

export default DisasterGrid;