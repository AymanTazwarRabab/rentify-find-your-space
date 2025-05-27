
import React, { useState } from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('LISTING');
  
  const listings = [
    {
      id: 1,
      type: 'roommate',
      title: 'Roommate Required',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      category: 'A ROOMMATE REQUIRED'
    },
    {
      id: 2,
      type: 'family',
      title: 'Family House',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
      category: 'FAMILY HOUSE'
    },
    {
      id: 3,
      type: 'commercial',
      title: 'Commercial Space',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
      category: 'COMMERCIAL SPACE'
    }
  ];

  return (
    <div className="page-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with Logo */}
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/28f45773-a45d-4885-85c3-90a57d69dd0c.png" 
              alt="Rentify Logo" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold gradient-text">RENTIFY</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-8 mb-8 border-b border-gray-200 animate-slide-up">
          {['LISTING', 'MESSAGE', 'MENU'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 font-semibold text-lg transition-all duration-300 hover-lift ${
                activeTab === tab
                  ? 'text-teal-600 border-b-3 border-teal-600'
                  : 'text-gray-500 hover:text-teal-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'LISTING' && (
          <div className="animate-fade-in">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-8 rounded-3xl mb-8 shadow-2xl animate-scale-in">
              <h2 className="text-3xl font-bold">YOUR LISTING</h2>
              <p className="mt-2 opacity-90 text-lg">Manage your property listings with ease</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {listings.map((listing, index) => (
                <div 
                  key={listing.id} 
                  className="card-elegant overflow-hidden hover-lift animate-fade-in"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-gray-900">{listing.title}</h3>
                    <span className="inline-block bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-800 text-sm px-4 py-2 rounded-full font-medium border border-teal-200">
                      {listing.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-4 animate-slide-up">
              <button className="btn-secondary hover-lift">
                A ROOMMATE REQUIRED
              </button>
              <button className="btn-secondary hover-lift">
                FAMILY HOUSE
              </button>
              <button className="btn-secondary hover-lift">
                COMMERCIAL SPACE
              </button>
            </div>
          </div>
        )}

        {activeTab === 'MESSAGE' && (
          <div className="text-center py-20 animate-fade-in">
            <div className="card-elegant p-12 max-w-md mx-auto animate-scale-in">
              <div className="w-24 h-24 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">💬</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 gradient-text">Messages</h2>
              <p className="text-gray-600 text-lg mb-6">No messages yet</p>
              <p className="text-sm text-gray-500">Your conversations with property owners and tenants will appear here.</p>
            </div>
          </div>
        )}

        {activeTab === 'MENU' && (
          <div className="text-center py-20 animate-fade-in">
            <div className="card-elegant p-12 max-w-md mx-auto animate-scale-in">
              <div className="w-24 h-24 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">⚙️</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 gradient-text">Settings & Menu</h2>
              <p className="text-gray-600 text-lg mb-6">Account settings and preferences</p>
              <div className="space-y-3">
                <button className="btn-secondary w-full hover-lift">
                  Profile Settings
                </button>
                <button className="btn-secondary w-full hover-lift">
                  Notification Preferences
                </button>
                <button className="btn-secondary w-full hover-lift">
                  Account Management
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
