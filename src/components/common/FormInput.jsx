import React from 'react';

const FormInput = ({ label, type = 'text', placeholder, value, onChange }) => {
  return (
    <div>
      <label className="block text-indigo-600 font-semibold mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none transition-colors"
      />
    </div>
  );
};

export default FormInput;