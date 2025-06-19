import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  return (
    <nav className={`fixed w-full z-30 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="/fikar-logo.svg" alt="Fikar Logo" className="h-10 w-auto" />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-fikar-primary' : 'text-gray-600 hover:text-fikar-primary'}`}>
                Home
              </Link>
              <Link to="#features" className="text-gray-600 hover:text-fikar-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Features
              </Link>
              <Link to="#how-it-works" className="text-gray-600 hover:text-fikar-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                How It Works
              </Link>
              <div className="relative group">
                <button className="text-gray-600 hover:text-fikar-primary px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors">
                  Login
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                  <Link to="/patient-login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-fikar-light hover:text-fikar-primary transition-colors">
                    <User className="inline-block mr-2 h-4 w-4" />
                    Patient Login
                  </Link>
                  <Link to="/doctor-login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-fikar-light hover:text-fikar-primary transition-colors">
                    <User className="inline-block mr-2 h-4 w-4" />
                    Doctor Login
                  </Link>
                  <Link to="/clinic-admin-login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-fikar-light hover:text-fikar-primary transition-colors">
                    <User className="inline-block mr-2 h-4 w-4" />
                    Admin Login
                  </Link>
                </div>
              </div>
              <Button asChild variant="gradient" className="shadow-md hover:shadow-lg">
                <Link to="/patient-login" className="flex items-center">
                  <Phone className="mr-1 h-4 w-4" /> Get Started
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-fikar-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fikar-primary transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm shadow-lg">
          <div className="flex justify-center mb-3">
            <Link to="/" className="inline-block">
              <img src="/fikar-logo.svg" alt="Fikar Logo" className="h-10 w-auto" />
            </Link>
          </div>
          <Link
            to="/"
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${location.pathname === '/' ? 'text-fikar-primary bg-fikar-light/50' : 'text-gray-600 hover:text-fikar-primary hover:bg-gray-50'}`}
          >
            Home
          </Link>
          <Link
            to="#features"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-fikar-primary hover:bg-gray-50 transition-colors"
          >
            Features
          </Link>
          <Link
            to="#how-it-works"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-fikar-primary hover:bg-gray-50 transition-colors"
          >
            How It Works
          </Link>
          <Link
            to="/patient-login"
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${location.pathname === '/user-dashboard' ? 'text-fikar-primary bg-fikar-light/50' : 'text-gray-600 hover:text-fikar-primary hover:bg-gray-50'}`}
          >
            Patient Login
          </Link>
          <Link
            to="/doctor-login"
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${location.pathname === '/doctor-dashboard' ? 'text-fikar-primary bg-fikar-light/50' : 'text-gray-600 hover:text-fikar-primary hover:bg-gray-50'}`}
          >
            Doctor Login
          </Link>
          <Link
            to="/clinic-admin-login"
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${location.pathname === '/admin-dashboard' ? 'text-fikar-primary bg-fikar-light/50' : 'text-gray-600 hover:text-fikar-primary hover:bg-gray-50'}`}
          >
            Admin Login
          </Link>
          <div className="pt-2">
            <Button asChild variant="gradient" className="w-full">
              <Link to="/user-dashboard" className="flex items-center justify-center">
                <Phone className="mr-1 h-4 w-4" /> Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
