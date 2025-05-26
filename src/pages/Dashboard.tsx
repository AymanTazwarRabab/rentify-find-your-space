
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with Logo */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/28f45773-a45d-4885-85c3-90a57d69dd0c.png" 
              alt="Rentify Logo" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-gray-900">RENTIFY</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-8 mb-8 border-b border-gray-200">
          {['LISTING', 'MESSAGE', 'MENU'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 font-semibold text-lg transition-all duration-200 ${
                activeTab === tab
                  ? 'text-amber-600 border-b-3 border-amber-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'LISTING' && (
          <div className="animate-fade-in">
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white p-6 rounded-2xl mb-8 shadow-lg">
              <h2 className="text-2xl font-bold">YOUR LISTING</h2>
              <p className="mt-2 opacity-90">Manage your property listings</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {listings.map((listing) => (
                <div key={listing.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-gray-900">{listing.title}</h3>
                    <span className="inline-block bg-amber-100 text-amber-800 text-sm px-4 py-2 rounded-full font-medium">
                      {listing.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-white border-2 border-gray-300 px-6 py-3 rounded-full hover:bg-amber-50 hover:border-amber-300 transition-all duration-200 font-medium">
                A ROOMMATE REQUIRED
              </button>
              <button className="bg-white border-2 border-gray-300 px-6 py-3 rounded-full hover:bg-amber-50 hover:border-amber-300 transition-all duration-200 font-medium">
                FAMILY HOUSE
              </button>
              <button className="bg-white border-2 border-gray-300 px-6 py-3 rounded-full hover:bg-amber-50 hover:border-amber-300 transition-all duration-200 font-medium">
                COMMERCIAL SPACE
              </button>
            </div>
          </div>
        )}

        {activeTab === 'MESSAGE' && (
          <div className="text-center py-20 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Messages</h2>
              <p className="text-gray-600 text-lg">No messages yet</p>
              <div className="mt-8">
                <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-4xl">💬</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'MENU' && (
          <div className="text-center py-20 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Menu</h2>
              <p className="text-gray-600 text-lg">Menu options will appear here</p>
              <div className="mt-8">
                <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-4xl">⚙️</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
