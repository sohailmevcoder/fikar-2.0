import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Calendar, Clock3, UserPlus, BarChart2, Search, X } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import { Menu } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import HospitalProfile from './pages/HospitalProfile';

const defaultDoctors = [
  {
    name: 'Dr. Vivek Sharma',
    specialty: 'Cardiologist',
    available: 'Now',
    todayAppts: 15,
    status: 'available',
    img: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
  {
    name: 'Dr. Priya Patel',
    specialty: 'Pediatrician',
    available: '~45 mins',
    todayAppts: 12,
    status: 'busy',
    img: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Dr. Ajay Kumar',
    specialty: 'Neurologist',
    available: 'Tomorrow, 9 AM',
    todayAppts: 8,
    status: 'available',
    img: 'https://randomuser.me/api/portraits/men/12.jpg'
  },
  {
    name: 'Dr. Meera Singh',
    specialty: 'Dermatologist',
    available: 'Now',
    todayAppts: 10,
    status: 'available',
    img: 'https://randomuser.me/api/portraits/women/10.jpg'
  },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [doctors, setDoctors] = useState(defaultDoctors);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDoctor, setNewDoctor] = useState({
    name: '',
    specialty: '',
    available: '',
    img: '',
    todayAppts: 0,
    status: 'available'
  });
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editDoctorIndex, setEditDoctorIndex] = useState(null);

  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(query.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(query.toLowerCase())
  );

  const handleAddDoctor = () => {
    setDoctors([newDoctor, ...doctors]);
    setNewDoctor({ name: '', specialty: '', available: '', img: '', todayAppts: 0, status: 'available' });
    setIsModalOpen(false);
  };

  const handleEditDoctor = () => {
    const updatedDoctors = [...doctors];
    updatedDoctors[editDoctorIndex] = newDoctor;
    setDoctors(updatedDoctors);
    setNewDoctor({ name: '', specialty: '', available: '', img: '', todayAppts: 0, status: 'available' });
    setIsEditModalOpen(false);
  };
        
  return (
    <div className="p-6 space-y-6">
           {/* Header */}
        <header className="flex items-center justify-between p-4 border-b bg-white">
  <div className="flex items-center gap-3">
    <button className="text-xl font-bold">&larr;</button>
    <h1 className="text-xl font-semibold">Clinic Admin</h1>
  </div>
  <div className="flex items-center gap-4">
       <button
  onClick={() => navigate('/hospital-profile')}
  className="border rounded px-3 py-1 text-sm font-medium text-gray-700 bg-white hover:bg-gray-100"
>
  City Hospital
   </button>
    <div className="text-sm text-gray-500">
      {new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </div>
  </div>
</header>
      
      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex flex-col items-start p-4">
            <Users className="text-blue-600" />
            <p className="text-xl font-semibold">{doctors.length}</p>
            <span className="text-sm text-green-600">{doctors.filter(d => d.status === 'available').length} active now</span>
            <p className="text-sm text-gray-500">Doctors</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-start p-4">
            <Calendar className="text-purple-600" />
            <p className="text-xl font-semibold">124</p>
            <span className="text-sm text-green-600">45 completed today</span>
            <p className="text-sm text-gray-500">Appointments</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-start p-4">
            <Users className="text-orange-600" />
            <p className="text-xl font-semibold">16</p>
            <span className="text-sm text-orange-600">Across all doctors</span>
            <p className="text-sm text-gray-500">Waiting</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-start p-4">
            <Clock3 className="text-blue-600" />
            <p className="text-xl font-semibold">28 mins</p>
            <span className="text-sm text-orange-600">Average wait time</span>
            <p className="text-sm text-gray-500">Wait Time</p>
          </CardContent>
        </Card>
      </div>

        {/* Quick Actions */}
<div className="flex justify-between items-start gap-4 flex-wrap">
  {/* Search Bar */}
  <div className="relative w-full max-w-md flex-1">
    <div className="flex items-center rounded-md border px-3 py-2 bg-white shadow-sm h-[40px]">
      <Search className="w-4 h-4 text-gray-500 mr-2" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search doctors, patients, or appointments..."
        className="w-full outline-none text-sm"
      />
    </div>
    {query && (
      <div className="absolute z-10 mt-1 w-full bg-white border shadow-md rounded-md max-h-60 overflow-y-auto">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc, i) => (
            <div
              key={i}
              className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm"
              onClick={() => setQuery(doc.name)}
            >
              {doc.name} - <span className="text-gray-500">{doc.specialty}</span>
            </div>
          ))
        ) : (
          <div className="px-4 py-2 text-sm text-gray-500">No results found</div>
        )}
      </div>
    )}
  </div>

  {/* Today's Appointments Button */}
  <div className="w-full max-w-md flex-1">
    <div className="flex rounded-md border px-3 py-2 bg-white shadow-sm h-[40px] items-center justify-center">
      <button className="text-sm text-gray-700 font-medium">Today's Appointments</button>
    </div>
  </div>

  {/* Buttons */}
  <div className="flex space-x-2">
    <Button className="flex items-center gap-2" onClick={() => setIsModalOpen(true)}>
      <UserPlus size={16} /> Add Doctor
    </Button>
    <Button variant="outline" className="flex items-center gap-2">
      <BarChart2 size={16} /> Reports
    </Button>
  </div>
