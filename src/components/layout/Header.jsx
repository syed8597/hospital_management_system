import React, { useState } from 'react';
import { Activity, Phone, Mail, Clock, Menu, X } from 'lucide-react';

const Header = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = ['home', 'dashboard', 'patients', 'appointments', 'doctors', 'contact'];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };


  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white sticky top-0 z-50 shadow-lg">


      {/* Top Bar */}
      <div className="bg-black bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" /> +1 (555) 123-4567
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <Mail className="w-4 h-4" /> info@medicare.com
            </span>
          </div>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> 24/7 Emergency
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center gap-2">
            <Activity className="w-8 h-8" />
            MediCare
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">
            {navItems.map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium hover:opacity-80 transition-opacity ${
                    activeSection === section ? 'border-b-2 border-white' : ''
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2">
            {navItems.map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className="capitalize w-full text-left py-2 hover:bg-white hover:bg-opacity-10 px-2 rounded"
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;