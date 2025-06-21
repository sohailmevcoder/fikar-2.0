

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,Calendar,
  ChevronRight,
  ChevronLeft,
  MapPin,
  FileText,
  User,
  Home,
  Bell,
  LogOut,
  Settings,
  BarChart3,
  ChevronDown,
  Star,
  Menu,
  Filter,
  Clock,
  Hospital,
  Phone,
  Navigation,
  Stethoscope,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import heart from '../assests/Specility images/heart.png';
import brain from '../assests/Specility images/brain.png';
import teeth from '../assests/Specility images/teeth.png';
import bones from '../assests/Specility images/bones.png';
import general from '../assests/Specility images/general.png';
import skin from '../assests/Specility images/skin.png';
import child from '../assests/Specility images/child.png';
import cancer from '../assests/Specility images/cancer.png';
import eye from '../assests/Specility images/eye.png';
import women from '../assests/Specility images/women.png';
import hormones from '../assests/Specility images/hormones.png';
// import heart from '../assests/Specility images/heart.png';
// import heart from '../assests/Specility images/heart.png';
// import heart from '../assests/Specility images/heart.png';
// import heart from '../assests/Specility images/heart.png';
// import heart from '../assests/Specility images/heart.png';
// import heart from '../assests/Specility images/heart.png';
// import heart from '../assests/Specility images/heart.png';
// import heart from '../assests/Specility images/heart.png';
// import heart from '../assests/Specility images/heart.png';
// import heart from '../assests/Specility images/heart.png';
// import heart from '../assests/Specility images/heart.png';
// import heart from '../assests/Specility images/heart.png';


const notificationCount = 3;
//  use in search
const specialties = [
  { image: heart, name: 'Heart' },
  { image: brain, name: 'Brain' },
  { image: teeth, name: 'Teeth & Mouth' },
  { image: bones, name: 'Bones & Joints' },
  { image: brain, name: 'Brain' },
  { image: brain, name: 'Brain' },
  { image: brain, name: 'Brain' },
  { image: brain, name: 'Brain' },
  { image: brain, name: 'Brain' },
  { image: brain, name: 'Brain' },
  { image: brain, name: 'Brain' },
  { image: brain, name: 'Brain' },
  { image: brain, name: 'Brain' },
  { image: brain, name: 'Brain' },
  { image: brain, name: 'Brain' },
  { image: brain, name: 'Brain' },
  { image: brain, name: 'Brain' },
  
  
];
// use in search
const hospitalname = [
  {
    id: 1,
    name: "ITM Hospital & Research Center",
    specialty: "Cardiac Center",
    rating: 4.7,
    doctors: 45,
    distance: "2.5 km",
    location: "Sector 10",
    facilities: ["Emergency Care", "ICU", "Pharmacy", "Lab Services"],
    image: "/hospital-1.jpg",
  },
  {
    id: 2,
    name: "Max Super Speciality Hospital",
    specialty: "Multi-Speciality",
    rating: 4.8,
    doctors: 120,
    distance: "8.3 km",
    location: "Saket, New Delhi",
    facilities: ["Emergency Care", "ICU", "Pharmacy", "Lab Services", "Radiology"],
    image: "/hospital-2.jpg",
  },
  {
    id: 3,
    name: "Apollo Hospitals",
    specialty: "Multi-Speciality",
    rating: 4.9,
    doctors: 150,
    distance: "10.1 km",
    location: "Indraprastha, Delhi",
    facilities: ["Emergency Care", "ICU", "Pharmacy", "Lab Services", "Radiology", "Oncology"],
    image: "/hospital-3.jpg",
  },
  {
    id: 4,
    name: "Fortis Hospital",
    specialty: "Multi-Speciality",
    rating: 4.6,
    doctors: 85,
    distance: "7.2 km",
    location: "Sector 62, Noida",
    facilities: ["Emergency Care", "ICU", "Pharmacy", "Lab Services", "Dialysis"],
    image: "/hospital-4.jpg",
  }
  
];




// {'--------------------------------------------Used in Location--------------------------------'}



const hospitals = [
  {
    id: 1,
    name: 'City Heart Hospital',
    specialties: ['Cardiology', 'Neurology', 'General Medicine'],
    rating: 4.6,
    distance: '2.3 km',
    phone: '+91 11 2345 6789',
    hours: '24 Hours',
    url: '/patient-hospital/1',
  },
  {
    id: 2,
    name: 'Wellness Multispecialty Hospital',
    specialties: ['Oncology', 'Pediatrics', 'Orthopedics'],
    rating: 4.5,
    distance: '4.1 km',
    phone: '+91 11 3456 7890',
    hours: '8:00 AM - 10:00 PM',
    url: '/patient-hospital/2',
  },
  {
    id: 3,
    name: 'Metro City Hospital',
    specialties: ['Emergency Care', 'Surgery', 'Radiology'],
    rating: 4.7,
    distance: '3.2 km',
    phone: '+91 11 4567 8901',
    hours: '24 Hours',
    url: '/patient-hospital/3',
  },
];


