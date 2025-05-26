
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About RENTIFY</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted platform for finding the perfect rental home or roommate. 
            We connect people with quality housing solutions in a safe and reliable environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">🏠</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Homes</h3>
            <p className="text-gray-600">
              Verified listings with detailed information and authentic photos to help you make informed decisions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Trusted Community</h3>
            <p className="text-gray-600">
              Connect with verified users and build lasting relationships in a secure environment.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">💰</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Best Prices</h3>
            <p className="text-gray-600">
              Find competitive rental prices and transparent pricing with no hidden fees.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At RENTIFY, we believe everyone deserves a safe, comfortable place to call home. 
            Our platform is designed to simplify the rental process, whether you're looking for 
            a family house, bachelor apartment, commercial space, or the perfect roommate. 
            We strive to create a transparent, secure, and user-friendly experience that brings 
            landlords and tenants together with confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
