import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-indigo-600 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;