// {'--------------------------------------------Used in Appointment--------------------------------'}


const pastAppointments = [
  {
    id: 4,
    date: '15 April 2025',
    time: '3:30 PM',
    doctor: 'Dr. Sanjay Gupta',
    specialization: 'Orthopedic',
    location: 'Bone & Joint Clinic, Model Town, Delhi',
    type: 'In-Person Visit',
    status: 'Completed',
    statusColor: 'bg-blue-100 text-blue-800',
    actions: ['prescription', 'feedback', 'details'],
  },
  {
    id: 5,
    date: '5 March 2025',
    time: '9:45 AM',
    doctor: 'Dr. Kavita Patel',
    specialization: 'Gynecologist',
    location: "Women's Health Clinic, Vasant Vihar, New Delhi",
    type: 'In-Person Visit',
    status: 'Cancelled',
    statusColor: 'bg-red-100 text-red-800',
    actions: ['details'],
  },
];
// use in search
const doctors = [
  {
    id: 1,
    initials: 'DRK',
    name: 'Dr. Rajesh Kumar',
    specialization: 'Cardiologist',
    rating: 4.8,
    experience: '15 years experience',
    availability: 'Available Today',
    distance: '2.5 km',
    location: 'City Heart Hospital, Sector 10, Gurgaon',
    fee: '₹1,200',
  },
  {
    id: 2,
    initials: 'DPS',
    name: 'Dr. Priya Sharma',
    specialization: 'Dermatologist',
    rating: 4.5,
    experience: '8 years experience',
    availability: 'Available Today',
    distance: '4.8 km',
    hospital: 'Skin Care Clinic, Connaught Place, New Delhi',
    fee: '₹900',
  },
  {
    id: 3,
    initials: 'DMV',
    name: 'Dr. Manish Verma',
    specialization: 'General Physician',
    rating: 4.7,
    experience: '12 years experience',
    availability: null,
    distance: '6.3 km',
    hospital: 'City General Hospital, Sector 15, Noida',
    fee: '₹800',
  },
  {
    id: 4,
    initials: 'DSG',
    name: 'Dr. Sanjay Gupta',
    specialization: 'Orthopedic',
    rating: 4.9,
    experience: '20 years experience',
    availability: 'Available Today',
    distance: '3.1 km',
    hospital: 'Bone & Joint Clinic, Model Town, Delhi',
    fee: '₹1,500',
  },
  {
    id: 5,
    initials: 'DKP',
    name: 'Dr. Kavita Patel',
    specialization: 'Gynecologist',
    rating: 4.6,
    experience: '10 years experience',
    availability: null,
    distance: '5.5 km',
    hospital: "Women's Health Clinic, Vasant Vihar, New Delhi",
    fee: '₹1,100',
  },
];

// used in appointment

const resentdoctors = [
  {
    id: 1,
    name: 'Dr. Anand Patel',
    specialization: 'Pediatrician',
    initials: 'DAP',
    rating: 4.8,
    profileUrl: '/patient-doctor/1',
    bookUrl: '/patient-book/1',
  },
  {
    id: 2,
    name: 'Dr. Meera Gupta',
    specialization: 'Gynecologist',
    initials: 'DMG',
    rating: 4.5,
    profileUrl: '/patient-doctor/2',
    bookUrl: '/patient-book/2',
  },
  {
    id: 3,
    name: 'Dr. Suresh Joshi',
    specialization: 'Orthopedic',
    initials: 'DSJ',
    rating: 4.9,
    profileUrl: '/patient-doctor/3',
    bookUrl: '/patient-book/3',
  },
];


// {--------------------------------------------Used in  Dasboard & appointment--------------------------------'}


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
    mode: 'In-Person Visit',
    modeColor: 'border-blue-500 text-blue-500',
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
    mode: 'In-Person Visit',
    modeColor: 'border-blue-500 text-blue-500',
    detailsLink: '/patient-appointments/2',
  },
  {
    id: 3,
    date: '10 June 2025',
    time: '11:00 AM',
    status: 'Confirmed',
    statusColor: 'green',
    doctor: 'Dr. Manish Verma',
    specialty: 'General Physician',
    mode: 'Video Consultation',
    modeColor: 'border-purple-500 text-purple-500',
    location: 'City General Hospital, Sector 15, Noida',
    detailsLink: '/patient-appointments/3',
  },
];





