import React, { useState } from 'react';
import { MapPin, Upload, Home } from 'lucide-react';

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
    { id: 'family', label: 'FAMILY HOUSE', color: 'bg-gradient-to-r from-teal-500 to-cyan-500' },
    { id: 'apartment', label: 'APARTMENT', color: 'bg-gradient-to-r from-teal-500 to-cyan-500' },
    { id: 'bachelor', label: 'BACHELOR APARTMENT', color: 'bg-gradient-to-r from-teal-500 to-cyan-500' },
    { id: 'bachelor-room', label: 'BACHELOR ROOM', color: 'bg-gradient-to-r from-teal-500 to-cyan-500' },
    { id: 'roommate', label: 'ROOMMATE', color: 'bg-gradient-to-r from-teal-500 to-cyan-500' },
    { id: 'commercial', label: 'COMMERCIAL SPACE', color: 'bg-gradient-to-r from-teal-500 to-cyan-500' }
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
    <div className="page-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="section-header">List Your Property</h1>
          <p className="section-subtitle">Share your space with verified tenants</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Property Type Selection */}
          <div className="animate-slide-up">
            <div className="card-elegant p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Home className="mr-3 text-teal-500" />
                WHICH BEST DESCRIBES YOUR PLACE?
              </h2>
              
              <div className="grid grid-cols-2 gap-4 mb-12">
                {propertyTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedPropertyType(type.id)}
                    className={`${type.color} ${
                      selectedPropertyType === type.id ? 'ring-4 ring-teal-300 scale-105' : ''
                    } text-white p-6 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover-lift`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="mr-3 text-teal-500" />
                WHERE IS YOUR PLACE LOCATED?
              </h3>
              
              <div className="space-y-6 mb-8">
                <input
                  type="text"
                  placeholder="ENTER YOUR ADDRESS"
                  className="input-elegant text-lg"
                />
                <button className="btn-primary w-full">
                  USE CURRENT LOCATION
                </button>
              </div>

              {/* Enhanced Map Placeholder */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-64 rounded-2xl flex items-center justify-center shadow-inner animate-pulse-glow">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-teal-500 mx-auto mb-4" />
                  <span className="text-xl font-semibold text-gray-600">Interactive Map View</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Address Form */}
          <div className="animate-fade-in">
            <div className="card-elegant p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                CONFIRM YOUR ADDRESS
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="country"
                    placeholder="COUNTRY"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="input-elegant"
                  />
                  
                  <input
                    type="text"
                    name="city"
                    placeholder="CITY"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="input-elegant"
                  />
                </div>
                
                <input
                  type="text"
                  name="street"
                  placeholder="STREET"
                  value={formData.street}
                  onChange={handleInputChange}
                  className="input-elegant"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="floor"
                    placeholder="FLOOR"
                    value={formData.floor}
                    onChange={handleInputChange}
                    className="input-elegant"
                  />
                  
                  <input
                    type="text"
                    name="province"
                    placeholder="PROVINCE"
                    value={formData.province}
                    onChange={handleInputChange}
                    className="input-elegant"
                  />
                </div>
                
                <input
                  type="text"
                  name="postalCode"
                  placeholder="POSTAL CODE"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="input-elegant"
                />
                
                <textarea
                  name="description"
                  placeholder="DESCRIPTION ABOUT THE PLACE"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="input-elegant resize-none"
                ></textarea>

                <div>
                  <h4 className="font-bold text-xl text-gray-800 mb-6 flex items-center">
                    <Upload className="mr-3 text-teal-500" />
                    ADD PHOTOS OF YOUR PLACE
                  </h4>
                  <div className="flex space-x-6">
                    <div className="w-32 h-32 border-3 border-dashed border-teal-300 rounded-2xl flex items-center justify-center cursor-pointer hover:border-teal-500 hover:bg-teal-50 transition-all duration-300 hover-lift">
                      <Upload className="w-8 h-8 text-teal-400" />
                    </div>
                    <div className="w-32 h-32 border-3 border-dashed border-teal-300 rounded-2xl flex items-center justify-center cursor-pointer hover:border-teal-500 hover:bg-teal-50 transition-all duration-300 hover-lift">
                      <Upload className="w-8 h-8 text-teal-400" />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-xl py-6"
                >
                  Submit Listing
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
