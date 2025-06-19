import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import fImage from '../../assests/f.png';



const steps = [
  {
    number: '01',
    title: 'Search for a Doctor',
    description:
      'Find the right healthcare professional based on specialty, location, and availability.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    number: '02',
    title: 'Check Real-time Availability',
    description:
      "View the doctor's current status and queue length before making a decision.",
    image:
      'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    number: '03',
    title: 'Book Your Appointment',
    description:
      'Schedule a visit with just a few taps and receive a confirmation instantly.',
    image:
      'https://images.unsplash.com/photo-1536064479547-7ee40b74b807?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    number: '04',
    title: 'Track Your Queue Position',
    description:
      "Monitor your position in the queue in real-time and arrive just when you're needed.",
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    number: '05',
    title: 'Get the Correct Time to Visit',
    description:
      'Our smart system suggests the best time slots based on your doctor’s current workload and traffic trends.',
    image: fImage
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};   

const HowItWorks = () => {
  return (
    <motion.div
      id="how-it-works"
      className="py-16 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-fikar-primary/10 rounded-full px-4 py-1.5 mb-4">
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
              className="lucide lucide-lightbulb h-5 w-5 text-fikar-primary mr-2"
            >
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
              <path d="M9 18h6"></path>
              <path d="M10 22h4"></path>
            </svg>
            <span className="text-sm font-semibold text-fikar-primary">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-fikar-dark mb-6 relative inline-block">
            How It
            <span className="absolute -bottom-2 left-0 right-0 h-3 bg-fikar-primary/20 -z-10"></span>{' '}
            Works
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto leading-relaxed">
            Fikar Plus makes your doctor visits simple and stress-free in just a few easy steps.
          </p>
        </motion.div>

        {/* Steps Section */}
        <div className="mt-16 space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row`}
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <motion.div
                className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <div className="h-64 md:h-full bg-gray-300 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </motion.div>
              <div
                className={`md:w-1/2 ${
                  index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                } flex items-center`}
              >
                <div className={`p-8 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-12 rounded-md bg-fikar-primary text-white flex items-center justify-center text-xl font-bold shadow-md">
                      {step.number}
                    </div>
                    <h3 className="ml-4 text-xl font-medium text-fikar-dark">{step.title}</h3>
                  </div>
                  <p className="mt-4 text-lg text-gray-500 ml-16">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrow Animation */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut',
          }}
        >
          <ArrowDown className="h-8 w-8 text-fikar-primary mx-auto" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HowItWorks;