interface DashboardCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color?: 'blue' | 'green' | 'purple' | 'red' | 'gray';
  to?: string;
  onClick?: () => void;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  icon,
  title,
  desc,
  color = 'blue',
  to,
  onClick,
}) => {
  const Wrapper: React.ElementType = to ? Link : 'div';
  const wrapperProps = to ? { to } : { onClick };

  return (
    <Wrapper
      {...wrapperProps}
      className={`rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer border-l-4 
        ${color === 'blue' ? 'border-blue-500' : ''}
        ${color === 'green' ? 'border-green-500' : ''}
        ${color === 'purple' ? 'border-purple-500' : ''}
        ${color === 'red' ? 'border-red-500' : ''}
        ${color === 'gray' ? 'border-gray-500' : ''}`}
    >
      <div className="p-6 pt-5">
        <div className="flex items-center">
          <div
            className={`
              rounded-full p-3 mr-4 
              ${color === 'blue' ? 'bg-blue-100' : ''}
              ${color === 'green' ? 'bg-green-100' : ''}
              ${color === 'purple' ? 'bg-purple-100' : ''}
              ${color === 'red' ? 'bg-red-100' : ''}
              ${color === 'gray' ? 'bg-gray-100' : ''}
            `}
          >
            {icon}
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500">{desc}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};




const NavItem = ({ label, icon, isActive, onClick }) => {
  const classes = `w-full group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg ${
    isActive
      ? 'bg-fikar-primary/10 text-fikar-primary'
      : 'text-gray-700 hover:text-fikar-primary hover:bg-fikar-primary/5'
  }`;

  if (onClick) {
    return (
      <button onClick={onClick} className={classes}>
        {icon}
        {label}
      </button>
    );
  }

  return (
    <div className={classes}>
      {icon}
      {label}
    </div>
  );
};


// {'--------------------------------------------Side Bar Start--------------------------------'}


const Sidebar = ({ onSelect, selectedPanel }) => {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 fixed">
      <div className="flex flex-col h-full">
        <div className="flex justify-center py-1">
          <Link to="/">
            <img src="/fikar-logo.svg" alt="Fikar Logo" className="h-12 w-auto" />
          </Link>
        </div>
        <div className="px-6 py-3 border-t border-b border-gray-200">
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
            <NavItem
              label="Dashboard"
              icon={<Home className="h-5 w-5 mr-2" />}
              isActive={selectedPanel === 'dashboard'}
              onClick={() => onSelect('dashboard')}
            />
            <NavItem 
              label="Appointment" 
              icon={<Calendar className="h-5 w-5 mr-2" />} 
              isActive={selectedPanel === 'Appointment'}
              onClick={() => onSelect('Appointment')}
            />
            <NavItem 
              label="Locations" 
              icon={<MapPin className="h-5 w-5 mr-2" />} 
              isActive={selectedPanel === 'Location'}
              onClick={() => onSelect('Location')}
            />
            <NavItem 
              label="Search" 
              icon={<Search className="h-5 w-5 mr-2" />} 
              isActive={selectedPanel === 'Search'}
              onClick={() => onSelect('Search')}
              />
            <NavItem 
              label="Reports" 
              icon={<FileText className="h-5 w-5 mr-2" />} 
              isActive={selectedPanel === 'Report'}
              onClick={() => onSelect('Report')}
              />
            <div className="relative">
              <Link to="/patient-notifications">
                <NavItem label="Notifications" icon={<Bell className="h-5 w-5 mr-2" />} />
              </Link>
              {notificationCount > 0 && (
                <span className="absolute right-2 top-2 bg-fikar-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notificationCount}
                </span>
              )}
            </div>
            <Link to="/patient-health"><NavItem label="Health Tracker" icon={<BarChart3 className="h-5 w-5 mr-2" />} /></Link>
          </nav>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Account</h3>
            <nav className="mt-2 space-y-1">
              <Link to="/patient-profile"><NavItem label="Profile" icon={<User className="h-5 w-5 mr-2" />} /></Link>
              <Link to="/patient-settings"><NavItem label="Settings" icon={<Settings className="h-5 w-5 mr-2" />} /></Link>
              <button className="w-full flex items-center px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-fikar-primary hover:bg-fikar-primary/5 rounded-lg">
                <LogOut className="h-5 w-5 mr-2" /> Log out
              </button>
            </nav>
          </div>
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

// {'--------------------------------------------Side Bar End--------------------------------'}


const UserDashboard = () => {
    const initialPanel = (localStorage.getItem('selectedPanel') as 'dashboard' | 'Appointment' | 'Location' | 'Search' | 'Report') || 'Search';
  const [selectedPanel, setSelectedPanel] = useState<'dashboard' | 'Appointment' | 'Location' | 'Search' | 'Report'>(initialPanel);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  // Search Bar in Search
  const [activeTab, setActiveTab] = useState("all")
  const filteredDoctors = doctors.filter((doc) =>
  `${doc.name} ${doc.specialization} ${doc.location}`
    .toLowerCase()
    .includes(searchQuery.toLowerCase())
);

const filteredHospitals = hospitalname.filter((hospital) =>
  `${hospital.name} ${hospital.specialty} ${hospital.location}`
    .toLowerCase()
    .includes(searchQuery.toLowerCase())
);

  const { toast } = useToast();

  // used in Search Pannel
    const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
    }
  };


  


useEffect(() => {
    localStorage.setItem('selectedPanel', selectedPanel);
  }, [selectedPanel]);

  return (
    <div className="flex">
      <Sidebar selectedPanel={selectedPanel} onSelect={setSelectedPanel} />
      <main className="ml-64 w-full bg-grey min-h-screen p-6">

        {/* // {'--------------------------------------------Dashboard Start--------------------------------'} */}
        {selectedPanel === 'dashboard' && (
          <>
            {/* Welcome message */}
            <div className="space-y-1 mb-8">
              <h1 className="text-2xl font-bold text-gray-800">Welcome back, Rahul!</h1>
              <p className="text-gray-600">Manage your appointments and health information</p>
            </div>

            {/* Dashboard cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
           <DashboardCard
  icon={<MapPin className="h-6 w-6 text-blue-600" />}
  color="blue"
  title="Near Me"
  desc="Find doctors & clinics nearby"
  onClick={() => setSelectedPanel('Location')}
/>

<DashboardCard
  icon={<Calendar className="h-6 w-6 text-green-600" />}
  color="green"
  title="Appointments"
  desc="View & manage appointments"
  onClick={() => setSelectedPanel('Appointment')}
/>

<DashboardCard
  icon={<Search className="h-6 w-6 text-purple-600" />}
  color="purple"
  title="Search"
  desc="Find doctors & hospitals"
  onClick={() => setSelectedPanel('Search')}
/>

<DashboardCard
  icon={<FileText className="h-6 w-6 text-red-600" />}
  color="red"
  title="Reports"
  desc="Upload & view medical reports"
  onClick={() => setSelectedPanel('Report')}
/>

            </div>

            {/* Appointments */}
            
    
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Upcoming Appointments</h2>
      <Link
      to="#"
  onClick={() => setSelectedPanel('Appointment')}
  className="text-sm text-fikar-primary hover:underline flex items-center"
>
  View all <ChevronRight className="h-4 w-4 ml-1" />
</Link>

      </div>

      <div className="space-y-4">
        {appointments.slice(0, 2).map((appt) => (
          <div
            key={appt.id}
            className="rounded-lg border bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col sm:flex-row">
              {/* Left Date Section */}
              <div className="bg-gradient-to-br from-fikar-primary to-fikar-secondary text-white p-4 sm:w-1/4 text-center flex flex-col justify-center items-center">
                <div className="text-lg font-bold">{appt.date}</div>
                <div className="text-sm">{appt.time}</div>
                <div
                  className={`mt-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                    appt.statusColor === 'green'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {appt.status}
                </div>
              </div>

              {/* Right Info Section */}
              <div className="p-4 sm:w-3/4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{appt.doctor}</h3>
                    <p className="text-sm text-gray-500">{appt.specialty}</p>
                  </div>
                  <Link
                    to="/patient-search"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent h-9 rounded-md px-3 ml-auto"
                  >
                    Details
                  </Link>
                </div>

                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1 text-gray-400" /> {appt.location}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium border border-input hover:text-accent-foreground hover:border-accent h-9 rounded-md px-3 bg-blue-50 text-blue-700 hover:bg-blue-100">
                    <Clock className="h-4 w-4 mr-2" />
                    Check-in
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium border border-input hover:text-accent-foreground hover:border-accent h-9 rounded-md px-3 bg-red-50 text-red-700 hover:bg-red-100">
                    Reschedule
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


            {/* Recently Visited */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Recently Visited Doctors</h2>
                <Link to="/patient-search" className="text-sm text-fikar-primary hover:underline flex items-center">
                  View all <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {resentdoctors.map((doc) => (
                  <div key={doc.id} className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-4">
                      <div className="flex items-center space-x-4">
                        <span className="relative flex shrink-0 overflow-hidden rounded-full h-12 w-12 border-2 border-fikar-primary/20">
                          <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                            {doc.initials}
                          </span>
                        </span>
                        <div className="flex-1 min-w-0">
                          <Link to={doc.profileUrl} className="hover:text-fikar-primary">
                            <h3 className="font-medium text-gray-900 truncate">{doc.name}</h3>
                          </Link>
                          <p className="text-sm text-gray-500">{doc.specialization}</p>
                          <div className="flex items-center mt-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium text-gray-700 ml-1">{doc.rating}</span>
                          </div>
                        </div>
                        <Link
                          to={doc.bookUrl}
                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent h-9 rounded-md px-3"
                        >
                          Book
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Health Summary</h2>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6">
                  {/* Header with link */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-gray-900">Recent Activity</h3>
                    <a
                      className="text-sm text-fikar-primary hover:underline flex items-center"
                      href="/patient-health"
                    >
                      View details
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>

                  {/* Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Last Check-up */}
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center">
                        <div className="rounded-full bg-green-100 p-2 mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chart-no-axes-column-increasing h-5 w-5 text-green-600"
                          >
                            <line x1="12" x2="12" y1="20" y2="10" />
                            <line x1="18" x2="18" y1="20" y2="4" />
                            <line x1="6" x2="6" y1="20" y2="16" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Last Check-up</p>
                          <p className="font-semibold">15 May 2025</p>
                        </div>
                      </div>
                    </div>

                    {/* Medical Reports */}
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center">
                        <div className="rounded-full bg-blue-100 p-2 mr-3">
                          <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Medical Reports</p>
                          <p className="font-semibold">5 Reports</p>
                        </div>
                      </div>
                    </div>

                    {/* Medication Reminders */}
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="flex items-center">
                        <div className="rounded-full bg-purple-100 p-2 mr-3">
                          <Bell className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Medication Reminders</p>
                          <p className="font-semibold">2 Active</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        
{/* {'--------------------------------------------Dashboard End--------------------------------'} */}

{/* {'--------------------------------------------Appointment Start--------------------------------'} */}

        {selectedPanel === 'Appointment' && (
          <>
             
     <div className="sm:flex sm:items-center sm:justify-between mb-6">
      <h1 className="text-2xl font-bold text-gray-900">My Appointments</h1>
      <div className="mt-3 sm:mt-0">
        <Link
          to="/patient-search"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md h-10 px-4 py-2"
        >
          Book New Appointment
        </Link>
      </div>
    </div>

    
    <div className="mb-6">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            
            {/* Search Input */}
            <div className="w-full sm:w-auto mb-4 sm:mb-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
  className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background 
    placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
    focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-9 w-full sm:w-80"
  placeholder="Search by doctor, specialty, hospital..."
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
/>
              </div>
            </div>

            {/* Filter and Dropdown */}
            <div className="w-full sm:w-auto flex items-center">
              
              {/* Filters Button */}
              <button className="flex items-center mr-4 text-sm text-gray-600 hover:text-fikar-primary">
                <Filter className="h-4 w-4 mr-1" />
                Filters
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>

              {/* Appointment Type Dropdown */}
              <button
                type="button"
                role="combobox"
                aria-expanded="false"
                aria-autocomplete="none"
                className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm 
                ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring 
                focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-[180px]"
              >
                <span style={{ pointerEvents: 'none' }}>All Appointments</span>
                <ChevronDown className="h-4 w-4 opacity-50" aria-hidden="true" />
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>

     <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h2>
      <div className="space-y-4">
        {appointments.map((appt) => (
          <div
            key={appt.id}
            className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col sm:flex-row">
              <div className="bg-gradient-to-br from-fikar-primary to-fikar-secondary p-4 sm:p-6 flex flex-row sm:flex-col justify-between sm:justify-center items-center text-white sm:w-1/4">
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-bold">{appt.date}</div>
                  <div className="text-sm sm:text-base opacity-90">{appt.time}</div>
                </div>
                <div className={`mt-2 px-2 py-0.5 rounded-full text-xs font-medium ${appt.statusColor === 'green' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {appt.status}
                        </div>
              </div>

              <div className="p-4 sm:p-6 sm:w-3/4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{appt.doctor}</h3>
                    <p className="text-sm text-gray-500">{appt.specialty}</p>
                  </div>
                  <div
                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${appt.modeColor}`}
                  >
                    {appt.mode}
                  </div>
                </div>

                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                  <span>{appt.location}</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium border border-input hover:text-accent-foreground hover:border-accent h-9 rounded-md px-3 bg-blue-50 text-blue-700 hover:bg-blue-100">
                    <Clock className="h-4 w-4 mr-2" />
                    Check-in
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium border border-input hover:text-accent-foreground hover:border-accent h-9 rounded-md px-3 bg-red-50 text-red-700 hover:bg-red-100">
                    Reschedule
                  </button>
                  <Link
                    to={`/patient-appointments/${appt.id}`}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent h-9 rounded-md px-3 ml-auto"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Past Appointments</h2>
      <div className="space-y-4">
        {pastAppointments.map((appointment) => (
          <div
            key={appointment.id}
            className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-md transition-shadow opacity-80"
          >
            <div className="p-0 flex flex-col sm:flex-row">
              <div className="bg-gray-200 p-4 sm:p-6 flex flex-row sm:flex-col justify-between sm:justify-center items-center text-gray-700 sm:w-1/4">
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-bold">{appointment.date}</div>
                  <div className="text-sm sm:text-base opacity-90">{appointment.time}</div>
                </div>
                <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mt-4 sm:mt-4 ${appointment.statusColor}`}>
                  {appointment.status}
                </div>
              </div>

              <div className="p-4 sm:p-6 sm:w-3/4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{appointment.doctor}</h3>
                    <p className="text-sm text-gray-500">{appointment.specialization}</p>
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-blue-500 text-blue-500">
                    {appointment.type}
                  </div>
                </div>

                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                  <span>{appointment.location}</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {appointment.actions.includes('prescription') && (
                    <button className="inline-flex items-center justify-center gap-2 text-sm font-medium border border-input hover:border-accent bg-green-50 text-green-700 hover:bg-green-100 h-9 rounded-md px-3">
                      <FileText className="h-4 w-4 mr-2" />
                      View Prescription
                    </button>
                  )}
                  {appointment.actions.includes('feedback') && (
                    <button className="inline-flex items-center justify-center gap-2 text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent h-9 rounded-md px-3">
                      Leave Feedback
                    </button>
                  )}
                  {appointment.actions.includes('details') && (
                    <Link
                      to={`/patient-appointments/${appointment.id}`}
                      className="ml-auto inline-flex items-center justify-center gap-2 text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent h-9 rounded-md px-3"
                    >
                      View Details
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

          </>
        )}
        
{/* {'--------------------------------------------Appointment Finish--------------------------------'} */}


{/* {'--------------------------------------------Location Start--------------------------------'} */}

        {selectedPanel === 'Location' && (
  <>
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-900">Locations</h1>
      <p className="mt-1 text-gray-600">Find doctors and hospitals near you</p>
    </div>

    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      {/* Location Header */}
      <div className="flex items-center space-x-2 text-sm text-fikar-primary mb-4">
        <MapPin className="h-5 w-5" />
        <span>Current Location: Model Town, Delhi</span>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 underline-offset-4 hover:underline h-9 rounded-md text-fikar-primary px-0">
          Change
        </button>
      </div>

      {/* Search Form */}
      <form className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search doctors, hospitals, specialties..."
          className="flex h-10 rounded-md border border-input bg-background px-3 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full pl-10 pr-4 py-2"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md h-10 px-4 py-2 absolute right-1 top-1/2 transform -translate-y-1/2"
        >
          Search
        </button>
      </form>
    </div>

    {/* Filter Buttons Section - Now inline inside this panel */}
    <div className="mb-6 flex overflow-x-auto pb-2 space-x-2">
      {['Nearest', 'Highest Rated', 'Available Today'].map((filter) => (
        <button
          key={filter}
          onClick={() =>
            setSelectedFilter((prev) => (prev === filter ? null : filter))
          }
          className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border h-9 rounded-md px-3 flex-shrink-0 ${
            selectedFilter === filter
              ? 'bg-primary text-primary-foreground border-primary'
              : 'bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary border-input'
          }`}
        >
          <Filter className="h-4 w-4 mr-1" />
          {filter}
        </button>
      ))}

      {selectedFilter && (
        <button
          onClick={() => setSelectedFilter(null)}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium text-red-600 border border-red-400 bg-red-50 hover:bg-red-100 h-9 rounded-md px-3 flex-shrink-0"
        >
          Clear Filter
        </button>
      )}
    </div>

    
    <div className="mb-6">
      {/* Tabs */}
      <div
        role="tablist"
        aria-orientation="horizontal"
        className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground w-full"
      >
        <button
          role="tab"
          aria-selected={activeTab === 'doctors'}
          onClick={() => setActiveTab('doctors')}
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium flex-1 transition-all focus-visible:outline-none focus-visible:ring-2 ring-offset-background ring-ring ring-offset-2 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm ${
            activeTab === 'doctors' ? 'bg-background text-foreground shadow-sm' : ''
          }`}
        >
          <User className="h-4 w-4 mr-2" /> Doctors
        </button>
        <button
          role="tab"
          aria-selected={activeTab === 'hospitals'}
          onClick={() => setActiveTab('hospitals')}
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium flex-1 transition-all focus-visible:outline-none focus-visible:ring-2 ring-offset-background ring-ring ring-offset-2 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm ${
            activeTab === 'hospitals' ? 'bg-background text-foreground shadow-sm' : ''
          }`}
        >
          <Hospital className="h-4 w-4 mr-2" /> Hospitals
        </button>
      </div>

      {/* Panels */}
      <div className="mt-4 space-y-4">
        {activeTab === 'doctors' && (
          <div role="tabpanel" className="space-y-4">
            {/* Doctor cards go here */}
            <div className="p-0">
  
    <div className="rounded-lg border bg-white text-gray-900 shadow-sm p-4 flex flex-col sm:flex-row gap-4">
      {/* Avatar */}
      <div className="sm:w-24 sm:h-24 w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-semibold">
        SD
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        {/* Header: Name, Speciality, Rating, Distance */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-semibold">Dr. Arun Sharma</h3>
            <p className="text-sm text-gray-500">Cardiologist at City Heart Hospital</p>
          </div>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium">4.8</span>
            <span className="text-gray-300">|</span>
            <MapPin className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-500">2.3 km</span>
          </div>
        </div>

        {/* Info Icons */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Available Today
          </div>
          <div className="flex items-center gap-1">
            <Phone className="h-4 w-4 text-gray-400" />
            +91 98765 43210
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          <button className="inline-flex items-center text-sm font-medium border h-9 px-3 rounded-md hover:bg-gray-100">
            <Phone className="h-4 w-4 mr-1" />
            Call
          </button>
          <button className="inline-flex items-center text-sm font-medium border h-9 px-3 rounded-md hover:bg-gray-100">
            <MapPin className="h-4 w-4 mr-1" />
            Directions
          </button>
          <Link
            to="/patient-book/1"
            className="inline-flex items-center text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 h-10 px-4 py-2 rounded-md shadow"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>


</div>

          
    <div className="rounded-lg border bg-white text-gray-900 shadow-sm p-4 flex flex-col sm:flex-row gap-4">
      {/* Avatar */}
      <div className="sm:w-24 sm:h-24 w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-semibold">
        PD
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        {/* Header: Name, Specialty, Rating */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-semibold">Dr. Priya Patel</h3>
            <p className="text-sm text-gray-500">Dermatologist at Skin & Wellness Clinic</p>
          </div>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium">4.7</span>
            <span className="text-gray-300">|</span>
            <MapPin className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-500">3.5 km</span>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-gray-400" />
            Available Tomorrow
          </div>
          <div className="flex items-center gap-1">
            <Phone className="h-4 w-4 text-gray-400" />
            +91 97654 32109
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          <button className="inline-flex items-center text-sm font-medium border h-9 px-3 rounded-md hover:bg-gray-100">
            <Phone className="h-4 w-4 mr-1" />
            Call
          </button>
          <button className="inline-flex items-center text-sm font-medium border h-9 px-3 rounded-md hover:bg-gray-100">
            <MapPin className="h-4 w-4 mr-1" />
            Directions
          </button>
          <Link
            to="/patient-book/2"
            className="inline-flex items-center text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 h-10 px-4 py-2 rounded-md shadow"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
    


    <div className="rounded-lg border bg-white text-gray-900 shadow-sm p-4 flex flex-col sm:flex-row gap-4">
      {/* Avatar */}
      <div className="sm:w-24 sm:h-24 w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-semibold">
        KD
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-semibold">Dr. Rajesh Kumar</h3>
            <p className="text-sm text-gray-500">Orthopedic Surgeon at Joint Care Hospital</p>
          </div>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium">4.9</span>
            <span className="text-gray-300">|</span>
            <Navigation className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-500">1.8 km</span>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-gray-400" />
            Available Today
          </div>
          <div className="flex items-center gap-1">
            <Phone className="h-4 w-4 text-gray-400" />
            +91 96543 21098
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          <button className="inline-flex items-center text-sm font-medium border h-9 px-3 rounded-md hover:bg-gray-100">
            <Phone className="h-4 w-4 mr-1" />
            Call
          </button>
          <button className="inline-flex items-center text-sm font-medium border h-9 px-3 rounded-md hover:bg-gray-100">
            <MapPin className="h-4 w-4 mr-1" />
            Directions
          </button>
          <Link
            to="/patient-book/3"
            className="inline-flex items-center text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 h-10 px-4 py-2 rounded-md shadow"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
</div>
          
        )}
        {activeTab === 'hospitals' && (
          <div role="tabpanel" className="space-y-4">
            {/* Hospital cards go here */}
            
    <div className="mt-4 space-y-4">
      {hospitals.map((hospital) => (
        <div
          key={hospital.id}
          className="rounded-lg border bg-white text-gray-900 shadow-sm"
        >
          <div className="flex flex-col sm:flex-row p-4">
            <div className="sm:w-32 sm:h-24 h-20 w-full bg-gray-200 self-center sm:self-start mb-4 sm:mb-0 flex-shrink-0 rounded-md overflow-hidden flex items-center justify-center">
              <Hospital className="h-10 w-10 opacity-50 text-gray-500" />
            </div>
            <div className="sm:ml-6 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-medium">{hospital.name}</h3>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {hospital.specialties.map((spec, i) => (
                      <div
                        key={i}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold text-xs"
                      >
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center mt-2 sm:mt-0">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="ml-1 text-sm font-medium">{hospital.rating}</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <Navigation className="h-4 w-4 text-gray-400" />
                  <span className="ml-1 text-sm text-gray-500">{hospital.distance}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-3">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-sm">{hospital.hours}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-sm">{hospital.phone}</span>
                </div>
              </div>

              <div className="flex flex-wrap sm:justify-start justify-center gap-2 mt-2">
                <button className="inline-flex items-center text-sm font-medium border h-9 rounded-md px-3 hover:bg-gray-100">
                  <Phone className="h-4 w-4 mr-1" />Call
                </button>
                <button className="inline-flex items-center text-sm font-medium border h-9 rounded-md px-3 hover:bg-gray-100">
                  <MapPin className="h-4 w-4 mr-1" />Directions
                </button>
                <Link
                  to={hospital.url}
                  className="inline-flex items-center text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 shadow-sm h-10 px-4 py-2 rounded-md"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>


          </div>
        )}
      </div>
    </div>

  </>
)}

{/* {'--------------------------------------------Location Finish--------------------------------'} */}

{/* {'--------------------------------------------Search Start --------------------------------'} */}

   {selectedPanel === "Search" && (
  <>
    <div className="w-full overflow-x-hidden"> {/* Wrapper prevents horizontal scroll */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Find Doctors & Hospitals</h1>
        <p className="mt-1 text-gray-600">Search for the best healthcare services near you</p>
      </div>

      {/* Search Box Section */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by doctor, specialty, hospital or symptom..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 pr-10"
            />
          </div>

          <div className="flex justify-between mt-4">
            <button className="flex items-center text-sm text-gray-600 hover:text-fikar-primary">
              <Filter className="h-4 w-4 mr-1" />
              Advanced Filters
              <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            <button className="flex items-center text-sm text-fikar-primary">
              <MapPin className="h-4 w-4 mr-1" />
              Use current location
            </button>
          </div>
        </div>
      </div>

      {/* Popular Specialties Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Popular Specialties</h2>
        <div className="relative overflow-hidden">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border shadow rounded-full p-1 hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto scroll-smooth pl-4 pr-4 max-w-full"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            onWheel={(e) => {
              e.currentTarget.scrollLeft += e.deltaY;
            }}
          >
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="min-w-[120px] flex-shrink-0 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow cursor-pointer border-transparent hover:border-fikar-primary/30"
              >
                <div className="p-2 flex flex-col items-center text-center">
                  <img src={specialty.image} alt={specialty.name} className="h-10 w-10 mb-2" />
                  <h3 className="text-sm font-medium text-gray-900">{specialty.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Hide scrollbar for all browsers */}
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border shadow rounded-full p-1 hover:bg-gray-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Tabs: All / Doctors / Hospitals */}
      <div className="inline-flex w-full bg-white rounded-md mb-6 h-10 items-center p-1 justify-center text-muted-foreground">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 rounded-md ${activeTab === "all" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab("doctors")}
          className={`flex-1 inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium rounded-sm transition-all ${
            activeTab === "doctors" ? "bg-background text-foreground shadow-sm" : ""
          }`}
        >
          <Stethoscope className="h-4 w-4 mr-2" />
          Doctors
        </button>
        <button
          onClick={() => setActiveTab("hospitals")}
          className={`flex-1 inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium rounded-sm transition-all ${
            activeTab === "hospitals" ? "bg-background text-foreground shadow-sm" : ""
          }`}
        >
          <MapPin className="h-4 w-4 mr-2" />
          Hospitals
        </button>
      </div>

      {/* Doctor or Hospital Listing */}
      <div className="space-y-4">
        {activeTab !== "hospitals" &&
          filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="rounded-lg border bg-white text-gray-800 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between"
            >
              <div className="flex items-start">
                <div className="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16 border-2 border-blue-200 bg-muted items-center justify-center text-lg font-semibold text-gray-700 mr-4">
                  {doc.name
                    .split(" ")
                    .map((n) => n[0])
                    .join(" ")
                    .toUpperCase()}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{doc.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{doc.specialization}</p>
                  <div className="flex items-center mt-1 text-sm text-gray-700">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 font-medium">{doc.rating}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-gray-500">{doc.experience}</span>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                    {doc.location}
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-500">Consultation Fee</p>
                    <p className="font-semibold text-blue-600">{doc.fee}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 sm:text-right flex flex-col items-start sm:items-end pr-6">
                <div className="flex items-start mb-32">
                  <span className="mr-2 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    {doc.availability}
                  </span>
                  <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full border text-gray-700">
                    {doc.distance}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="inline-flex items-center gap-2 border h-9 rounded-md px-3 hover:bg-accent transition-all text-sm">
                    <Clock className="h-4 w-4" />
                    See Availability
                  </button>
                  <Link
                    to={`/patient-book/${doc.id}`}
                    className="inline-flex items-center gap-2 h-9 rounded-md px-3 bg-blue-600 text-white hover:bg-blue-700 transition-all text-sm"
                  >
                    <Calendar className="h-4 w-4" />
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          ))}

        {activeTab === "hospitals" &&
          filteredHospitals.map((hospital) => (
            <div
              key={hospital.id}
              className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-4">
                <div className="flex flex-col sm:flex-row">
                  <div className="mb-4 sm:mb-0 sm:mr-4 sm:w-1/4 md:w-1/5">
                    <div className="aspect-video rounded-md overflow-hidden bg-gray-100">
                      <img src={hospital.image} alt={hospital.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <a
                          className="text-lg font-semibold text-gray-900 hover:text-fikar-primary"
                          href={`/patient-hospital/${hospital.id}`}
                        >
                          {hospital.name}
                        </a>
                        <p className="text-sm text-gray-500 mt-1">{hospital.specialty}</p>
                        <div className="flex items-center mt-1 text-sm">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="ml-1 font-medium text-gray-700">{hospital.rating}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-gray-500">{hospital.doctors} Doctors</span>
                        </div>
                      </div>
                      <div className="mt-2 sm:mt-0">
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-gray-200 text-gray-700">
                          {hospital.distance}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                      {hospital.location}
                    </div>
                    <div className="mt-3">
                      <p className="text-sm text-gray-500 mb-1">Facilities</p>
                      <div className="flex flex-wrap gap-2">
                        {hospital.facilities.map((facility, index) => (
                          <div
                            key={index}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-gray-50"
                          >
                            {facility}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-3 pt-3 flex justify-end">
                      <a
                        className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md h-10 px-4 py-2"
                        href={`/patient-hospital/${hospital.id}`}
                      >
                        View Hospital
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  </>
)}

{/* {'--------------------------------------------Search Finish--------------------------------'} */}


{/* {'--------------------------------------------Report  Start--------------------------------'} */}

{selectedPanel === 'Report' && (
          <>
          
          </>
        )}
      </main>
    </div>
  );
};

export default UserDashboard;