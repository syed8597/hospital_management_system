import React from 'react';
import { Activity, CircleDivideIcon, Divide } from 'lucide-react';
import StatCard from './StatCard';
import StatusBadge from '../common/StatusBadge';
import { stats, appointments } from '../../data/mockData';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-indigo-600 mb-8 border-b-4 border-indigo-600 pb-4 flex items-center gap-2">
          <Activity className="w-8 h-8" /> Hospital Dashboard
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Recent Appointments Table */}
        <h3 className="text-2xl font-bold text-indigo-600 mb-6">Recent Appointments</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Patient Name</th>
                <th className="px-6 py-4 text-left">Doctor</th>
                <th className="px-6 py-4 text-left">Department</th>
                <th className="px-6 py-4 text-left">Time</th>
                <th className="px-6 py-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((apt, index) => (
                <tr key={index} className="border-b hover:bg-indigo-50 transition-colors">
                  <td className="px-6 py-4">{apt.patient}</td>
                  <td className="px-6 py-4">{apt.doctor}</td>
                  <td className="px-6 py-4">{apt.department}</td>
                  <td className="px-6 py-4">{apt.time}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={apt.status} />
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

export default Dashboard;