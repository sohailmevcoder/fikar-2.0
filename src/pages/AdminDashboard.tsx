
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Calendar, 
  Clock, 
  User, 
  Settings, 
  ChevronLeft, 
  PlusCircle,
  Hospital,
  Activity,
  Stethoscope,
  UserPlus,
  BarChart,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

// Sample data for the clinic dashboard
const clinicStats = {
  totalDoctors: 12,
  activeNow: 8,
  totalAppointments: 124,
  completedToday: 45,
  waitingPatients: 16,
  averageWaitTime: '28 mins'
};

// Sample data for doctors
const doctors = [
  {
    id: 1,
    name: 'Dr. Vivek Sharma',
    specialty: 'Cardiologist',
    status: 'available',
    appointmentsToday: 15,
    nextAvailable: 'Now',
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: 2,
    name: 'Dr. Priya Patel',
    specialty: 'Pediatrician',
    status: 'busy',
    appointmentsToday: 12,
    currentQueue: 3,
    nextAvailable: '~45 mins',
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: 3,
    name: 'Dr. Ajay Kumar',
    specialty: 'Neurologist',
    status: 'offline',
    appointmentsToday: 8,
    nextAvailable: 'Tomorrow, 9 AM',
    image: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    id: 4,
    name: 'Dr. Meera Singh',
    specialty: 'Dermatologist',
    status: 'available',
    appointmentsToday: 10,
    nextAvailable: 'Now',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  }
];

