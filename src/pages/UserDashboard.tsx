import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Search,
  Calendar,
  ChevronRight,
  MapPin,
  FileText,
  User,
  Home,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const doctors = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    specialty: 'Cardiologist',
    image: '/images/doc1.jpg',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    specialty: 'Dermatologist',
    image: '/images/doc2.jpg',
  },
];

const appointments = [
  {
    id: 1,
    date: '31 May 2025',
    time: '10:30 AM',
    doctor: 'Dr. Rajesh Kumar',
    specialty: 'Cardiologist',
    location: 'City Heart Hospital',
    status: 'Confirmed',
    statusColor: 'green',
    detailsLink: '/patient-appointments/1',
  },
  {
    id: 2,
    date: '3 June 2025',
    time: '2:15 PM',
    doctor: 'Dr. Priya Sharma',
    specialty: 'Dermatologist',
    location: 'Skin Care Clinic',
    status: 'Pending',
    statusColor: 'yellow',
    detailsLink: '/patient-appointments/2',
  },
];

const DashboardCard = ({ icon, title, desc, to, color }) => (
  <div className={`rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer border-l-4 border-${color}-500`}>
    <div className="p-6 pt-5">
      <div className="flex items-center">
        <div className={`rounded-full bg-${color}-100 p-3 mr-4`}>
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{desc}</p>
        </div>
      </div>
    </div>
  </div>
);

const Sidebar = ({ onSelect }) => {
  const location = useLocation();
  const isDashboard = location.pathname === '/patient-dashboard';

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 fixed">
      <div className="flex flex-col h-full">
        <div className="flex justify-center py-4">
          <a href="/">
            <img src="/fikar-logo.svg" alt="Fikar Logo" className="h-12 w-auto" />
          </a>
        </div>
        <div className="px-6 py-4 border-t border-b border-gray-200">
          <div className="flex items-center">
            <span className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-sm font-bold">RA</span>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Rahul Agarwal</p>
              <p className="text-xs text-gray-500">rahul@example.com</p>
            </div>
          </div>
        </div>
        <div className="flex-1 px-4 py-4 overflow-y-auto">
          <nav className="space-y-1">
            <button
              onClick={() => onSelect('dashboard')}
              className={`w-full text-left flex items-center px-3 py-2.5 text-sm font-medium rounded-lg ${isDashboard ? 'bg-fikar-primary/10 text-fikar-primary' : 'text-gray-700 hover:text-fikar-primary hover:bg-fikar-primary/5'}`}
            >
              <Home className="h-5 w-5 mr-2" /> Dashboard
            </button>
            <Link to="/patient-profile" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-gray-700 hover:text-fikar-primary hover:bg-fikar-primary/5">
              <User className="h-5 w-5 mr-2 text-gray-400" /> Profile
            </Link>
            <button className="w-full text-left flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-gray-700 hover:text-fikar-primary hover:bg-fikar-primary/5">
              <Calendar className="h-5 w-5 mr-2" /> New Button (No Action)
            </button>
          </nav>
        </div>
        <div className="p-4">
          <div className="bg-gradient-to-r from-fikar-primary to-fikar-secondary p-4 rounded-lg text-white">
            <h4 className="text-sm font-medium mb-1">Need Help?</h4>
            <p className="text-xs mb-3 opacity-90">Contact our support team</p>
            <Button className="w-full bg-white text-fikar-primary hover:bg-gray-100">Contact Support</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserDashboard = () => {
  const [selectedPanel, setSelectedPanel] = useState('dashboard');
  const { toast } = useToast();

  const handleSearch = (e) => {
    e.preventDefault();
    toast({
      title: 'Search initiated',
      description: `Searching...`,
    });
  };

  return (
    <div className="flex">
      <Sidebar onSelect={setSelectedPanel} />
      <main className="ml-64 w-full bg-white min-h-screen p-6">
        {selectedPanel === 'dashboard' && (
          <>
            <div className="space-y-1 mb-4">
              <h1 className="text-2xl font-bold text-gray-800">Welcome back, Rahul!</h1>
              <p className="text-gray-600">Manage your appointments and health information</p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              <DashboardCard icon={<MapPin className="h-6 w-6 text-blue-600" />} color="blue" title="Near Me" desc="Find doctors & clinics nearby" to="/patient-locations" />
              <DashboardCard icon={<Calendar className="h-6 w-6 text-green-600" />} color="green" title="Appointments" desc="View & manage appointments" to="/patient-appointments" />
              <DashboardCard icon={<Search className="h-6 w-6 text-purple-600" />} color="purple" title="Search" desc="Find doctors & hospitals" to="/patient-search" />
              <DashboardCard icon={<FileText className="h-6 w-6 text-amber-600" />} color="amber" title="Reports" desc="Upload & view medical reports" to="/patient-reports" />
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Upcoming Appointments</h2>
                <Link to="/patient-appointments" className="text-sm text-blue-600 hover:underline flex items-center">
                  View all <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="space-y-4">
                {appointments.map((appt) => (
                  <div key={appt.id} className="rounded-lg border bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row">
                      <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white p-4 sm:w-1/4 text-center flex flex-col justify-center items-center">
                        <div className="text-lg font-bold">{appt.date}</div>
                        <div className="text-sm">{appt.time}</div>
                        <div className={`mt-2 px-2 py-0.5 rounded-full text-xs font-medium ${appt.statusColor === 'green' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {appt.status}
                        </div>
                      </div>
                      <div className="p-4 sm:w-3/4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-gray-900">{appt.doctor}</h3>
                            <p className="text-sm text-gray-500">{appt.specialty}</p>
                          </div>
                          <Link to={appt.detailsLink} className="text-sm border rounded px-3 py-1 hover:bg-gray-100">
                            Details
                          </Link>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1 text-gray-400" /> {appt.location}
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Button variant="outline" className="text-blue-600 border-blue-300">Check-in</Button>
                          <Button variant="outline" className="text-red-600 border-red-300">Reschedule</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Recently Visited Doctors</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {doctors.map((doctor) => (
                  <div key={doctor.id} className="p-4 bg-gray-50 border rounded shadow-sm text-center">
                    <img src={doctor.image} alt={doctor.name} className="w-16 h-16 rounded-full mx-auto mb-2" />
                    <h3 className="font-semibold text-lg">Dr. {doctor.name}</h3>
                    <p className="text-sm text-gray-600">{doctor.specialty}</p>
                    <Button size="sm" className="mt-2 bg-blue-500 hover:bg-blue-600 text-white" onClick={() => toast({ title: 'Booking', description: `Booking Dr. ${doctor.name}` })}>
                      Book
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default UserDashboard;