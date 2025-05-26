
import React, { useState } from 'react';

const Services = () => {
  const [selectedPropertyType, setSelectedPropertyType] = useState('');
  const [formData, setFormData] = useState({
    country: '',
    street: '',
    floor: '',
    city: '',
    province: '',
    postalCode: '',
    description: ''
  });

  const propertyTypes = [
    { id: 'family', label: 'FAMILY HOUSE', color: 'bg-yellow-500' },
    { id: 'apartment', label: 'APARTMENT', color: 'bg-yellow-500' },
    { id: 'bachelor', label: 'BACHELOR APARTMENT', color: 'bg-yellow-500' },
    { id: 'bachelor-room', label: 'BACHELOR ROOM', color: 'bg-yellow-500' },
    { id: 'roommate', label: 'ROOMATE', color: 'bg-yellow-500' },
    { id: 'commercial', label: 'COMMERCIAL SPACE', color: 'bg-yellow-500' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Property listing data:', { selectedPropertyType, ...formData });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Property Type Selection */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              WHICH OF THE BEST DESCRIBE YOUR PLACE ?
            </h2>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {propertyTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedPropertyType(type.id)}
                  className={`${type.color} ${
                    selectedPropertyType === type.id ? 'ring-4 ring-yellow-300' : ''
                  } text-white p-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors`}
                >
                  {type.label}
                </button>
              ))}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              WHERE IS YOUR PLACE LOCATED ?
            </h3>
            
            <div className="space-y-4 mb-6">
              <input
                type="text"
                placeholder="ENTER YOUR ADDRESS"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
              />
              <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                USE CURRENT LOCATION
              </button>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Map View</span>
            </div>
          </div>

          {/* Right Side - Address Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              CONFIRM YOUR ADDRESS
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="country"
                  placeholder="COUNTRY"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="street"
                  placeholder="STREET"
                  value={formData.street}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="floor"
                  placeholder="FLOOR"
                  value={formData.floor}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="city"
                  placeholder="CITY"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="province"
                  placeholder="PROVINCE"
                  value={formData.province}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="postalCode"
                  placeholder="POSTAL CODE"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                />
              </div>
              
              <div>
                <textarea
                  name="description"
                  placeholder="DESCRIPTION ABOUT THE PLACE"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none resize-none"
                ></textarea>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-2">ADD PHOTOS OF YOUR PLACE</h4>
                <div className="flex space-x-4">
                  <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-yellow-500 transition-colors">
                    <span className="text-2xl text-gray-400">+</span>
                  </div>
                  <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-yellow-500 transition-colors">
                    <span className="text-2xl text-gray-400">+</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
              >
                Submit Listing
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
