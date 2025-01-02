import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import EmergencyCard from './components/EmergencyCard';
import AlertBanner from './components/AlertBanner';
import AccessibilityControls from './components/AccessibilityControls';
import { emergencyTypes } from './data/emergencyTypes';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <AccessibilityControls />
      <AlertBanner 
        message="Active Alert: Providing support for recent earthquake in Nepal" 
        type="emergency" 
      />
      <Header />
      <Navigation />
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyTypes.map((type, index) => (
              <EmergencyCard key={index} {...type} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;