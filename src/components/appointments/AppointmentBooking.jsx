import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import FormInput from '../common/FormInput';
import FormSelect from '../common/FormSelect';
import FormTextarea from '../common/FormTextarea';

const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    patientId: '',
    department: 'Select Department',
    doctor: 'Select Doctor',
    date: '',
    timeSlot: 'Select Time',
    visitType: 'New Visit',
    reason: ''
  });

  const handleSubmit = () => {
    console.log('Appointment Data:', formData);
    alert('Appointment booked successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-indigo-600 mb-8 flex items-center gap-2">
          <Calendar className="w-8 h-8" /> Book Appointment
        </h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Patient ID"
              placeholder="Enter patient ID"
              value={formData.patientId}
              onChange={(e) => setFormData({ ...formData, patientId: e.target.value })}
            />
            <FormSelect
              label="Department"
              options={['Select Department', 'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Radiology']}
              value={formData.department}
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormSelect
              label="Doctor"
              options={['Select Doctor', 'Dr. Sarah Johnson', 'Dr. Michael Chen', 'Dr. Lisa Anderson', 'Dr. James Brown']}
              value={formData.doctor}
              onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
            />
            <FormInput
              label="Appointment Date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormSelect
              label="Time Slot"
              options={['Select Time', '09:00 AM - 09:30 AM', '10:00 AM - 10:30 AM', '11:00 AM - 11:30 AM', '02:00 PM - 02:30 PM', '03:00 PM - 03:30 PM']}
              value={formData.timeSlot}
              onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
            />
            <FormSelect
              label="Visit Type"
              options={['New Visit', 'Follow-up', 'Emergency']}
              value={formData.visitType}
              onChange={(e) => setFormData({ ...formData, visitType: e.target.value })}
            />
          </div>

          <FormTextarea
            label="Reason for Visit"
            rows={4}
            placeholder="Describe the reason for appointment"
            value={formData.reason}
            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
          />

          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;