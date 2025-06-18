import React from 'react';
import { ArrowDown } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Search for a Doctor',
    description: 'Find the right healthcare professional based on specialty, location, and availability.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    number: '02',
    title: 'Check Real-time Availability',
    description: 'View the doctor\'s current status and queue length before making a decision.',
    image: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    number: '03',
    title: 'Book Your Appointment',
    description: 'Schedule a visit with just a few taps and receive a confirmation instantly.',
    image: 'https://images.unsplash.com/photo-1536064479547-7ee40b74b807?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    number: '04',
    title: 'Track Your Queue Position',
    description: 'Monitor your position in the queue in real-time and arrive just when you\'re needed.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }
];

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-fikar-primary font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-fikar-dark sm:text-4xl">
            Simple Steps to Save Your Time
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Fikar Plus makes the doctor appointment process straightforward and efficient.
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row">
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="h-64 md:h-full bg-gray-300 rounded-lg overflow-hidden">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} flex items-center`}>
                  <div className={`p-8 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12 rounded-md bg-fikar-primary text-white flex items-center justify-center text-xl font-bold">
                        {step.number}
                      </div>
                      <h3 className="ml-4 text-xl font-medium text-fikar-dark">{step.title}</h3>
                    </div>
                    <p className="mt-4 text-lg text-gray-500 ml-16">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Arrow indicating more content below */}
        <div className="mt-12 text-center">
          <ArrowDown className="h-8 w-8 text-fikar-primary mx-auto animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
