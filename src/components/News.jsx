import React from 'react';
import { Calendar, User, ArrowRight, Newspaper } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'New Water Supply Project Launched',
      excerpt: 'Comprehensive water supply infrastructure project initiated to provide clean drinking water to all 15 villages under our Panchayat jurisdiction.',
      content: 'We are proud to announce the launch of our ambitious water supply project, funded through the Jal Jeevan Mission. This ₹2.5 crore initiative will establish pipeline connections to every household, ensuring 24/7 clean water access. The project includes construction of overhead tanks, water treatment facilities, and distribution networks across all villages.',
      date: '2024-01-15',
      author: 'Panchayat Administration',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Infrastructure'
    },
    {
      id: 2,
      title: 'Digital Literacy Program Shows Remarkable Success',
      excerpt: 'Over 500 residents have successfully completed our digital literacy training program, bridging the digital divide in rural areas.',
      content: 'Our digital literacy initiative has exceeded all expectations with 500+ participants completing the program. The training covered basic computer skills, internet usage, digital payments, and accessing government services online. Special focus was given to women and elderly citizens. We have established 3 digital centers equipped with computers and internet connectivity to continue this mission.',
      date: '2024-01-10',
      author: 'Education Committee',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Education'
    }
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Newspaper className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Latest News & Updates
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about the latest developments, initiatives, and achievements 
            in our ongoing mission to build a better community.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {newsItems.map((item, index) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-orange-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Meta info */}
                <div className="flex items-center text-gray-500 text-sm mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {new Date(item.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    {item.author}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.excerpt}
                </p>

                {/* Full content (expandable) */}
                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {item.content}
                  </p>
                </div>

                {/* Read more */}
                <div className="flex items-center justify-between">
                  <button className="flex items-center text-orange-600 hover:text-orange-700 font-semibold group">
                    Read Full Article
                    <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                  
                  <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-orange-600 transition-colors">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all news */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
            View All News & Updates
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;