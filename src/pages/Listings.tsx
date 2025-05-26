
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
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <div className="flex space-x-8 mb-8 border-b border-gray-200">
          {['LISTING', 'MESSAGE', 'MENU'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 font-semibold ${
                activeTab === tab
                  ? 'text-yellow-600 border-b-2 border-yellow-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'LISTING' && (
          <div>
            <div className="bg-yellow-500 text-white p-4 rounded-lg mb-6">
              <h2 className="text-xl font-bold">YOUR LISTING</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {listings.map((listing) => (
                <div key={listing.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-200 relative">
                    <img
                      src={`https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop`}
                      alt={listing.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{listing.title}</h3>
                    <span className="inline-block bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                      {listing.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-white border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors">
                A ROOMATE REQUIRED
              </button>
              <button className="bg-white border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors">
                FAMILY HOUSE
              </button>
              <button className="bg-white border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors">
                COMMERCIAL SPACE
              </button>
            </div>
          </div>
        )}

        {activeTab === 'MESSAGE' && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Messages</h2>
            <p className="text-gray-600">No messages yet</p>
          </div>
        )}

        {activeTab === 'MENU' && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Menu</h2>
            <p className="text-gray-600">Menu options will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Listings;
