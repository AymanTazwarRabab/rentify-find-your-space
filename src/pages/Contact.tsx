
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
    <div className="page-container">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-white via-teal-50 to-cyan-50 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 animate-pulse-glow"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-header animate-bounce-in">
            CONTACT US
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-8 animate-fade-in">
            <span className="text-4xl">✉️</span>
          </div>
          <p className="section-subtitle animate-slide-up">
            WE ARE HERE FOR YOU
          </p>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      {/* Support Options Section */}
      <div className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {supportOptions.map((option, index) => (
              <div 
                key={index}
                className="card-elegant p-8 text-center hover-lift animate-fade-in cursor-pointer"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl">{option.icon}</span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600">{option.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-20 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-elegant p-8 animate-scale-in">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8 gradient-text">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input-elegant"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input-elegant"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="input-elegant resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary w-full hover-lift"
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
