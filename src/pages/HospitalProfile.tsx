import React from 'react';
import { useNavigate } from 'react-router-dom';

const hospitals = [
  {
    name: 'City Hospital',
    address: '123 Main Road, Morena',
    contact: '+91 9876543210',
    email: 'cityhospital@example.com',
  },
  {
    name: 'Care Multispecialty',
    address: '45 Ring Road, Morena',
    contact: '+91 9123456789',
    email: 'care@example.com',
  },
  {
    name: 'Shree Ram Hospital',
    address: '78 Gandhi Nagar, Morena',
    contact: '+91 9988776655',
    email: 'shreeram@example.com',
  },
];

const HospitalProfile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/clinic-admin-login');
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Hospital Profile</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Hospitals List</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {hospitals.map((hospital, index) => (
            <div
              key={index}
              className="border rounded-md p-4 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-blue-600 text-lg">{hospital.name}</h3>
              <p className="text-sm text-gray-700">{hospital.address}</p>
              <p className="text-sm text-gray-700">📞 {hospital.contact}</p>
              <p className="text-sm text-gray-700">📧 {hospital.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HospitalProfile;
