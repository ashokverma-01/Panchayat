import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Main Office: +91 98765 43210",
        "Emergency: +91 98765 43211",
        "Toll Free: 1800-123-4567",
      ],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@sevagram.gov.in",
        "complaints@sevagram.gov.in",
        "development@sevagram.gov.in",
      ],
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: [
        "Panchayat Bhawan",
        "Main Road, Seva Gram Village",
        "District: Rural Dev, State: India - 123456",
      ],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <MessageCircle className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Contact Us
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to serve you. Reach out to us for any queries,
            suggestions, or assistance. Your feedback helps us build a better
            community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              Get in Touch
            </h3>

            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">
                      {item.title}
                    </h4>
                    <div className="space-y-1">
                      {item.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className="text-gray-600 text-sm leading-relaxed"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Emergency Contact */}
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-red-800 mb-2">
                Emergency Contacts
              </h4>
              <div className="space-y-1 text-sm text-red-700">
                <p>Police: 100 | Fire: 101 | Ambulance: 108</p>
                <p>Village Emergency: +91 9636366250</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="complaint">Complaint</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="development">Development Project</option>
                    <option value="service">Service Request</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Enter your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-green-600 text-white py-4 px-8 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Find Our Office
            </h3>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin size={48} className="mx-auto mb-4" />
                <p className="text-lg font-semibold">Interactive Map</p>
                <p className="text-sm">
                  Location: Seva Gram Village, Main Road
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
