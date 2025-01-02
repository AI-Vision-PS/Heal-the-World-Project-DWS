import React from 'react';
import PropTypes from 'prop-types';

const DisasterCard = ({ icon, title, situation, actions, guideLink }) => {
  return (
    <div className="bg-white border-2 border-primary rounded-lg p-6 transition-transform hover:-translate-y-2 hover:shadow-lg">
      <div className="text-5xl text-center mb-4">{icon}</div>
      <h2 className="text-2xl font-bold text-primary text-center mb-4">{title}</h2>
      
      <div className="space-y-4">
        <section>
          <h3 className="text-lg font-semibold text-primary mb-2">1. IF</h3>
          <p className="text-gray-700">Situation: {situation}</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-primary mb-2">2. THEN</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {actions.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-primary mb-2">3. NEXT</h3>
          <a 
            href={guideLink}
            className="block w-full text-center bg-secondary text-primary font-bold py-2 px-4 rounded border-2 border-primary hover:bg-primary hover:text-secondary transition-colors"
          >
            Read & Print Free: {title} Safety Guide
          </a>
        </section>
      </div>
    </div>
  );
};

DisasterCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  situation: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(PropTypes.string).isRequired,
  guideLink: PropTypes.string.isRequired,
};

export default DisasterCard;