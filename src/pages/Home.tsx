
import React from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';

const Home = () => {
  const properties = [
    {
      type: "FAMILY HOUSE",
      location: "MIRPUR - 12",
      rooms: "02",
      rent: "12000 BDT",
      bgColor: "bg-gradient-to-r from-amber-500 to-orange-500"
    },
    {
      type: "BACHELOR HOUSE",
      location: "MIRPUR PALLABI",
      rooms: "03",
      rent: "12000 BDT",
      bgColor: "bg-gradient-to-r from-amber-500 to-orange-500"
    },
    {
      type: "COMMERCIAL SPACE",
      location: "MIRPUR - 12",
      rooms: "",
      rent: "50000 BDT",
      measurement: "3000 SQ FT",
      bgColor: "bg-gradient-to-r from-amber-500 to-orange-500"
    }
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-white via-blue-50 to-amber-50 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 animate-pulse-glow"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-header animate-bounce-in">
            Welcome to RENTIFY!
          </h1>
          <p className="section-subtitle animate-slide-up">
            Rent Smart | Live Safe | Find Your Perfect Home
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
            <Link 
              to="/services"
              className="btn-primary hover-lift"
            >
              RENT YOUR HOUSE
            </Link>
            <Link 
              to="/listings"
              className="btn-secondary hover-lift"
            >
              FIND YOUR PLACE
            </Link>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      {/* Recently Added Section */}
      <div className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-header">Recently Added Properties</h2>
            <p className="section-subtitle">Discover the latest additions to our premium collection</p>
          </div>
          
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-8 rounded-3xl shadow-2xl mb-12 animate-fade-in">
            <h3 className="text-3xl font-bold text-center">Latest Listings</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <div 
                key={index} 
                className="animate-scale-in hover-lift"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <PropertyCard
                  type={property.type}
                  location={property.location}
                  rooms={property.rooms}
                  rent={property.rent}
                  measurement={property.measurement}
                  bgColor={property.bgColor}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-header">Why Choose Rentify?</h2>
            <p className="section-subtitle">Experience the future of property rental</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-elegant p-8 text-center hover-lift animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🏠</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Verified Properties</h3>
              <p className="text-gray-600 text-lg">All our properties are thoroughly verified for your safety and peace of mind.</p>
            </div>
            
            <div className="card-elegant p-8 text-center hover-lift animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Best Prices</h3>
              <p className="text-gray-600 text-lg">Get the most competitive rates in the market with transparent pricing.</p>
            </div>
            
            <div className="card-elegant p-8 text-center hover-lift animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">24/7 Support</h3>
              <p className="text-gray-600 text-lg">Round-the-clock customer support to assist you whenever you need help.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
