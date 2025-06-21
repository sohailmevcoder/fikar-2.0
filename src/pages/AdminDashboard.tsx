import { useState } from 'react';
import { CirclePlus, User, ChevronDown, ChevronLeft, Settings, Search, Stethoscope, Calendar, Users, Clock, UserPlus, BarChart3 } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Vivek Sharma',
    role: 'Cardiologist',
    img: 'https://randomuser.me/api/portraits/men/1.jpg',
    today: 15,
    status: 'Available',
    statusColor: 'green',
    nextAvailable: 'Now',
  },
  {
    name: 'Dr. Priya Patel',
    role: 'Pediatrician',
    img: 'https://randomuser.me/api/portraits/women/2.jpg',
    today: 12,
    status: 'Busy (Queue: 3)',
    statusColor: 'amber',
    nextAvailable: '~45 mins',
  },
  {
    name: 'Dr. Ajay Kumar',
    role: 'Neurologist',
    img: 'https://randomuser.me/api/portraits/men/3.jpg',
    today: 8,
    status: 'Offline',
    statusColor: 'red',
    nextAvailable: 'Tomorrow, 9 AM',
  },
  {
    name: 'Dr. Meera Singh',
    role: 'Dermatologist',
    img: 'https://randomuser.me/api/portraits/women/4.jpg',
    today: 10,
    status: 'Available',
    statusColor: 'green',
    nextAvailable: 'Now',
  },
];

 const appointments = [
  { patient: 'Rahul Verma', phone: '+91 98765 43210', doctor: 'Dr. Vivek Sharma', time: '10:00 AM', status: 'Completed', statusColor: 'green' },
  { patient: 'Aisha Khan', phone: '+91 87654 32109', doctor: 'Dr. Priya Patel', time: '10:15 AM', status: 'In Progress', statusColor: 'blue' },
  { patient: 'Vikram Malhotra', phone: '+91 76543 21098', doctor: 'Dr. Ajay Kumar', time: '11:00 AM', status: 'Waiting', statusColor: 'amber' },
  { patient: 'Neha Gupta', phone: '+91 65432 10987', doctor: 'Dr. Meera Singh', time: '11:30 AM', status: 'Confirmed', statusColor: 'gray' },
  { patient: 'Suresh Patel', phone: '+91 54321 09876', doctor: 'Dr. Vivek Sharma', time: '12:00 PM', status: 'Waiting', statusColor: 'amber' },
];