</div>


      {/* Doctor List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Doctor Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredDoctors.map((doc, index) => (
            <Card
              key={index}
              className={`flex items-center justify-between p-4 ${
                doc.status === 'available' ? 'border-l-4 border-green-500' : 'border-l-4 border-yellow-500'
              }`}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-14 h-14 rounded-full border"
                />
                <div>
                  <p className="font-semibold">{doc.name}</p>
                  <p className="text-sm text-gray-500">{doc.specialty}</p>
                  <p className="text-sm text-gray-600">
                    Today: <strong>{doc.todayAppts}</strong> appts | Next: {doc.available}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="default" onClick={() => { setSelectedDoctor(doc); setIsScheduleOpen(true); }}>
                  View Schedule
                </Button>
                <Button size="sm" variant="outline" onClick={() => { setEditDoctorIndex(index); setNewDoctor(doc); setIsEditModalOpen(true); }}>
                  Edit
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Add Doctor Modal */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
  <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
  <div className="fixed inset-0 flex items-center justify-center p-4">
    <Dialog.Panel className="w-full max-w-xl space-y-4 rounded-lg bg-white p-6 shadow-xl overflow-y-auto max-h-[90vh]">
      <div className="flex justify-between items-center mb-2">
        <Dialog.Title className="text-lg font-semibold">Add New Doctor</Dialog.Title>
        <button onClick={() => setIsModalOpen(false)}><X size={20} /></button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" placeholder="Doctor Name" value={newDoctor.name} onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })} className="border p-2 rounded-md text-sm" />
        <input type="text" placeholder="Specialty" value={newDoctor.specialty} onChange={(e) => setNewDoctor({ ...newDoctor, specialty: e.target.value })} className="border p-2 rounded-md text-sm" />
        <input type="number" placeholder="Experience (years)" value={newDoctor.experience || ''} onChange={(e) => setNewDoctor({ ...newDoctor, experience: e.target.value })} className="border p-2 rounded-md text-sm" />
        <input type="number" step="0.1" placeholder="Rating (out of 5)" value={newDoctor.rating || ''} onChange={(e) => setNewDoctor({ ...newDoctor, rating: e.target.value })} className="border p-2 rounded-md text-sm" />
        <input type="number" placeholder="Fees (₹)" value={newDoctor.fees || ''} onChange={(e) => setNewDoctor({ ...newDoctor, fees: e.target.value })} className="border p-2 rounded-md text-sm" />
        <input type="tel" placeholder="Contact Number" value={newDoctor.contact || ''} onChange={(e) => setNewDoctor({ ...newDoctor, contact: e.target.value })} className="border p-2 rounded-md text-sm" />
        <select value={newDoctor.clinic || ''} onChange={(e) => setNewDoctor({ ...newDoctor, clinic: e.target.value })} className="border p-2 rounded-md text-sm">
          <option value="">Select Clinic</option>
          <option value="Clinic A">Clinic A</option>
          <option value="Clinic B">Clinic B</option>
          <option value="Clinic C">Clinic C</option>
        </select>
        <input type="text" placeholder="Image URL" value={newDoctor.img} onChange={(e) => setNewDoctor({ ...newDoctor, img: e.target.value })} className="border p-2 rounded-md text-sm" />
        <input type="number" placeholder="Today's Appointments" value={newDoctor.todayAppts || ''} onChange={(e) => setNewDoctor({ ...newDoctor, todayAppts: parseInt(e.target.value || '0') })} className="border p-2 rounded-md text-sm" />
      </div>

      {/* Days */}
      <div>
        <label className="text-sm font-semibold">Available Days:</label>
        <div className="flex flex-wrap gap-2 mt-1">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <label key={day} className="text-sm flex items-center gap-1">
              <input
                type="checkbox"
                checked={newDoctor.days?.includes(day) || false}
                onChange={() => {
                  const days = newDoctor.days || [];
                  setNewDoctor({
                    ...newDoctor,
                    days: days.includes(day) ? days.filter(d => d !== day) : [...days, day]
                  });
                }}
              />
              {day}
            </label>
          ))}
        </div>
      </div>

      {/* Time Slots */}
      <div>
        <label className="text-sm font-semibold">Time Slots:</label>
        <div className="space-y-2 mt-2">
          {(newDoctor.timeSlots || ['']).map((slot, idx) => (
            <div key={idx} className="flex gap-2 items-center">
              <input
                type="text"
                value={slot}
                placeholder="e.g., 10:00 AM - 12:00 PM"
                onChange={(e) => {
                  const updatedSlots = [...(newDoctor.timeSlots || [])];
                  updatedSlots[idx] = e.target.value;
                  setNewDoctor({ ...newDoctor, timeSlots: updatedSlots });
                }}
                className="border p-2 rounded-md text-sm w-full"
              />
              <Button variant="outline" size="icon" onClick={() => {
                const updatedSlots = (newDoctor.timeSlots || []).filter((_, i) => i !== idx);
                setNewDoctor({ ...newDoctor, timeSlots: updatedSlots });
              }}>
                <X size={16} />
              </Button>
            </div>
          ))}
          <Button
            variant="ghost"
            onClick={() => setNewDoctor({
              ...newDoctor,
              timeSlots: [...(newDoctor.timeSlots || []), '']
            })}
            className="text-blue-600 hover:underline text-sm"
          >
            + Add Slot
          </Button>
        </div>
      </div>

      <Button onClick={handleAddDoctor} className="w-full mt-4">Add Doctor</Button>
    </Dialog.Panel>
  </div>
