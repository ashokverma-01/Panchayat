import React from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-green-600 opacity-90"></div>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center text-white">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Gram Panchayat
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Seva Gram Village
            </h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Serving our community with dedication, transparency, and progress. 
            Building a stronger tomorrow through unity and development.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <Users className="w-8 h-8 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">2,500+</div>
              <div className="text-lg">Population</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <MapPin className="w-8 h-8 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">15</div>
              <div className="text-lg">Villages</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <Calendar className="w-8 h-8 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">2020</div>
              <div className="text-lg">Established</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 md:h-32" viewBox="0 0 1200 120" fill="none">
          <path
            d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
            fill="rgb(249, 250, 251)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;