// Sample upcoming appointments
const todaysAppointments = [
  {
    id: 1,
    patientName: 'Rahul Verma',
    doctorName: 'Dr. Vivek Sharma',
    time: '10:00 AM',
    status: 'completed',
    phone: '+91 98765 43210'
  },
  {
    id: 2,
    patientName: 'Aisha Khan',
    doctorName: 'Dr. Priya Patel',
    time: '10:15 AM',
    status: 'in-progress',
    phone: '+91 87654 32109'
  },
  {
    id: 3,
    patientName: 'Vikram Malhotra',
    doctorName: 'Dr. Ajay Kumar',
    time: '11:00 AM',
    status: 'waiting',
    phone: '+91 76543 21098'
  },
  {
    id: 4,
    patientName: 'Neha Gupta',
    doctorName: 'Dr. Meera Singh',
    time: '11:30 AM',
    status: 'confirmed',
    phone: '+91 65432 10987'
  },
  {
    id: 5,
    patientName: 'Suresh Patel',
    doctorName: 'Dr. Vivek Sharma',
    time: '12:00 PM',
    status: 'waiting',
    phone: '+91 54321 09876'
  }
];

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search initiated",
      description: `Searching for "${searchTerm}"`,
    });
  };
  
  const handleAddDoctor = () => {
    toast({
      title: "Add Doctor",
      description: "Redirecting to doctor registration form.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Top navigation with back button */}
        <div className="bg-white border-b border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="text-fikar-primary hover:text-fikar-secondary">
                <ChevronLeft className="h-5 w-5" />
              </Link>
              <h1 className="ml-4 text-xl font-semibold text-fikar-dark">Clinic Admin</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/admin-profile" className="text-fikar-primary hover:text-fikar-secondary flex items-center">
                <User className="h-5 w-5" />
                <span className="ml-2 hidden sm:inline">City Hospital</span>
              </Link>
              <Link to="/admin-settings" className="text-gray-500 hover:text-fikar-primary">
                <Settings className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Clinic Statistics */}
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-fikar-dark">Clinic Dashboard</h2>
            <div className="text-sm text-gray-500">
              <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Doctors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Stethoscope className="h-6 w-6 text-fikar-primary mr-2" />
                  <span className="text-3xl font-bold text-fikar-dark">{clinicStats.totalDoctors}</span>
                </div>
                <div className="mt-1 text-xs text-green-600">{clinicStats.activeNow} active now</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-fikar-primary mr-2" />
                  <span className="text-3xl font-bold text-fikar-dark">{clinicStats.totalAppointments}</span>
                </div>
                <div className="mt-1 text-xs text-green-600">{clinicStats.completedToday} completed today</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Waiting</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-amber-500 mr-2" />
                  <span className="text-3xl font-bold text-fikar-dark">{clinicStats.waitingPatients}</span>
                </div>
                <div className="mt-1 text-xs text-amber-600">Across all doctors</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Wait Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-fikar-secondary mr-2" />
                  <span className="text-3xl font-bold text-fikar-dark">{clinicStats.averageWaitTime}</span>
                </div>
                <div className="mt-1 text-xs text-amber-600">Average wait time</div>
              </CardContent>
            </Card>
            
            <Card className="col-span-2">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700">Quick Actions</h3>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" onClick={handleAddDoctor} className="bg-fikar-primary hover:bg-fikar-secondary">
                      <UserPlus className="h-4 w-4 mr-1" /> Add Doctor
                    </Button>
                    <Button size="sm" variant="outline" className="border-fikar-primary text-fikar-primary hover:bg-fikar-light">
                      <BarChart className="h-4 w-4 mr-1" /> Reports
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Search bar */}
        <div className="px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                type="text" 
                placeholder="Search doctors, patients, or appointments..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </form>
        </div>
        
        {/* Main content */}
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <Tabs defaultValue="doctors" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="doctors">Doctors</TabsTrigger>
              <TabsTrigger value="appointments">Today's Appointments</TabsTrigger>
            </TabsList>
            
            <TabsContent value="doctors" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-fikar-dark">Doctor Status</h2>
                <Button variant="outline" onClick={handleAddDoctor} className="border-fikar-primary text-fikar-primary hover:bg-fikar-light">
                  <PlusCircle className="h-4 w-4 mr-2" /> Add New Doctor
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {doctors.map((doctor) => (
                  <Card key={doctor.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex">
                        <div className="w-1/3 bg-fikar-light p-4 flex flex-col justify-center items-center">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white">
                            <img 
                              src={doctor.image} 
                              alt={doctor.name} 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'https://via.placeholder.com/150?text=' + doctor.name.charAt(3);
                              }}
                            />
                          </div>
                          <Badge 
                            className={`mt-2 ${
                              doctor.status === 'available' 
                                ? 'bg-green-100 text-green-800' 
                                : doctor.status === 'busy'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-red-100 text-red-800'
                            } border-0`}
                          >
                            {doctor.status === 'available' 
                              ? 'Available' 
                              : doctor.status === 'busy'
                              ? `Busy (Queue: ${doctor.currentQueue})`
                              : 'Offline'}
                          </Badge>
                        </div>
                        <div className="w-2/3 p-4">
                          <h3 className="text-lg font-semibold text-fikar-dark">{doctor.name}</h3>
                          <p className="text-sm text-gray-600">{doctor.specialty}</p>
                          
                          <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <span className="text-gray-500">Today:</span>
                              <span className="font-medium text-fikar-dark ml-1">{doctor.appointmentsToday} appts</span>
                            </div>
                            <div>
                              <span className="text-gray-500">Next available:</span>
                              <span className="font-medium text-fikar-dark ml-1">{doctor.nextAvailable}</span>
                            </div>
                          </div>
                          
                          <div className="mt-4 flex space-x-2">
                            <Button size="sm" variant="outline" className="text-fikar-primary border-fikar-primary hover:bg-fikar-light">
                              View Schedule
                            </Button>
                            <Button size="sm" variant="outline" className="text-gray-600 border-gray-300 hover:bg-gray-100">
                              Edit
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="appointments">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium text-fikar-dark">Today's Appointments</h2>
                  <Button variant="outline" className="border-fikar-primary text-fikar-primary hover:bg-fikar-light">
                    <Calendar className="h-4 w-4 mr-2" /> View Calendar
                  </Button>
                </div>
                
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Patient
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Doctor
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Time
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {todaysAppointments.map((appointment) => (
                        <tr key={appointment.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{appointment.patientName}</div>
                            <div className="text-sm text-gray-500">{appointment.phone}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{appointment.doctorName}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{appointment.time}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge 
                              className={`
                                ${appointment.status === 'completed' ? 'bg-green-100 text-green-800' : 
                                  appointment.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 
                                  appointment.status === 'waiting' ? 'bg-amber-100 text-amber-800' :
                                  'bg-gray-100 text-gray-800'} 
                                border-0
                              `}
                            >
                              {appointment.status === 'completed' ? 'Completed' : 
                               appointment.status === 'in-progress' ? 'In Progress' : 
                               appointment.status === 'waiting' ? 'Waiting' : 'Confirmed'}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <Button variant="link" className="text-fikar-primary">
                              Details
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
