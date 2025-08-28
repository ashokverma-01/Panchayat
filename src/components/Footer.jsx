import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "News & Updates", href: "#news" },
    { name: "Members", href: "#members" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Birth Certificate", href: "#" },
    { name: "Death Certificate", href: "#" },
    { name: "Income Certificate", href: "#" },
    { name: "Property Records", href: "#" },
    { name: "Grievance Portal", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">GP</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Gram Panchayat</h3>
                <p className="text-gray-400 text-sm">Seva Gram Village</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Committed to transparent governance, sustainable development, and
              community welfare. Building a better tomorrow through unity and
              progress.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-green-600 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="text-orange-500 mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-gray-300 text-sm">
                    Panchayat Bhawan, Main Road
                    <br />
                    Seva Gram Village - 123456
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-orange-500 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+91 9636366250</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-orange-500 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@sevagram.gov.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 Gram Panchayat Seva Gram Village. All rights reserved.
              </p>
            </div>

            <div className="mt-4 md:mt-0 text-center md:text-right">
              <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
