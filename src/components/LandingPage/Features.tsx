import React, { useEffect } from 'react';
import {
  Clock,
  Calendar,
  UserCheck,
  Phone,
  MapPin,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    icon: Clock,
    title: 'Real-time Doctor Availability',
    description: 'Check if your doctor is available, busy, or offline before you leave home.',
    learnMoreUrl: '#learn-more-doctor-availability',
  },
  {
    icon: Calendar,
    title: 'Live Queue Updates',
    description: 'See the current queue status and estimated waiting time for each doctor.',
    learnMoreUrl: '#learn-more-queue-updates',
  },
  {
    icon: UserCheck,
    title: 'Instant Appointments',
    description: 'Book appointments directly through the app and get immediate confirmation.',
    learnMoreUrl: '#learn-more-instant-appointments',
  },
  {
    icon: Phone,
    title: 'Appointment Reminders',
    description: 'Get SMS and in-app notifications before your scheduled appointment.',
    learnMoreUrl: '#learn-more-appointment-reminders',
  },
  {
    icon: MapPin,
    title: 'Find Nearby Clinics',
    description: 'Discover and filter clinics and hospitals near your location.',
    learnMoreUrl: '#learn-more-nearby-clinics',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Medical History',
    description: 'Maintain your medical records securely for future references.',
    learnMoreUrl: '#learn-more-secure-medical-history',
  },
];

const stats = [
  {
    icon: <CheckCircle className="h-8 w-8 text-white" />,
    value: '50+',
    label: 'Clinics Onboarded',
  },
  {
    icon: <UserCheck className="h-8 w-8 text-white" />,
    value: '200+',
    label: 'Doctors Registered',
  },
  {
    icon: <Calendar className="h-8 w-8 text-white" />,
    value: '5000+',
    label: 'Appointments Booked',
  },
  {
    icon: <Clock className="h-8 w-8 text-white" />,
    value: '2500+',
    label: 'Hours Saved',
  },
];

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div id="features" className="py-20 bg-gradient-to-b from-white to-fikar-light/30 relative overflow-hidden">
      {/* Background blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-fikar-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-fikar-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="w-full flex justify-center" data-aos="fade-down">
          <div className="inline-flex items-center bg-fikar-primary/10 rounded-full px-4 py-1.5 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-badge-check h-5 w-5 text-fikar-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            <span className="text-sm font-semibold text-fikar-primary">Premium Features</span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-fikar-dark mb-6 text-center" data-aos="fade-up">
          <span className="relative inline-block">
            Everything
            <span className="absolute -bottom-2 left-0 right-0 h-3 bg-fikar-primary/20 -z-10"></span>
          </span>{' '}
          You Need for <span className="text-fikar-primary">Hassle-free</span> Doctor Visits
        </h2>

        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto text-center" data-aos="fade-up" data-aos-delay="100">
          Fikar Plus provides a comprehensive solution to make healthcare more accessible and efficient.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mt-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl border border-gray-100 bg-white bg-opacity-80 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-fikar-primary hover:bg-gradient-to-br hover:from-white hover:to-fikar-primary/10 hover:ring-2 hover:ring-fikar-primary/30"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative">
                <div className="absolute h-12 w-12 rounded-md bg-gradient-to-br from-fikar-light to-fikar-primary/20 text-fikar-primary flex items-center justify-center group-hover:animate-pulse shadow-md shadow-fikar-primary/30">
                  <feature.icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-fikar-dark">{feature.title}</p>
              </div>
              <div className="mt-6 ml-16 text-base text-gray-500">{feature.description}</div>
              <a href={feature.learnMoreUrl} className="mt-4 ml-16 text-sm font-semibold text-fikar-primary hover:underline">Learn more →</a>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-24">
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 py-16 px-6 sm:px-12 rounded-3xl shadow-xl">
          <div className="max-w-6xl mx-auto text-center text-white" data-aos="fade-up">
            <div className="inline-flex items-center bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <CheckCircle className="w-4 h-4 mr-2" />
              Impressive Growth
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Trusted by Clinics & Patients Across India
            </h2>
            <p className="text-lg text-white/90">
              Helping patients save time and clinics manage queues efficiently.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md text-center hover:scale-105 transition-transform hover:ring-2 hover:ring-white/30"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="mb-3 flex justify-center">{stat.icon}</div>
                  <div className="text-4xl font-extrabold text-white">{stat.value}</div>
                  <div className="text-white/80 mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
