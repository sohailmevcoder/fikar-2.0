
import React, { useState } from 'react';
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
    status: 'in-progress',
    waitTime: '0 mins (Current)',
    reason: 'Follow-up Consultation',
    phone: '+91 98765 43210'
  },
  {
    id: 2,
    name: 'Meera Patel',
    age: 36,
    appointmentTime: '10:15 AM',
    status: 'waiting',
    waitTime: '~15 mins',
    reason: 'Blood Pressure Check',
    phone: '+91 87654 32109'
  },
  {
    id: 3,
    name: 'Rohan Gupta',
    age: 28,
    appointmentTime: '10:30 AM',
    status: 'waiting',
    waitTime: '~30 mins',
    reason: 'General Checkup',
    phone: '+91 76543 21098'
  },
  {
    id: 4,
    name: 'Priya Singh',
    age: 32,
    appointmentTime: '10:45 AM',
    status: 'waiting',
    waitTime: '~45 mins',
    reason: 'Migraine Issues',
    phone: '+91 65432 10987'
  }
];

const upcomingAppointments = [
  {
    id: 5,
    name: 'Ajay Kumar',
    age: 52,
    appointmentTime: '11:00 AM',
    date: 'Today',
    reason: 'Heart Palpitations',
    isNew: false,
    phone: '+91 54321 09876'
  },
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
  }
];

const statistics = {
  totalPatients: 25,
  completedToday: 8,
  waitingNow: 4,
  averageWaitTime: '22 mins'
};

const DoctorDashboard = () => {
  const [availabilityStatus, setAvailabilityStatus] = useState<'available' | 'busy' | 'offline'>('available');
  const { toast } = useToast();
  
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
              <h1 className="ml-4 text-xl font-semibold text-fikar-dark">Doctor Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-fikar-primary">
                <Bell className="h-5 w-5" />
              </button>
              <Link to="/doctor-profile" className="text-fikar-primary hover:text-fikar-secondary flex items-center">
                <User className="h-5 w-5" />
                <span className="ml-2 hidden sm:inline">Dr. Vivek Sharma</span>
              </Link>
              <Link to="/doctor-settings" className="text-gray-500 hover:text-fikar-primary">
                <Settings className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Status control and statistics */}
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Availability Status</CardTitle>
                <CardDescription>Control your current availability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-3">
                  <Button 
                    onClick={() => handleStatusChange('available')}
                    className={`justify-start ${availabilityStatus === 'available' ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  >
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Available
                  </Button>
                  <Button 
                    onClick={() => handleStatusChange('busy')}
                    className={`justify-start ${availabilityStatus === 'busy' ? 'bg-amber-500 hover:bg-amber-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  >
                    <PauseCircle className="h-5 w-5 mr-2" />
                    Busy
                  </Button>
                  <Button 
                    onClick={() => handleStatusChange('offline')}
                    className={`justify-start ${availabilityStatus === 'offline' ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  >
                    <XCircle className="h-5 w-5 mr-2" />
                    Offline
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="text-sm text-gray-500">
                Last updated: Just now
              </CardFooter>
            </Card>
            
            <div className="col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Patients Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-fikar-primary mr-2" />
                    <span className="text-3xl font-bold text-fikar-dark">{statistics.totalPatients}</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Completed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                    <span className="text-3xl font-bold text-fikar-dark">{statistics.completedToday}</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Waiting Now</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-amber-500 mr-2" />
                    <span className="text-3xl font-bold text-fikar-dark">{statistics.waitingNow}</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Avg. Wait Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-fikar-secondary mr-2" />
                    <span className="text-3xl font-bold text-fikar-dark">{statistics.averageWaitTime}</span>
                  </div>
                </CardContent>
              </Card>
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
            
            <TabsContent value="queue" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-fikar-dark">Patient Queue</h2>
                <Button variant="outline" className="border-fikar-primary text-fikar-primary hover:bg-fikar-light">
                  <Calendar className="h-4 w-4 mr-2" /> View Schedule
                </Button>
              </div>
              
              {currentQueue.map((patient, index) => (
                <Card key={patient.id} className={`border-l-4 ${index === 0 ? 'border-l-green-500' : 'border-l-amber-500'}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center">
                          <h3 className="text-lg font-semibold text-fikar-dark">{patient.name}</h3>
                          <span className="ml-2 text-sm text-gray-500">{patient.age} yrs</span>
                          <Badge 
                            className={`ml-3 ${
                              patient.status === 'in-progress' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-amber-100 text-amber-800'
                            } border-0`}
                          >
                            {patient.status === 'in-progress' ? 'Current' : `Waiting - #${index + 1}`}
                          </Badge>
                        </div>
                        <div className="mt-2 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Appointment: {patient.appointmentTime}</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>Wait time: {patient.waitTime}</span>
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-gray-700">
                          <span className="font-medium">Reason:</span> {patient.reason}
                        </p>
                      </div>
                      
                      <div className="flex space-x-2">
                        {index === 0 ? (
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
                        
                        <div className="flex space-x-2">
                          <Button variant="outline" className="border-fikar-primary text-fikar-primary hover:bg-fikar-light">
                            View History
                          </Button>
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
