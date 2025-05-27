
import React, { useState } from 'react';

const Listings = () => {
  const [activeTab, setActiveTab] = useState('LISTING');
  
  const listings = [
    {
      id: 1,
      type: 'roommate',
      title: 'Roommate Required',
      image: '/placeholder-room.jpg',
      category: 'A ROOMATE REQUIRED'
    },
    {
      id: 2,
      type: 'family',
      title: 'Family House',
      image: '/placeholder-house.jpg',
      category: 'FAMILY HOUSE'
    },
    {
      id: 3,
      type: 'commercial',
      title: 'Commercial Space',
      image: '/placeholder-commercial.jpg',
      category: 'COMMERCIAL SPACE'
    }
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-white via-teal-50 to-cyan-50 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 animate-pulse-glow"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-header animate-bounce-in">
            FIND YOUR PLACE
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-8 animate-fade-in">
            <span className="text-4xl">🏠</span>
          </div>
          <p className="section-subtitle animate-slide-up">
            DISCOVER YOUR PERFECT HOME
          </p>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex space-x-8 mb-8 border-b border-gray-200 animate-fade-in">
            {['LISTING', 'MESSAGE', 'MENU'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-2 font-semibold transition-all duration-300 hover-lift ${
                  activeTab === tab
                    ? 'text-teal-600 border-b-2 border-teal-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'LISTING' && (
            <div className="animate-fade-in">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-8 rounded-3xl shadow-2xl mb-12 animate-scale-in">
                <h2 className="text-3xl font-bold text-center">YOUR LISTING</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {listings.map((listing, index) => (
                  <div 
                    key={listing.id} 
                    className="card-elegant hover-lift animate-fade-in"
                    style={{animationDelay: `${index * 0.2}s`}}
                  >
                    <div className="h-48 bg-gray-200 relative rounded-t-3xl overflow-hidden">
                      <img
                        src={`https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop`}
                        alt={listing.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-4 text-gray-900">{listing.title}</h3>
                      <span className="inline-block bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-800 text-sm px-4 py-2 rounded-full font-medium">
                        {listing.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Filter buttons */}
              <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <button className="bg-white/80 backdrop-blur-lg border-2 border-teal-200 px-6 py-3 rounded-2xl hover:bg-teal-50 hover:border-teal-400 transition-all duration-300 font-semibold shadow-lg hover-lift">
                  A ROOMATE REQUIRED
                </button>
                <button className="bg-white/80 backdrop-blur-lg border-2 border-teal-200 px-6 py-3 rounded-2xl hover:bg-teal-50 hover:border-teal-400 transition-all duration-300 font-semibold shadow-lg hover-lift">
                  FAMILY HOUSE
                </button>
                <button className="bg-white/80 backdrop-blur-lg border-2 border-teal-200 px-6 py-3 rounded-2xl hover:bg-teal-50 hover:border-teal-400 transition-all duration-300 font-semibold shadow-lg hover-lift">
                  COMMERCIAL SPACE
                </button>
              </div>
            </div>
          )}

          {activeTab === 'MESSAGE' && (
            <div className="text-center py-12 animate-fade-in">
              <div className="card-elegant p-12 max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 gradient-text">Messages</h2>
                <p className="text-gray-600">No messages yet</p>
              </div>
            </div>
          )}

          {activeTab === 'MENU' && (
            <div className="text-center py-12 animate-fade-in">
              <div className="card-elegant p-12 max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 gradient-text">Menu</h2>
                <p className="text-gray-600">Menu options will appear here</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Listings;
