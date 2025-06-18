import React from 'react';
import { Clock, Calendar, UserCheck, Phone, MapPin, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Real-time Doctor Availability',
    description: 'Check if your doctor is available, busy, or offline before you leave home.'
  },
  {
    icon: Calendar,
    title: 'Live Queue Updates',
    description: 'See the current queue status and estimated waiting time for each doctor.'
  },
  {
    icon: UserCheck,
    title: 'Instant Appointments',
    description: 'Book appointments directly through the app and get immediate confirmation.'
  },
  {
    icon: Phone,
    title: 'Appointment Reminders',
    description: 'Get SMS and in-app notifications before your scheduled appointment.'
  },
  {
    icon: MapPin,
    title: 'Find Nearby Clinics',
    description: 'Discover and filter clinics and hospitals near your location.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure Medical History',
    description: 'Maintain your medical records securely for future references.'
  }
];

const Features = () => {
  return (
    <div id="features" className="py-20 bg-gradient-to-b from-white to-fikar-light/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-fikar-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-fikar-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:text-center">
          <h2 className="text-base text-fikar-primary font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 section-heading mx-auto">
            Everything You Need for Hassle-free Doctor Visits
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Fikar Plus provides a comprehensive solution to make healthcare more accessible and efficient.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group hover-lift glass-card p-6 rounded-xl transition-all duration-300 border border-gray-100 hover:border-fikar-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div>
                  <div className="absolute h-12 w-12 rounded-md bg-gradient-to-br from-fikar-light to-fikar-primary/20 text-fikar-primary flex items-center justify-center">
                    <feature.icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-fikar-dark">{feature.title}</p>
                </div>
                <div className="mt-6 ml-16 text-base text-gray-500">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 py-12 bg-white rounded-2xl shadow-md">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-fikar-dark">Trusted by clinics and patients across India</h2>
              <p className="mt-3 text-xl text-gray-500">
                Helping patients save time and clinics manage queues efficiently
              </p>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="bg-fikar-light/40 pt-5 px-4 pb-6 sm:pt-6 sm:px-6 rounded-lg overflow-hidden">
                  <div className="text-center">
                    <div className="text-4xl font-extrabold text-fikar-primary animate-bounce-subtle">50+</div>
                    <div className="mt-1 text-base font-medium text-gray-600">Clinics Onboarded</div>
                  </div>
                </div>
                <div className="bg-fikar-light/40 pt-5 px-4 pb-6 sm:pt-6 sm:px-6 rounded-lg overflow-hidden">
                  <div className="text-center">
                    <div className="text-4xl font-extrabold text-fikar-primary animate-bounce-subtle" style={{ animationDelay: '0.2s' }}>200+</div>
                    <div className="mt-1 text-base font-medium text-gray-600">Doctors Registered</div>
                  </div>
                </div>
                <div className="bg-fikar-light/40 pt-5 px-4 pb-6 sm:pt-6 sm:px-6 rounded-lg overflow-hidden">
                  <div className="text-center">
                    <div className="text-4xl font-extrabold text-fikar-primary animate-bounce-subtle" style={{ animationDelay: '0.4s' }}>5000+</div>
                    <div className="mt-1 text-base font-medium text-gray-600">Appointments Booked</div>
                  </div>
                </div>
                <div className="bg-fikar-light/40 pt-5 px-4 pb-6 sm:pt-6 sm:px-6 rounded-lg overflow-hidden">
                  <div className="text-center">
                    <div className="text-4xl font-extrabold text-fikar-primary animate-bounce-subtle" style={{ animationDelay: '0.6s' }}>2500+</div>
                    <div className="mt-1 text-base font-medium text-gray-600">Hours Saved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