const ClinicAdminPanel = () => {
  const [activeTab, setActiveTab] = useState('Doctors');

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-white sticky top-0 z-10 shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a className="group text-fikar-primary hover:text-fikar-secondary transition-all duration-300" href="/">
                <div className="bg-fikar-light/30 hover:bg-fikar-light p-1.5 rounded-full group-hover:-translate-x-0.5 transition-all duration-300">
                  <ChevronLeft className="h-5 w-5" />
                </div>
              </a>
              <div className="flex items-center ml-4">
                <div className="h-7 w-1.5 rounded-full bg-gradient-to-b from-fikar-primary to-fikar-secondary mr-3 hidden sm:block"></div>
                <h1 className="text-xl font-semibold text-fikar-dark">Clinic Admin</h1>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <div className="relative">
                <button className="flex items-center bg-gradient-to-r from-fikar-light/30 to-gray-50 rounded-full pr-2 sm:pr-4 pl-1.5 py-1.5 hover:shadow-md transition-all duration-300">
                  <div className="bg-gradient-to-r from-fikar-primary to-fikar-secondary rounded-full p-0.5 mr-2">
                    <div className="bg-white rounded-full p-1">
                      <User className="h-4 w-4 text-fikar-primary" />
                    </div>
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-gray-700">City Hospital</span>
                  <ChevronDown className="h-4 w-4 ml-1 text-gray-500" />
                </button>
              </div>
              <div className="relative">
                <a className="text-gray-500 hover:text-fikar-primary bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full transition-all duration-300 block" href="/admin-settings">
                  <Settings className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header Date + Stats */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-fikar-dark">Clinic Dashboard</h2>
          <div className="text-sm text-gray-500">
            <span>Saturday, June 21, 2025</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Doctors</h3>
            <div className="flex items-center">
              <Stethoscope className="h-6 w-6 text-fikar-primary mr-2" />
              <span className="text-3xl font-bold text-fikar-dark">12</span>
            </div>
            <div className="mt-1 text-xs text-green-600">8 active now</div>
          </div>

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Appointments</h3>
            <div className="flex items-center">
              <Calendar className="h-6 w-6 text-fikar-primary mr-2" />
              <span className="text-3xl font-bold text-fikar-dark">124</span>
            </div>
            <div className="mt-1 text-xs text-green-600">45 completed today</div>
          </div>

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Waiting</h3>
            <div className="flex items-center">
              <Users className="h-6 w-6 text-amber-500 mr-2" />
              <span className="text-3xl font-bold text-fikar-dark">16</span>
            </div>
            <div className="mt-1 text-xs text-amber-600">Across all doctors</div>
          </div>

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Wait Time</h3>
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-fikar-secondary mr-2" />
              <span className="text-3xl font-bold text-fikar-dark">28 mins</span>
            </div>
            <div className="mt-1 text-xs text-amber-600">Average wait time</div>
          </div>

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 col-span-2">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium text-gray-700">Quick Actions</h3>
              <div className="flex space-x-2">
                <button className="inline-flex items-center gap-2 text-sm font-medium rounded-md px-3 h-9 bg-fikar-primary hover:bg-fikar-secondary text-white">
                  <UserPlus className="h-4 w-4 mr-1" /> Add Doctor
                </button>
                <button className="inline-flex items-center gap-2 text-sm font-medium rounded-md px-3 h-9 border border-fikar-primary text-fikar-primary hover:bg-fikar-light">
                  <BarChart3 className="h-4 w-4 mr-1" /> Reports
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Search Input */}
        <form className="my-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              className="pl-10 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="Search doctors, patients, or appointments..."
            />
          </div>
        </form>

        {/* Tabs + Doctors */}
        <div className="mt-10">
          <div className="grid w-full grid-cols-2 mb-8 h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
            <button onClick={() => setActiveTab('Doctors')} className={`px-3 py-1.5 text-sm font-medium rounded-sm ${activeTab === 'Doctors' ? 'bg-white text-black shadow' : ''}`}>Doctors</button>
            <button onClick={() => setActiveTab('Appointments')} className={`px-3 py-1.5 text-sm font-medium rounded-sm ${activeTab === 'Appointments' ? 'bg-white text-black shadow' : ''}`}>Today's Appointments</button>
          </div>

          {activeTab === 'Doctors' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-fikar-dark">Doctor Status</h2>
                <button className="inline-flex items-center justify-center gap-2 text-sm font-medium border bg-background text-fikar-primary border-fikar-primary hover:bg-fikar-light rounded-md px-4 py-2 h-10">
                  <CirclePlus className="h-4 w-4 mr-2" /> Add New Doctor
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {doctors.map((doc, idx) => (
                  <div key={idx} className="rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex">
                      <div className="w-1/3 bg-fikar-light p-4 flex flex-col justify-center items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white">
                          <img src={doc.img} alt={doc.name} className="w-full h-full object-cover" />
                        </div>
                        <div className={`mt-2 text-xs font-semibold bg-${doc.statusColor}-100 text-${doc.statusColor}-800 px-2.5 py-0.5 rounded-full`}>{doc.status}</div>
                      </div>
                      <div className="w-2/3 p-4">
                        <h3 className="text-lg font-semibold text-fikar-dark">{doc.name}</h3>
                        <p className="text-sm text-gray-600">{doc.role}</p>
                        <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                          <div><span className="text-gray-500">Today:</span><span className="font-medium text-fikar-dark ml-1">{doc.today} appts</span></div>
                          <div><span className="text-gray-500">Next available:</span><span className="font-medium text-fikar-dark ml-1">{doc.nextAvailable}</span></div>
                        </div>
                        <div className="mt-4 flex space-x-2">
                          <button className="inline-flex items-center justify-center gap-2 text-sm font-medium border bg-background text-fikar-primary border-fikar-primary hover:bg-fikar-light rounded-md px-3 h-9">View Schedule</button>
                       
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
         {activeTab === 'Appointments' && (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {appointments.map((appt, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{appt.patient}</div>
                        <div className="text-sm text-gray-500">{appt.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{appt.doctor}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{appt.time}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-${appt.statusColor}-100 text-${appt.statusColor}-800`}>
                          {appt.status}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="underline hover:no-underline text-fikar-primary hover:text-fikar-secondary">Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClinicAdminPanel;
