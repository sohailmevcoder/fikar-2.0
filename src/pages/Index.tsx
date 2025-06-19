import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navigation/Navbar';
import Hero from '@/components/LandingPage/Hero';
import Features from '@/components/LandingPage/Features';
import HowItWorks from '@/components/LandingPage/HowItWorks';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { Calendar } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Fikar Plus has completely changed how I visit doctors. No more waiting for hours in crowded waiting rooms!",
    author: "Rahul Mehta",
    position: "Bank Manager, Gwalior",
    rating: 5
  },
  {
    id: 2,
    quote: "As a busy professional, I appreciate how Fikar Plus helps me plan my doctor visits around my schedule.",
    author: "Priya Singh",
    position: "Software Engineer, Gwalior",
    rating: 5
  },
  {
    id: 3,
    quote: "The queue updates are incredibly accurate. I know exactly when to leave home to see my doctor.",
    author: "Amit Gupta",
    position: "Teacher, Gwalior",
    rating: 4
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow"> {/* Removed pt-16 since Navbar is now transparent */}
        <Hero />
        <Features />
        <HowItWorks />
        
        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center mb-12">
              <h2 className="text-base text-fikar-primary font-semibold tracking-wide uppercase">Testimonials</h2>
              <p className="mt-2 section-heading mx-auto">
                What Our Users Say
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Fikar Plus is making a difference in the lives of patients and healthcare providers across Gwalior.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="glass-card p-6 hover-lift">
                  <Quote className="h-8 w-8 text-fikar-primary opacity-20" />
                  <p className="mt-2 text-gray-600 italic">{testimonial.quote}</p>
                  <div className="mt-4 flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-fikar-primary to-fikar-secondary text-white flex items-center justify-center font-bold">
                        {testimonial.author.charAt(0)}
                      </div>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-gray-900">{testimonial.author}</h4>
                      <p className="text-xs text-gray-500">{testimonial.position}</p>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-fikar-primary to-fikar-secondary py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to save time at your next doctor's visit?
            </h2>
            <p className="mt-4 text-xl text-white opacity-90 max-w-2xl mx-auto">
              Join Fikar Plus today and never waste time waiting in clinics again.
            </p>
<div className="mt-8 flex justify-center">
  <Button asChild size="lg" className="bg-white text-fikar-primary hover:bg-gray-100 group">
  <Link to="/patient-login" className="flex items-center space-x-2">
    <Calendar className="h-5 w-5" /> {/* Calendar icon */}
    <span>Book Appointment</span>
    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
  </Link>
</Button>
</div>
          </div>
        </section>
        
        {/* Footer */}

    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link className="inline-block" to="/">
              <div className="flex items-center">
                <img src="/fikar-logo.svg" alt="Fikar Logo" className="h-20 w-auto" />
              </div>
            </Link>
            <p className="text-gray-600 text-lg max-w-md leading-relaxed">
              Save valuable time with real-time doctor availability and queue updates at your fingertips.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="text-sm font-medium text-fikar-primary">Coming soon to:</div>
              <div className="flex space-x-3">
                <div className="px-3 py-1 bg-gray-100 rounded-md text-gray-700 text-sm font-medium flex items-center">
                  <span>App Store</span>
                </div>
                <div className="px-3 py-1 bg-gray-100 rounded-md text-gray-700 text-sm font-medium flex items-center">
                  <span>Google Play</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-5 pt-2">
              {[
                {
                  href: "#",
                  icon: (
                    <svg className="h-5 w-5 text-gray-500 group-hover:text-fikar-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  )
                },
                {
                  href: "#",
                  icon: (
                    <svg className="h-5 w-5 text-gray-500 group-hover:text-fikar-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  )
                },
                {
                  href: "#",
                  icon: (
                    <svg className="h-5 w-5 text-gray-500 group-hover:text-fikar-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  )
                }
              ].map(({ href, icon }, i) => (
                <a key={i} href={href} className="group">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-fikar-primary/10 transition-colors">
                    {icon}
                  </div>
                </a>
              ))}
            </div> 
          </div>

          <div className="md:col-span-1">
            <h3 className="text-fikar-primary font-bold text-lg mb-6">Quick Links</h3>
             <ul className="space-y-4">
  <li>
    <a
      href="/"
      className="text-gray-600 hover:text-fikar-primary transition-colors font-medium flex items-center group"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-fikar-primary/50 mr-2 group-hover:scale-125 transition-transform"></span>
      Home
    </a>
  </li>
  <li>
    <a
      href="/#features"
      className="text-gray-600 hover:text-fikar-primary transition-colors font-medium flex items-center group"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-fikar-primary/50 mr-2 group-hover:scale-125 transition-transform"></span>
      Features
    </a>
  </li>
  <li>
    <a
      href="/#how-it-works"
      className="text-gray-600 hover:text-fikar-primary transition-colors font-medium flex items-center group"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-fikar-primary/50 mr-2 group-hover:scale-125 transition-transform"></span>
      How It Works
    </a>
  </li>
</ul>

              </div>
<div className="md:col-span-1">
  <h3 className="text-fikar-primary font-bold text-lg mb-6">Portals</h3>
  <ul className="space-y-4">
    <li>
      <a
        href="/doctor-login"
        className="text-gray-600 hover:text-fikar-primary transition-colors font-medium flex items-center group"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-fikar-primary/50 mr-2 group-hover:scale-125 transition-transform"></span>
        Doctor Portal
      </a>
    </li>
    <li>
      <a
        href="/clinic-admin-login"
        className="text-gray-600 hover:text-fikar-primary transition-colors font-medium flex items-center group"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-fikar-primary/50 mr-2 group-hover:scale-125 transition-transform"></span>
        Admin Portal
      </a>
    </li>
    <li>
      <a
        href="/patient-login"
        className="text-gray-600 hover:text-fikar-primary transition-colors font-medium flex items-center group"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-fikar-primary/50 mr-2 group-hover:scale-125 transition-transform"></span>
        Patient Portal
      </a>
    </li>
  </ul>
</div>

           </div>

           <div className="md:col-span-1 mt-8">
  <h3 className="text-fikar-primary font-bold text-lg mb-6">Contact Us</h3>
  <div className="space-y-4">

    {/* Email Contact */}
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-full bg-fikar-primary/10 flex items-center justify-center text-fikar-primary mt-0.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>
      <div>
        <div className="text-gray-800 font-medium">Email</div>
        <a
          href="mailto:support@fikarplus.com"
          className="text-gray-600 hover:text-fikar-primary transition-colors"
        >
          support@fikarplus.com
        </a>
      </div>
    </div>

    {/* Phone Contact */}
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-full bg-fikar-primary/10 flex items-center justify-center text-fikar-primary mt-0.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </div>
      <div>
        <div className="text-gray-800 font-medium">Phone</div>
        <a
          href="tel:+911234567890"
          className="text-gray-600 hover:text-fikar-primary transition-colors"
        >
          +91 123 456 7890
        </a>
      </div>
    </div>

  </div>
</div>



        <div className="mt-12 pt-8 border-t border-white/10">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-gray-600">© 2025 Fikar Plus. All rights reserved.</p>

    <div className="flex items-center gap-4">
      <a href="#" className="text-gray-600 hover:text-fikar-primary text-sm transition-colors">
        Privacy Policy
      </a>
      <span className="text-gray-400">|</span>
      <a href="#" className="text-gray-600 hover:text-fikar-primary text-sm transition-colors">
        Terms of Service
      </a>
      <span className="text-gray-400">|</span>
      <a href="#" className="text-gray-600 hover:text-fikar-primary text-sm transition-colors">
        Cookie Policy
      </a>
    </div>

    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-500">Made with</span>
      <span className="text-red-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span className="text-xs text-gray-500">in India</span>
    </div>
  </div>
</div>

      </div>
    </footer>
    </main>
    </div>
  );
};

export default Index;
