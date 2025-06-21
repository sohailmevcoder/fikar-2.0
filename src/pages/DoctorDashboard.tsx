import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Calendar, 
  Clock, 
  User, 
  Settings, 
  ChevronLeft, 
  Bell, 
  CheckCircle, 
  XCircle, 
  PauseCircle 
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

// Sample data for demonstration
const currentQueue = [
  {
    id: 1,
    name: 'Aarav Sharma',
    age: 45,
    appointmentTime: '10:00 AM',
    status: 'completed',
    waitTime: 'Completed',
    reason: 'Follow-up Consultation',
    phone: '+91 98765 43210',
    completedTime: '10:25 AM'
  },
  {
    id: 2,
    name: 'Meera Patel',
    age: 36,
    appointmentTime: '10:15 AM',
    status: 'completed',
    waitTime: 'Completed (Current)',
    reason: 'Blood Pressure Check',
    phone: '+91 87654 32109',
    completedTime: '10:40 AM'
  },
  {
    id: 3,
    name: 'Rohan Gupta',
    age: 28,
    appointmentTime: '10:30 AM',
    status: 'waiting',
    waitTime: '~10 min ',
    reason: 'General Checkup',
    phone: '+91 76543 21098'
  },
  {
    id: 4,
    name: 'Priya Singh',
    age: 32,
    appointmentTime: '10:45 AM',
    status: 'waiting',
    waitTime: '~15 mins',
    reason: 'Migraine Issues',
    phone: '+91 65432 10987'
  },
  {
    id: 5,
    name: 'Ajay Kumar',
    age: 52,
    appointmentTime: '11:00 AM',
    status: 'waiting',
    waitTime: '~30 mins',
    reason: 'Heart Palpitations',
    phone: '+91 54321 09876'
  }
];

const upcomingAppointments = [
  {
    id: 6,
    name: 'Neha Verma',
    age: 29,
    appointmentTime: '11:15 AM',
    date: 'Today',
    reason: 'Pregnancy Consultation',
    isNew: true,
    phone: '+91 43210 98765'
  },
  {
    id: 7,
    name: 'Vikram Malhotra',
    age: 41,
    appointmentTime: '2:00 PM',
    date: 'Tomorrow',
    reason: 'Diabetes Follow-up',
    isNew: false,
    phone: '+91 32109 87654'
  },
  {
    id: 8,
    name: 'Sparsh Jain',
    age: 20,
    appointmentTime: '2:15 PM',
    date: 'Tomorrow',
    reason: 'Babasir',
    isNew: false,
    phone: '+91 32109 87654'
  }
];

const statistics = {
  totalPatients: 25,
  completedToday: 2,
  waitingNow: 3,
  averageWaitTime: '22 mins'
};

