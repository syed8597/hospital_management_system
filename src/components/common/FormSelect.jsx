import React from 'react';

const FormSelect = ({ label, options, value, onChange }) => {
  return (
    <div>
      <label className="block text-indigo-600 font-semibold mb-2">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none transition-colors"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;