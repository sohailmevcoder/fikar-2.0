import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      
      {/* Animated Shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-fikar-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-fikar-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-fikar-primary font-medium text-sm tracking-wide mb-6">
  #1 Doctor Queue Management App in India
</div>

<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-fikar-dark leading-tight mb-6">
  <span className="inline-block">Instant Access to</span>{" "}
  <span className="inline-block">Healthcare – </span>{" "}
  <span className="inline-block relative">
   No Lines, No Delays
    
  </span>{" "}
  
</h1>


<p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
  Fikar Plus shows <span className="font-semibold text-fikar-primary">real-time doctor availability</span> and{" "}
  <span className="font-semibold text-fikar-primary">live queue updates</span>, helping you save time spent
  waiting in clinics and reducing crowding in hospitals.
</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-fikar-primary hover:bg-red-700 text-white font-semibold group transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 relative overflow-hidden border border-gray-100 hover:border-fikar-primary">
                <Link to="/patient-login" className="flex items-center">
                  <span className="relative z-10">Check Doctor Availability</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-3 duration-300" />
                  <span className="absolute inset-0 bg-gradient-to-r from-fikar-primary to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-7">
              <div className="flex items-start hover-lift transition-all duration-300 hover:shadow-md p-4 rounded-xl">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-fikar-primary bg-opacity-10 relative">
                  <Clock className="h-6 w-6 text-fikar-primary" />
                  <div className="absolute inset-0 rounded-md bg-fikar-primary/20 animate-ripple"></div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-fikar-dark">Real-time Updates</h3>
                  <p className="mt-2 text-sm text-gray-500">Live doctor availability status</p>
                </div>
              </div>
              <div className="flex items-start hover-lift transition-all duration-300 hover:shadow-md p-4 rounded-xl">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-fikar-primary bg-opacity-10 relative">
                  <Calendar className="h-6 w-6 text-fikar-primary" />
                  <div className="absolute inset-0 rounded-md bg-fikar-primary/20 animate-ripple" style={{ animationDelay: '0.3s' }}></div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-fikar-dark">Queue Tracking</h3>
                  <p className="mt-2 text-sm text-gray-500">Know your position in line</p>
                </div>
              </div>
              <div className="flex items-start hover-lift transition-all duration-300 hover:shadow-md p-4 rounded-xl">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-fikar-primary bg-opacity-10 relative">
                  <UserCheck className="h-6 w-6 text-fikar-primary" />
                  <div className="absolute inset-0 rounded-md bg-fikar-primary/20 animate-ripple" style={{ animationDelay: '0.6s' }}></div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-fikar-dark">Easy Booking</h3>
                  <p className="mt-2 text-sm text-gray-500">Book appointments in seconds</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-[500px] bg-gradient-to-br from-fikar-primary to-blue-400 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 opacity-25 absolute -right-8 top-8 animate-bounce-subtle"></div>
            <div className="relative glass-card w-full h-auto rounded-3xl shadow-xl overflow-hidden border-4 border-white">
              <div className="absolute inset-0 bg-gradient-to-tr from-fikar-primary/5 to-fikar-secondary/5"></div>
              <div className="p-6 flex flex-col h-full justify-between">
                <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm mx-auto mb-6 hover-lift">
                  <h3 className="text-lg font-semibold text-fikar-dark">Doctors Near You</h3>
                  <div className="mt-2 space-y-3">
                    <div className="p-3 bg-gradient-to-r from-white to-fikar-light/30 rounded-lg border border-gray-200">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-fikar-primary flex items-center justify-center text-white font-bold">
                          DS
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-gray-800">Dr. Sharma</h4>
                          <p className="text-xs text-gray-500">Cardiologist • 2.3 km</p>
                        </div>
                        <div className="ml-auto">
                          <span className="status-available">Available</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-white to-fikar-light/30 rounded-lg border border-gray-200">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-fikar-secondary flex items-center justify-center text-white font-bold">
                          DP
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-gray-800">Dr. Patel</h4>
                          <p className="text-xs text-gray-500">Pediatrician • 3.1 km</p>
                        </div>
                        <div className="ml-auto">
                          <span className="status-busy">Queue: 3</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-white to-fikar-light/30 rounded-lg border border-gray-200">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
                          AK
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-gray-800">Dr. Kumar</h4>
                          <p className="text-xs text-gray-500">Neurologist • 1.5 km</p>
                        </div>
                        <div className="ml-auto">
                          <span className="status-offline">Offline</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm mx-auto hover-lift">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-fikar-dark">Your Appointment</h3>
                    <span className="text-xs font-medium px-2 py-1 bg-fikar-light text-fikar-primary rounded-full">Active</span>
                  </div>
                  <div className="mt-3 p-4 border border-fikar-light rounded-lg bg-gradient-to-r from-blue-50 to-blue-100/50">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-fikar-primary flex items-center justify-center text-white font-bold">
                        DS
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-gray-800">Dr. Sharma</h4>
                        <p className="text-xs text-gray-500">Cardiologist</p>
                        <p className="text-xs font-medium text-fikar-primary mt-1">Today at 2:30 PM</p>
                        <div className="mt-2 flex items-center">
                          <div className="bg-fikar-primary text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse-slow relative">
                            <span>2</span>
                            <div className="absolute inset-0 rounded-full bg-fikar-primary/40 animate-ripple"></div>
                          </div>
                          <p className="ml-2 text-xs font-medium text-fikar-dark">Your position in queue</p>
                        </div>
                      </div>
                    </div>
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

export default Hero;
