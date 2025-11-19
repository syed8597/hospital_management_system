import React from 'react';
import FeatureCard from './FeatureCard';
import { features } from '../../data/mockData';

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;