const DoctorDashboard = () => {
  const [availabilityStatus, setAvailabilityStatus] = useState<'available' | 'busy' | 'offline'>('available');
  const [queueFilter, setQueueFilter] = useState<'all' | 'completed' | 'waiting'>('all');
  const { toast } = useToast();
  const queueRef = useRef<HTMLDivElement>(null);

  const [appointmentStatus, setAppointmentStatus] = useState<{ [key: number]: 'accepted' | 'rejected' | null }>(
    () => Object.fromEntries(upcomingAppointments.map((a) => [a.id, null]))
  );
  
  const handleStatusChange = (status: 'available' | 'busy' | 'offline') => {
    setAvailabilityStatus(status);
    toast({
      title: "Status Updated",
      description: `Your availability status is now set to ${status}.`,
      variant: "default",
    });
  };
  
  const handleCompleteAppointment = (patientName: string) => {
    toast({
      title: "Appointment Completed",
      description: `Consultation with ${patientName} has been marked as completed.`,
      variant: "default",
    });
  };

  const handleAcceptAppointment = (id: number, name: string) => {
    setAppointmentStatus(prev => ({ ...prev, [id]: 'accepted' }));
    toast({
      title: "Appointment Accepted",
      description: `You have accepted the appointment with ${name}.`,
      variant: "default",
    });
  };

  const handleRejectAppointment = (id: number, name: string) => {
    setAppointmentStatus(prev => ({ ...prev, [id]: 'rejected' }));
    toast({
      title: "Appointment Rejected",
      description: `You have rejected the appointment with ${name}.`,
      variant: "destructive",
    });
  };

  const scrollToQueue = (filter: 'all' | 'completed' | 'waiting' = 'all') => {
    setQueueFilter(filter);
    queueRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredQueue = currentQueue.filter(patient => {
    if (queueFilter === 'completed') return patient.status === 'completed';
    if (queueFilter === 'waiting') return patient.status === 'waiting';
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Top navigation with back button */}
        <div className="bg-white border-b border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="text-fikar-primary hover:text-fikar-secondary transiton-all duration-300">
              <div className ="bg-fikar-light/30 hover:bg-fikar-light p-1.5 rounded-full group-hover:translate-x-0.5 transition-all duration-300"><ChevronLeft className="h-5 w-5" /></div>
              </Link>
              <div className='flex-item-center ml-4'>
                <h1 className="ml-4 text-xl font-semibold text-fikar-dark">Doctor Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <div className="relative">
                <a
                  className="h-6 w-6 mt-1 relative group transition-all duration-300"
                  href="/notification"
                >
                  <span className="absolute inset-0 rounded-full pointer-events-none transition-all duration-300 group-hover:shadow-[0_0_16px_4px_rgba(0,0,0,0.18)] group-active:shadow-[0_0_20px_6px_rgba(0,0,0,0.22)] group-hover:ring-2 group-hover:ring-yellow-500"></span>
                  <span className="absolute inset-1 rounded-full transition-all duration-300 group-hover:bg-yellow-100"></span>
                  <Bell className="h-6 w-6 relative z-10 transition-all duration-300 group-hover:text-yellow-700 group-hover:rotate-[5deg]" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center font-semibold z-20">
                    3
                  </span>
                </a>
              </div>
              <div className="relative">
                <button className="flex items-center bg-gradient-to-r from-fikar-light/30 to-gray-50 rounded-full pr-1.5 sm:pr-4 pl-1.5 py-1.5 hover:shadow-md transition-all duration-300">
                  <div className="bg-gradient-to-r from-fikar-primary to-fikar-secondary rounded-full p-0.5 mr-0 sm:mr-2">
                    <div className="bg-white rounded-full p-1">
                      <User className="h-4 w-4 text-fikar-primary" />
                    </div>
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-gray-700">Dr. Vivek Sharma
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 ml-1 text-gray-500">
                  <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <a
                className="text-gray-500 hover:text-fikar-primary bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full transition-all duration-300"
                href="/doc-setting"
              >
                <span className="block transition-transform duration-300 hover:rotate-45">
                  <Settings className="h-5 w-5" />
                </span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Status control and statistics */}
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Availability Status */}
            <div className="bg-white rounded-xl shadow p-6 col-span-1">
              <div className='flex flex-col space-y-1.5 p-6 pb-2'>
                <h3 className="tracking-tight text-2xl font-semibold text-fikar-dark flex items-center">
                  <span className='relative'>Availability Status
                    <div className="absolute -bottom-1 left-0 h-1 w-12 bg-gradient-to-r from-fikar-primary to-fikar-secondary rounded-full"></div>
                  </span>
                </h3>
                <p className="text-sm font-medium text-gray-500 mb-3">Control your current availability</p>
              </div>
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => handleStatusChange('available')}
                  className={`flex items-center px-4 py-2 rounded-md font-semibold ${availabilityStatus === 'available'
                      ? 'bg-green-600 text-white shadow-md'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Available
                  {availabilityStatus === 'available' && (
                    <span className="ml-auto bg-green-800 text-white text-xs px-2 py-0.5 rounded">Active</span>
                  )}
                </button>
                <button
                  onClick={() => handleStatusChange('busy')}
                  className={`flex items-center px-4 py-2 rounded-md font-semibold ${availabilityStatus === 'busy'
                      ? 'bg-amber-500 text-white shadow-md'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                  <PauseCircle className="h-5 w-5 mr-2" />
                  Busy
                  {availabilityStatus === 'busy' && (
                    <span className="ml-auto bg-orange-800 text-white text-xs px-2 py-0.5 rounded">Active</span>
                  )}
                </button>
                <button
                  onClick={() => handleStatusChange('offline')}
                  className={`flex items-center px-4 py-2 rounded-md font-semibold ${availabilityStatus === 'offline'
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                  <XCircle className="h-5 w-5 mr-2" />
                  Offline
                  {availabilityStatus === 'offline' && (
                    <span className="ml-auto bg-red-800 text-white text-xs px-2 py-0.5 rounded">Active</span>
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">Last updated: Just now</p>
            </div>

            {/* Statistics Cards */}
            <div className="col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Patients Today */}
              <div 
                className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.015] cursor-pointer"
                onClick={() => scrollToQueue('all')}
              >
                <div className="absolute top-0 left-0 h-24 w-24 bg-blue-100 rounded-br-full opacity-30 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 h-24 w-24 bg-blue-100 rounded-tl-full opacity-30 pointer-events-none"></div>

                <div className="relative flex flex-col items-center justify-center text-center space-y-1">
                  <Users className="h-6 w-6 text-blue-500 mb-1" />
                  <p className="text-sm text-gray-500">Patients Today</p>
                  <p className="text-3xl font-bold text-gray-900">{statistics.totalPatients}</p>
                </div>
              </div>

              {/* Completed */}
              <div 
                className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.015] cursor-pointer"
                onClick={() => scrollToQueue('completed')}
              >
                <div className="absolute top-0 left-0 h-24 w-24 bg-green-100 rounded-br-full opacity-30 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 h-24 w-24 bg-green-100 rounded-tl-full opacity-30 pointer-events-none"></div>

                <div className="relative flex flex-col items-center justify-center text-center space-y-1">
                  <CheckCircle className="h-6 w-6 text-green-500 mb-1" />
                  <p className="text-sm text-gray-500">Completed</p>
                  <p className="text-3xl font-bold text-gray-900">{statistics.completedToday}</p>
                </div>
              </div>

              {/* Waiting Now */}
              <div 
                className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.015] cursor-pointer"
                onClick={() => scrollToQueue('waiting')}
              >
                <div className="absolute top-0 left-0 h-24 w-24 bg-amber-100 rounded-br-full opacity-30 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 h-24 w-24 bg-amber-100 rounded-tl-full opacity-30 pointer-events-none"></div>

                <div className="relative flex flex-col items-center justify-center text-center space-y-1">
                  <Clock className="h-6 w-6 text-amber-500 mb-1" />
                  <p className="text-sm text-gray-500">Waiting Now</p>
                  <div className="flex items-center justify-center space-x-2">
                    <p className="text-3xl font-bold text-gray-900">{statistics.waitingNow}</p>
                    <span className="bg-amber-100 text-amber-600 text-xs px-2 py-0.5 rounded-full">Live</span>
                  </div>
                </div>
              </div>

              {/* Avg. Wait Time */}
              <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.015]">
                <div className="absolute top-0 left-0 h-24 w-24 bg-indigo-100 rounded-br-full opacity-30 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 h-24 w-24 bg-indigo-100 rounded-tl-full opacity-30 pointer-events-none"></div>

                <div className="relative flex flex-col items-center justify-center text-center space-y-1">
                  <Clock className="h-6 w-6 text-indigo-500 mb-1" />
                  <p className="text-sm text-gray-500">Avg. Wait Time</p>
                  <p className="text-3xl font-bold text-gray-900">{statistics.averageWaitTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <Tabs defaultValue="queue" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="queue">Current Queue</TabsTrigger>
              <TabsTrigger value="appointments">Upcoming Appointments</TabsTrigger>
            </TabsList>
            
            <TabsContent value="queue" className="space-y-6" ref={queueRef}>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-fikar-dark">Patient Queue</h2>
                {
                  <Button variant="outline" className="border-fikar-primary text-fikar-primary hover:bg-fikar-light">
                    <Calendar className="h-4 w-4 mr-2" /> View Schedule
                  </Button>
                 /* <div className="flex space-x-2">
                  <Button 
                    variant={queueFilter === 'all' ? 'default' : 'outline'} 
                    onClick={() => setQueueFilter('all')}
                  >
                    All ({currentQueue.length})
                  </Button>
                  <Button 
                    variant={queueFilter === 'completed' ? 'default' : 'outline'} 
                    onClick={() => setQueueFilter('completed')}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    Completed ({statistics.completedToday})
                  </Button>
                  <Button 
                    variant={queueFilter === 'waiting' ? 'default' : 'outline'} 
                    onClick={() => setQueueFilter('waiting')}
                    className="bg-amber-500 hover:bg-amber-600 text-white"
                  >
                    Waiting ({statistics.waitingNow})
                  </Button>
                </div> */}
              </div>
              
              {filteredQueue.map((patient, index) => (
                <Card key={patient.id} className={`border-l-4 ${
                  patient.status === 'in-progress' ? 'border-l-blue-500' :
                  patient.status === 'completed' ? 'border-l-green-500' : 
                  'border-l-amber-500'
                }`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center">
                          <h3 className="text-lg font-semibold text-fikar-dark">{patient.name}</h3>
                          <span className="ml-2 text-sm text-gray-500">{patient.age} yrs</span>
                          <Badge 
                            className={`ml-3 ${
                              patient.status === 'in-progress' 
                                ? 'bg-blue-100 text-blue-800' 
                                : patient.status === 'completed'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-amber-100 text-amber-800'
                            } border-0`}
                          >
                            {patient.status === 'in-progress' ? 'Current' : 
                             patient.status === 'completed' ? 'Completed' : 
                             `Waiting - #${index + 1}`}
                          </Badge>
                        </div>
                        <div className="mt-2 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Appointment: {patient.appointmentTime}</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>
                              {patient.status === 'completed' 
                                ? `Completed at: ${patient.completedTime}` 
                                : `Wait time: ${patient.waitTime}`}
                            </span>
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-gray-700">
                          <span className="font-medium">Reason:</span> {patient.reason}
                        </p>
                      </div>
                      
                      <div className="flex space-x-2">
                        {patient.status === 'in-progress' ? (
                          <Button 
                            onClick={() => handleCompleteAppointment(patient.name)}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Complete
                          </Button>
                        ) : (
                          <Button variant="outline" className="border-fikar-primary text-fikar-primary hover:bg-fikar-light">
                            View Details
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="appointments">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium text-fikar-dark">Upcoming Appointments</h2>
                  <Button variant="outline" className="border-fikar-primary text-fikar-primary hover:bg-fikar-light">
                    <Calendar className="h-4 w-4 mr-2" /> Full Calendar
                  </Button>
                </div>
                
                {upcomingAppointments.map((appointment) => (
                  <Card key={appointment.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center">
                            <h3 className="text-lg font-semibold text-fikar-dark">{appointment.name}</h3>
                            <span className="ml-2 text-sm text-gray-500">{appointment.age} yrs</span>
                            {appointment.isNew && (
                              <Badge className="ml-3 bg-blue-100 text-blue-800 border-0">New Patient</Badge>
                            )}
                          </div>
                          <div className="mt-2 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{appointment.date} at {appointment.appointmentTime}</span>
                            </div>
                          </div>
                          <p className="mt-2 text-sm text-gray-700">
                            <span className="font-medium">Reason:</span> {appointment.reason}
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                          {appointmentStatus[appointment.id] === 'accepted' && (
                            <Badge className="bg-green-100 text-green-700 border-0">Accepted</Badge>
                          )}
                          {appointmentStatus[appointment.id] === 'rejected' && (
                            <Badge className="bg-red-100 text-red-700 border-0">Rejected</Badge>
                          )}
                          {appointmentStatus[appointment.id] === null && (
                            <>
                              <Button
                                className="bg-green-600 hover:bg-green-700 text-white"
                                onClick={() => handleAcceptAppointment(appointment.id, appointment.name)}
                              >
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Accept
                              </Button>
                              <Button
                                className="bg-red-600 hover:bg-red-700 text-white"
                                onClick={() => handleRejectAppointment(appointment.id, appointment.name)}
                              >
                                <XCircle className="h-4 w-4 mr-2" />
                                Reject
                              </Button>
                            </>
                          )}

                          <div className="flex space-x-2">
                            <Button variant="outline" className="border-fikar-primary text-fikar-primary hover:bg-fikar-light">
                              View History
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
