import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import Dashboard from './components/dashboard/Dashboard';
import PatientRegistration from './components/patients/PatientRegistration';
import AppointmentBooking from './components/appointments/AppointmentBooking';
import DoctorsList from './components/doctors/DoctorsList';


const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />


      {activeSection === 'home' && (
        <>
          <Hero setActiveSection={setActiveSection} />
          <Features />
        </>
      )}

      {activeSection === 'dashboard' && <Dashboard />}
      {activeSection === 'patients' && <PatientRegistration />}
      {activeSection === 'appointments' && <AppointmentBooking />}
      {activeSection === 'doctors' && <DoctorsList />}
      {activeSection === 'contact' && <Footer setActiveSection={setActiveSection} />}
    </div>
  );
};

export default App;