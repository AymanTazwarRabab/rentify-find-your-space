
import React from 'react';

const About = () => {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-white via-blue-50 to-amber-50 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 animate-pulse-glow"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-header animate-bounce-in">
            About RENTIFY
          </h1>
          <p className="section-subtitle animate-slide-up">
            Your trusted platform for finding the perfect rental home or roommate. 
            We connect people with quality housing solutions in a safe and reliable environment.
          </p>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="card-elegant p-8 text-center hover-lift animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🏠</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Quality Homes</h3>
              <p className="text-gray-600 text-lg">
                Verified listings with detailed information and authentic photos to help you make informed decisions.
              </p>
            </div>

            <div className="card-elegant p-8 text-center hover-lift animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Trusted Community</h3>
              <p className="text-gray-600 text-lg">
                Connect with verified users and build lasting relationships in a secure environment.
              </p>
            </div>

            <div className="card-elegant p-8 text-center hover-lift animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Best Prices</h3>
              <p className="text-gray-600 text-lg">
                Find competitive rental prices and transparent pricing with no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-elegant p-12 text-center animate-scale-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 gradient-text">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
              At RENTIFY, we believe everyone deserves a safe, comfortable place to call home. 
              Our platform is designed to simplify the rental process, whether you're looking for 
              a family house, bachelor apartment, commercial space, or the perfect roommate. 
              We strive to create a transparent, secure, and user-friendly experience that brings 
              landlords and tenants together with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
