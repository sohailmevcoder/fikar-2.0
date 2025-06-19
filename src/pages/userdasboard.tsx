import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Search, FileText, ChevronRight, Clock, Star, Bell } from 'lucide-react';

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





const DashboardContent = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Rahul!</h1>
        <p className="mt-1 text-gray-600">Manage your appointments and health information</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <Link to="/patient-locations">
          <div className="rounded-lg border bg-card shadow-sm h-full hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-blue-500">
            <div className="p-6 pt-5">
              <div className="flex items-center">
                <div className="rounded-full bg-blue-100 p-3 mr-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Near Me</h3>
                  <p className="text-sm text-gray-500">Find doctors & clinics nearby</p>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/patient-appointments">
          <div className="rounded-lg border bg-card shadow-sm h-full hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-green-500">
            <div className="p-6 pt-5">
              <div className="flex items-center">
                <div className="rounded-full bg-green-100 p-3 mr-4">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Appointments</h3>
                  <p className="text-sm text-gray-500">View & manage appointments</p>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/patient-search">
          <div className="rounded-lg border bg-card shadow-sm h-full hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-purple-500">
            <div className="p-6 pt-5">
              <div className="flex items-center">
                <div className="rounded-full bg-purple-100 p-3 mr-4">
                  <Search className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Search</h3>
                  <p className="text-sm text-gray-500">Find doctors & hospitals</p>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/patient-reports">
          <div className="rounded-lg border bg-card shadow-sm h-full hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-amber-500">
            <div className="p-6 pt-5">
              <div className="flex items-center">
                <div className="rounded-full bg-amber-100 p-3 mr-4">
                  <FileText className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Reports</h3>
                  <p className="text-sm text-gray-500">Upload & view medical reports</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Upcoming Appointments */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Upcoming Appointments</h2>
          <Link className="text-sm text-blue-600 hover:underline flex items-center" to="/patient-appointments">
            View all <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">Dr. Rajesh Kumar</h3>
              <p className="text-sm text-gray-500">Cardiologist</p>
              <p className="text-sm text-gray-500 mt-1">31 May 2025 | 10:30 AM</p>
            </div>
            <Link className="text-sm text-blue-600 hover:underline" to="/patient-appointments/1">Details</Link>
          </div>
        </div>
      </div>

      {/* Recently Visited Doctors */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Recently Visited Doctors</h2>
          <Link className="text-sm text-blue-600 hover:underline flex items-center" to="/patient-search">
            View all <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-gray-900">Dr. Anand Patel</h3>
              <p className="text-sm text-gray-500">Pediatrician</p>
              <div className="flex items-center mt-1 text-yellow-500">
                <Star className="h-4 w-4" />
                <span className="text-sm ml-1">4.8</span>
              </div>
            </div>
            <Link className="text-sm text-blue-600 hover:underline" to="/patient-book/1">Book Again</Link>
          </div>
        </div>
      </div>

      {/* Health Summary */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Health Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-green-600 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Last Check-up</p>
                <p className="font-semibold">15 May 2025</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center">
              <FileText className="h-5 w-5 text-blue-600 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Medical Reports</p>
                <p className="font-semibold">5 Reports</p>
              </div>
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center">
              <Bell className="h-5 w-5 text-purple-600 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Reminders</p>
                <p className="font-semibold">2 Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
