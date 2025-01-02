import React from 'react';

const EmergencyCard = ({ title, description, actions, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <Icon className="h-8 w-8 text-red-600 mr-3" />
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {actions.map((action, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <span className="mr-2">•</span>
            {action}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmergencyCard;