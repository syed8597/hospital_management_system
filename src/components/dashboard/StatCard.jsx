import React from 'react';

const StatCard = ({ number, label }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-6 rounded-xl text-center">
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div className="text-sm">{label}</div>
    </div>
  );
};
export default StatCard;