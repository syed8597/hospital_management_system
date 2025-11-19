import React, { useState } from 'react';
import { Users } from 'lucide-react';
import FormInput from '../common/FormInput';
import FormSelect from '../common/FormSelect';
import FormTextarea from '../common/FormTextarea';

const PatientRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: 'Select Gender',
    email: '',
    phone: '',
    address: '',
    bloodGroup: 'Select Blood Group',
    emergencyContact: ''
  });


  const handleSubmit = () => {
    console.log('Patient Registration Data:', formData);
    alert('Patient registered successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-indigo-600 mb-8 flex items-center gap-2">
          <Users className="w-8 h-8" /> Patient Registration
        </h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="First Name"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            <FormInput
              label="Last Name"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Date of Birth"
              type="date"
              value={formData.dob}
              onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
            />
            <FormSelect
              label="Gender"
              options={['Select Gender', 'Male', 'Female', 'Other']}
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Email"
              type="email"
              placeholder="patient@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <FormInput
              label="Phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <FormTextarea
            label="Address"
            placeholder="Enter full address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormSelect
              label="Blood Group"
              options={['Select Blood Group', 'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']}
              value={formData.bloodGroup}
              onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
            />
            <FormInput
              label="Emergency Contact"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.emergencyContact}
              onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
            />
          </div>

          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all"
          >
            Register Patient
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientRegistration;