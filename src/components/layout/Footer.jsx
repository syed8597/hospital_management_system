import React from 'react';

const Footer = ({ setActiveSection }) => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-indigo-400 mb-4">About MediCare</h3>
            <p className="text-gray-300">
              Leading hospital management system providing comprehensive healthcare solutions with cutting-edge technology and compassionate care.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'dashboard', 'patients', 'appointments', 'doctors'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => setActiveSection(section)}
                    className="text-gray-300 hover:text-white transition-colors capitalize"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-400 mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Emergency Care</li>
              <li>Outpatient Services</li>
              <li>Laboratory</li>
              <li>Pharmacy</li>
              <li>Diagnostic Center</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-400 mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">📍 123 Healthcare St, Medical City</li>
              <li className="flex items-center gap-2">📞 +1 (555) 123-4567</li>
              <li className="flex items-center gap-2">✉️ info@medicare.com</li>
              <li className="flex items-center gap-2">🕐 24/7 Emergency Service</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MediCare Hospital Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;