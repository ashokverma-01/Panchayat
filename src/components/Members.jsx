import React from 'react';
import { Users, Phone, Mail, MapPin } from 'lucide-react';

const Members = () => {
  const members = [
    {
      name: 'Rajesh Kumar Sharma',
      position: 'Sarpanch (Village Head)',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      phone: '+91 98765 43210',
      email: 'sarpanch@sevagram.gov.in',
      experience: '8 years',
      description: 'Leading our village with vision and dedication towards comprehensive rural development.'
    },
    {
      name: 'Priya Devi Patel',
      position: 'Deputy Sarpanch',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      phone: '+91 98765 43211',
      email: 'deputy@sevagram.gov.in',
      experience: '6 years',
      description: 'Focused on women empowerment, education, and healthcare initiatives in our community.'
    },
    {
      name: 'Mohan Singh Rajput',
      position: 'Ward Member - Ward 1',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      phone: '+91 98765 43212',
      email: 'ward1@sevagram.gov.in',
      experience: '4 years',
      description: 'Overseeing infrastructure development and water supply projects in Ward 1.'
    },
    {
      name: 'Sunita Kumari Yadav',
      position: 'Ward Member - Ward 2',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      phone: '+91 98765 43213',
      email: 'ward2@sevagram.gov.in',
      experience: '5 years',
      description: 'Championing environmental conservation and sanitation programs in Ward 2.'
    },
    {
      name: 'Ramesh Chandra Gupta',
      position: 'Ward Member - Ward 3',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      phone: '+91 98765 43214',
      email: 'ward3@sevagram.gov.in',
      experience: '3 years',
      description: 'Managing agricultural development and farmer welfare schemes in Ward 3.'
    },
    {
      name: 'Kavita Sharma',
      position: 'Secretary',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      phone: '+91 98765 43215',
      email: 'secretary@sevagram.gov.in',
      experience: '7 years',
      description: 'Ensuring transparent administration and maintaining official records and proceedings.'
    }
  ];

  return (
    <section id="members" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Panchayat Members
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated team of elected representatives working tirelessly 
            for the development and welfare of our village community.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-800">{member.experience}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <div className="bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent font-semibold mb-4">
                  {member.position}
                </div>
                
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {member.description}
                </p>

                {/* Contact Info */}
                <div className="space-y-3 border-t border-gray-100 pt-6">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Phone size={16} className="mr-3 text-orange-600" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Mail size={16} className="mr-3 text-orange-600" />
                    <span>{member.email}</span>
                  </div>
                </div>

                {/* Contact Button */}
                <button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                  Contact {member.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Office Hours Info */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Office Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Monday - Friday</div>
              <div className="text-gray-600">9:00 AM - 5:00 PM</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Saturday</div>
              <div className="text-gray-600">9:00 AM - 1:00 PM</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Sunday</div>
              <div className="text-gray-600">Closed</div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-orange-50 rounded-lg">
            <div className="flex items-center justify-center text-orange-800">
              <MapPin size={20} className="mr-2" />
              <span className="font-semibold">
                Panchayat Bhawan, Main Road, Seva Gram Village - 123456
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;