</Dialog>
   {/* View Schedule Modal */}
      <Dialog open={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md space-y-4 rounded-lg bg-white p-6 shadow-xl">
            <div className="flex justify-between items-center mb-2">
              <Dialog.Title className="text-lg font-semibold">Doctor Schedule</Dialog.Title>
              <button onClick={() => setIsScheduleOpen(false)}><X size={20} /></button>
            </div>
            {selectedDoctor && (
              <div className="space-y-2">
                <p><strong>Name:</strong> {selectedDoctor.name}</p>
                <p><strong>Specialty:</strong> {selectedDoctor.specialty}</p>
                <p><strong>Next Available:</strong> {selectedDoctor.available}</p>
                <p><strong>Today’s Appointments:</strong> {selectedDoctor.todayAppts}</p>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Edit Doctor Modal */}
      <Dialog open={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md space-y-4 rounded-lg bg-white p-6 shadow-xl">
            <div className="flex justify-between items-center mb-2">
              <Dialog.Title className="text-lg font-semibold">Edit Doctor</Dialog.Title>
              <button onClick={() => setIsEditModalOpen(false)}><X size={20} /></button>
            </div>
            <input type="text" placeholder="Doctor Name" value={newDoctor.name} onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })} className="w-full border p-2 rounded-md text-sm" />
            <input type="text" placeholder="Specialty" value={newDoctor.specialty} onChange={(e) => setNewDoctor({ ...newDoctor, specialty: e.target.value })} className="w-full border p-2 rounded-md text-sm" />
            <input type="text" placeholder="Available Time" value={newDoctor.available} onChange={(e) => setNewDoctor({ ...newDoctor, available: e.target.value })} className="w-full border p-2 rounded-md text-sm" />
            <input type="text" placeholder="Image URL" value={newDoctor.img} onChange={(e) => setNewDoctor({ ...newDoctor, img: e.target.value })} className="w-full border p-2 rounded-md text-sm" />
            <Button onClick={handleEditDoctor} className="w-full">Save Changes</Button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
