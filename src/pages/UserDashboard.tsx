
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, User, ChevronLeft, Filter, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import DoctorCard from '@/components/UI/DoctorCard';
import { useToast } from '@/hooks/use-toast';

// Sample data for demonstration
const doctors = [
  {
    id: 1,
    name: 'Vivek Sharma',
    specialty: 'Cardiologist',
    location: 'City Hospital, Gwalior',
    distance: '2.3 km',
    rating: 4.8,
    reviewCount: 124,
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    status: 'available' as const,
    phoneNumber: '+91 98765 43210'
  },
  {
    id: 2,
    name: 'Priya Patel',
    specialty: 'Pediatrician',
    location: 'LifeCare Clinic, Gwalior',
    distance: '3.1 km',
    rating: 4.6,
    reviewCount: 89,
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    status: 'busy' as const,
    queueLength: 3,
    phoneNumber: '+91 98765 12345'
  },
  {
    id: 3,
    name: 'Ajay Kumar',
    specialty: 'Neurologist',
    location: 'Brain & Spine Center, Gwalior',
    distance: '1.5 km',
    rating: 4.9,
    reviewCount: 156,
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    status: 'offline' as const,
    nextAvailable: '2:30 PM Tomorrow',
    phoneNumber: '+91 87654 32109'
  },
  {
    id: 4,
    name: 'Meera Singh',
    specialty: 'Dermatologist',
    location: 'Skin Care Clinic, Gwalior',
    distance: '4.2 km',
    rating: 4.7,
    reviewCount: 112,
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    status: 'available' as const,
    phoneNumber: '+91 76543 21098'
  },
  {
    id: 5,
    name: 'Rahul Verma',
    specialty: 'Orthopedic Surgeon',
    location: 'Bone & Joint Hospital, Gwalior',
    distance: '3.8 km',
    rating: 4.5,
    reviewCount: 78,
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    status: 'busy' as const,
    queueLength: 2,
    phoneNumber: '+91 65432 10987'
  }
];

// Sample appointments
const appointments = [
  {
    id: 1,
    doctorName: 'Dr. Vivek Sharma',
    specialty: 'Cardiologist',
    date: 'Today',
    time: '2:30 PM',
    queuePosition: 2,
    status: 'Upcoming',
    location: 'City Hospital, Gwalior',
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: 2,
    doctorName: 'Dr. Priya Patel',
    specialty: 'Pediatrician',
    date: 'Tomorrow',
    time: '11:00 AM',
    status: 'Confirmed',
    location: 'LifeCare Clinic, Gwalior',
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: 3,
    doctorName: 'Dr. Ajay Kumar',
    specialty: 'Neurologist',
    date: '15 Jun 2023',
    time: '4:00 PM',
    status: 'Completed',
    location: 'Brain & Spine Center, Gwalior',
    image: 'https://randomuser.me/api/portraits/men/3.jpg'
  }
];

const UserDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search initiated",
      description: `Searching for "${searchTerm}"`,
    });
  };
  
  const handleBooking = (doctorName: string) => {
    toast({
      title: "Appointment Booked",
      description: `Your appointment with ${doctorName} has been confirmed.`,
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
              <h1 className="ml-4 text-xl font-semibold text-fikar-dark">Find Doctors</h1>
            </div>
            <Link to="/user-profile" className="inline-flex items-center text-fikar-primary hover:text-fikar-secondary">
              <User className="h-5 w-5" />
              <span className="ml-2">My Profile</span>
            </Link>
          </div>
        </div>
        
        {/* Search and filter section */}
        <div className="bg-white shadow-sm px-4 py-5 sm:px-6 lg:px-8">
          <form onSubmit={handleSearch}>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input 
                  type="text" 
                  placeholder="Search by doctor name, specialty, or clinic" 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button type="submit" className="bg-fikar-primary hover:bg-fikar-secondary">Search</Button>
              <Button variant="outline" className="sm:ml-2 border-fikar-primary text-fikar-primary hover:bg-fikar-light">
                <Filter className="h-4 w-4 mr-2" /> Filter
              </Button>
            </div>
          </form>
        </div>
        
        {/* Main content */}
        <div className="py-6 px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="find-doctors" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="find-doctors">Find Doctors</TabsTrigger>
              <TabsTrigger value="appointments">My Appointments</TabsTrigger>
            </TabsList>
            
            <TabsContent value="find-doctors" className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-fikar-dark">Available Doctors</h2>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Last updated: Just now</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {doctors.map((doctor) => (
                  <DoctorCard
                    key={doctor.id}
                    name={doctor.name}
                    specialty={doctor.specialty}
                    location={doctor.location}
                    distance={doctor.distance}
                    rating={doctor.rating}
                    reviewCount={doctor.reviewCount}
                    image={doctor.image}
                    status={doctor.status}
                    queueLength={doctor.queueLength}
                    nextAvailable={doctor.nextAvailable}
                    phoneNumber={doctor.phoneNumber}
                    onBook={() => handleBooking(`Dr. ${doctor.name}`)}
                    onViewProfile={() => {
                      toast({
                        title: "Profile View",
                        description: `Viewing profile of Dr. ${doctor.name}`,
                      });
                    }}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="appointments">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium text-fikar-dark">Your Appointments</h2>
                  <Button variant="outline" className="border-fikar-primary text-fikar-primary hover:bg-fikar-light">
                    <Calendar className="h-4 w-4 mr-2" /> Book New
                  </Button>
                </div>
                
                {appointments.map((appointment) => (
                  <div 
                    key={appointment.id}
                    className="bg-white rounded-lg shadow p-4 border-l-4 border-fikar-primary"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                        <img 
                          src={appointment.image} 
                          alt={appointment.doctorName} 
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://via.placeholder.com/150?text=' + appointment.doctorName.charAt(3);
                          }}
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-fikar-dark">{appointment.doctorName}</h3>
                          <Badge 
                            className={`
                              ${appointment.status === 'Upcoming' ? 'bg-amber-100 text-amber-800' : 
                                appointment.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 
                                'bg-gray-100 text-gray-800'} 
                              border-0
                            `}
                          >
                            {appointment.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{appointment.specialty}</p>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{appointment.date} at {appointment.time}</span>
                        </div>
                        <div className="mt-1 flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{appointment.location}</span>
                        </div>
                        
                        {appointment.queuePosition && (
                          <div className="mt-3 p-2 bg-fikar-light rounded-lg">
                            <div className="flex items-center">
                              <div className="h-8 w-8 bg-fikar-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                                {appointment.queuePosition}
                              </div>
                              <p className="ml-2 text-sm font-medium text-fikar-primary">
                                Your position in queue • Est. wait: ~{appointment.queuePosition * 15} mins
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-4 flex space-x-3">
                      <Button variant="outline" size="sm" className="border-fikar-primary text-fikar-primary hover:bg-fikar-light">
                        Reschedule
                      </Button>
                      <Button variant="outline" size="sm" className="border-red-400 text-red-500 hover:bg-red-50">
                        Cancel
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
