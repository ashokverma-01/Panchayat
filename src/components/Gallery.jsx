import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: 'https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Village Development Project',
      description: 'New infrastructure development initiatives transforming our community'
    },
    {
      src: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Community Meeting',
      description: 'Regular village assemblies ensuring transparent governance and citizen participation'
    },
    {
      src: 'https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Agricultural Programs',
      description: 'Supporting farmers with modern techniques and sustainable farming practices'
    },
    {
      src: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Education Initiative',
      description: 'Promoting quality education and literacy programs for all age groups'
    },
    {
      src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Healthcare Services',
      description: 'Mobile health clinics and wellness programs serving rural communities'
    }
  ];

  const openModal = (index) => setSelectedImage(index);
  const closeModal = () => setSelectedImage(null);
  
  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };
  
  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Camera className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Photo Gallery
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing moments of progress, community spirit, and the transformative journey 
            of our village development initiatives.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => openModal(index)}
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-bold text-lg mb-2">{image.title}</h4>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X size={32} />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft size={48} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight size={48} />
              </button>

              {/* Image */}
              <div className="bg-white rounded-lg overflow-hidden">
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].title}
                  className="w-full h-auto max-h-[70vh] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {images[selectedImage].title}
                  </h3>
                  <p className="text-gray-600">
                    {images[selectedImage].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;