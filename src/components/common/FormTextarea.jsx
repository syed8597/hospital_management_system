import React from 'react';

const FormTextarea = ({ label, placeholder, rows = 3, value, onChange }) => {
  return (
    <div>
      <label className="block text-indigo-600 font-semibold mb-2">{label}</label>
      <textarea
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none transition-colors"
      ></textarea>
    </div>
  );
};

export default FormTextarea;