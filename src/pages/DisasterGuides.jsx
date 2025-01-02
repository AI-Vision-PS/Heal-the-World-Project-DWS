import React from 'react';
import DisasterGrid from '../components/DisasterGuides/DisasterGrid';
import SocialShare from '../components/DisasterGuides/SocialShare';

const DisasterGuides = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <main className="max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-primary text-center mb-8">
          Natural Disasters
        </h1>
        <h2 className="text-2xl font-semibold text-primary text-center mb-8">
          1-2-3 IF-THEN-NEXT Emergency Guides
        </h2>
        
        <p className="text-center text-gray-800 max-w-3xl mx-auto mb-12">
          Emergency Guides in the Heal the World 1-2-3 IF-THEN-NEXT Method. 
          Easy, quick info for immediate action. Each guide is available as 
          a printable PDF for offline use.
        </p>

        <DisasterGrid />
        
        <SocialShare 
          url="https://healtheworldproject.eu/disaster-guides"
          title="Comprehensive Disaster Guides - Be prepared for anything!"
        />
      </main>
    </div>
  );
};

export default DisasterGuides;