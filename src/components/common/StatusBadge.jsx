import React from 'react';

const StatusBadge = ({ status }) => {
  const getStatusClass = (status) => {
    const classes = {
      completed: 'bg-blue-100 text-blue-800',
      active: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      available: 'bg-green-100 text-green-800',
      leave: 'bg-yellow-100 text-yellow-800'
    };
    return classes[status] || '';
  };

  const getStatusText = (status) => {
    const texts = {
      completed: 'Completed',
      active: 'In Progress',
      pending: 'Pending',
      available: 'Available',
      leave: 'On Leave'
    };
    return texts[status] || status;
  };

  return (
    <span className={`px-4 py-1 rounded-full text-sm font-bold ${getStatusClass(status)}`}>
      {getStatusText(status)}
    </span>
  );
};

export default StatusBadge;
