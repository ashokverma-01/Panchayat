import React, { useState } from 'react';
import { Menu, X, Home, Users, Camera, Newspaper, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: Users },
    { name: 'Gallery', href: '#gallery', icon: Camera },
    { name: 'News', href: '#news', icon: Newspaper },
    { name: 'Contact', href: '#contact', icon: Phone }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">GP</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Gram Panchayat</h1>
              <p className="text-sm text-gray-600">Seva Gram Village</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition-colors duration-200"
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;