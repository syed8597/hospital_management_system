import React from 'react';
import { Activity } from 'lucide-react';
import StatusBadge from '../common/StatusBadge';
import { doctors } from '../../data/mockData';

const DoctorsList = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-indigo-600 mb-8 flex items-center gap-2">
          <Activity className="w-8 h-8" /> Our Doctors
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Specialization</th>
                <th className="px-6 py-4 text-left">Experience</th>
                <th className="px-6 py-4 text-left">Availability</th>
                <th className="px-6 py-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor, index) => (
                <tr key={index} className="border-b hover:bg-indigo-50 transition-colors">
                  <td className="px-6 py-4">{doctor.name}</td>
                  <td className="px-6 py-4">{doctor.specialization}</td>
                  <td className="px-6 py-4">{doctor.experience}</td>
                  <td className="px-6 py-4">{doctor.availability}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={doctor.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;