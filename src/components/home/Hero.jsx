import React from 'react';

const Hero = ({ setActiveSection }) => {
  return (
    <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-24 text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Advanced Hospital Management System
      </h1>
      <p className="text-xl md:text-2xl mb-8">
        Streamline your healthcare operations with our comprehensive management solution
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <button
          onClick={() => setActiveSection('dashboard')}
          className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all"
        >
          Get Started
        </button>
        <button
          onClick={() => setActiveSection('contact')}
          className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-indigo-600 transition-all"
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;