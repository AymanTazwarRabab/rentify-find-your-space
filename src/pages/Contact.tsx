
import React from 'react';

const Contact = () => {
  const supportOptions = [
    {
      title: "GET SUPPORT",
      subtitle: "MESSAGE",
      icon: "💬"
    },
    {
      title: "CHAT WITH SALES",
      subtitle: "MESSAGE",
      icon: "💬"
    },
    {
      title: "CHECK YOUR RENTS",
      subtitle: "MESSAGE",
      icon: "💬"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">CONTACT US</h1>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <span className="text-2xl">✉️</span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">WE ARE HERE FOR YOU</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {supportOptions.map((option, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">{option.icon}</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{option.title}</h3>
              <p className="text-gray-600 text-sm">{option.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Additional Contact Form */}
        <div className="max-w-md mx-auto mt-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-center text-gray-900 mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
