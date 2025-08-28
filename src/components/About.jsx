import React from 'react';
import { Target, Eye, Award, Handshake } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide transparent, efficient governance and foster sustainable development in our village community.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'Building a self-reliant, progressive village that serves as a model for rural development across India.'
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Integrity, transparency, inclusivity, and community-first approach in all our initiatives and decisions.'
    },
    {
      icon: Handshake,
      title: 'Our Promise',
      description: 'Dedicated service to every citizen with accountability, responsiveness, and unwavering commitment to progress.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Our Panchayat
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Seva Gram Village Panchayat stands as a beacon of rural governance, committed to 
            transforming our community through inclusive development, sustainable practices, 
            and citizen-centric services.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Village community gathering"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-1">4.8/5</div>
              <div className="text-sm text-gray-600">Satisfaction Rating</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Empowering Rural India Through Good Governance
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Our Panchayat serves as the cornerstone of democratic governance at the grassroots level, 
                representing over 2,500 residents across 15 villages in our constituency. We are committed 
                to bringing positive change through transparent administration and community participation.
              </p>
              
              <p>
                From infrastructure development to social welfare programs, we ensure every initiative 
                aligns with the needs and aspirations of our people. Our focus areas include rural 
                development, education, healthcare, sanitation, and women empowerment.
              </p>
              
              <p>
                Together, we are building a future where every citizen has access to basic amenities, 
                opportunities for growth, and a voice in the decisions that shape our community.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">
                Rural Development
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                Community Welfare
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                Transparent Governance
              </span>
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;