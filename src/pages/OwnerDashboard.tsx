
import React, { useState } from 'react';
import { MapPin, Upload, Home, Camera, CheckCircle } from 'lucide-react';

const OwnerDashboard = () => {
  const [selectedPropertyType, setSelectedPropertyType] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    country: '',
    street: '',
    floor: '',
    city: '',
    province: '',
    postalCode: '',
    description: '',
    rent: '',
    rooms: '',
    bathrooms: '',
    amenities: []
  });

  const propertyTypes = [
    { id: 'family', label: 'FAMILY HOUSE', color: 'bg-gradient-to-r from-teal-500 to-cyan-500' },
    { id: 'apartment', label: 'APARTMENT', color: 'bg-gradient-to-r from-teal-500 to-cyan-500' },
    { id: 'bachelor', label: 'BACHELOR APARTMENT', color: 'bg-gradient-to-r from-teal-500 to-cyan-500' },
    { id: 'bachelor-room', label: 'BACHELOR ROOM', color: 'bg-gradient-to-r from-teal-500 to-cyan-500' },
    { id: 'roommate', label: 'ROOMMATE', color: 'bg-gradient-to-r from-teal-500 to-cyan-500' },
    { id: 'commercial', label: 'COMMERCIAL SPACE', color: 'bg-gradient-to-r from-teal-500 to-cyan-500' }
  ];

  const amenities = [
    'Air Conditioning', 'Furnished', 'Parking', 'Balcony', 
    'Garden', 'Security', 'Elevator', 'Internet'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAmenityToggle = (amenity: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const handleNextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Property listing data:', { selectedPropertyType, ...formData });
  };

  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-white via-teal-50 to-cyan-50 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 animate-pulse-glow"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-header animate-bounce-in">
            List Your Property
          </h1>
          <p className="section-subtitle animate-slide-up">
            Connect with verified tenants and maximize your rental income
          </p>
          
          {/* Progress Indicator */}
          <div className="flex justify-center mt-8 animate-fade-in">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    currentStep >= step 
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {currentStep > step ? <CheckCircle className="w-5 h-5" /> : step}
                  </div>
                  {step < 3 && (
                    <div className={`w-12 h-1 mx-2 rounded ${
                      currentStep > step ? 'bg-teal-500' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-4 space-x-8 text-sm font-medium">
            <span className={currentStep >= 1 ? 'text-teal-600' : 'text-gray-500'}>Property Type</span>
            <span className={currentStep >= 2 ? 'text-teal-600' : 'text-gray-500'}>Details & Location</span>
            <span className={currentStep >= 3 ? 'text-teal-600' : 'text-gray-500'}>Photos & Publish</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Step 1: Property Type Selection */}
        {currentStep === 1 && (
          <div className="animate-fade-in">
            <div className="card-elegant p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Home className="mr-3 text-teal-500" />
                What Type of Property Are You Listing?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {propertyTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedPropertyType(type.id)}
                    className={`${type.color} ${
                      selectedPropertyType === type.id ? 'ring-4 ring-teal-300 scale-105' : ''
                    } text-white p-8 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover-lift text-center`}
                  >
                    <Home className="w-8 h-8 mx-auto mb-4" />
                    {type.label}
                  </button>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={handleNextStep}
                  disabled={!selectedPropertyType}
                  className={`btn-primary px-12 py-4 text-lg ${
                    !selectedPropertyType ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  Continue to Details
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Property Details & Location */}
        {currentStep === 2 && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Property Details */}
              <div className="card-elegant p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Property Details
                </h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Rent</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">৳</span>
                        <input
                          type="number"
                          name="rent"
                          placeholder="15000"
                          value={formData.rent}
                          onChange={handleInputChange}
                          className="input-elegant pl-8"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Number of Rooms</label>
                      <input
                        type="number"
                        name="rooms"
                        placeholder="3"
                        value={formData.rooms}
                        onChange={handleInputChange}
                        className="input-elegant"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Bathrooms</label>
                    <input
                      type="number"
                      name="bathrooms"
                      placeholder="2"
                      value={formData.bathrooms}
                      onChange={handleInputChange}
                      className="input-elegant"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Amenities</label>
                    <div className="grid grid-cols-2 gap-3">
                      {amenities.map((amenity) => (
                        <button
                          key={amenity}
                          type="button"
                          onClick={() => handleAmenityToggle(amenity)}
                          className={`p-3 rounded-xl border-2 text-sm font-medium transition-all duration-200 ${
                            formData.amenities.includes(amenity)
                              ? 'bg-teal-50 border-teal-500 text-teal-700'
                              : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {amenity}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Property Description</label>
                    <textarea
                      name="description"
                      placeholder="Describe your property, its features, and what makes it special..."
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className="input-elegant resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Address Details */}
              <div className="card-elegant p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="mr-3 text-teal-500" />
                  Property Location
                </h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    placeholder="STREET ADDRESS"
                    value={formData.street}
                    onChange={handleInputChange}
                    className="input-elegant"
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                  {/* Map Placeholder */}
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 rounded-2xl flex items-center justify-center shadow-inner">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-teal-500 mx-auto mb-3" />
                      <span className="text-lg font-semibold text-gray-600">Location Preview</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevStep}
                className="btn-secondary px-8 py-3"
              >
                Previous
              </button>
              <button
                onClick={handleNextStep}
                className="btn-primary px-8 py-3"
              >
                Continue to Photos
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Photos & Publish */}
        {currentStep === 3 && (
          <div className="animate-fade-in">
            <div className="card-elegant p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Camera className="mr-3 text-teal-500" />
                Add Photos of Your Property
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square border-3 border-dashed border-teal-300 rounded-2xl flex items-center justify-center cursor-pointer hover:border-teal-500 hover:bg-teal-50 transition-all duration-300 hover-lift">
                    <div className="text-center">
                      <Upload className="w-8 h-8 text-teal-400 mx-auto mb-2" />
                      <span className="text-sm text-teal-600 font-medium">Upload Photo</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-teal-50 rounded-2xl p-6 mb-8 border border-teal-200">
                <h4 className="font-bold text-teal-900 mb-3">Photo Tips:</h4>
                <ul className="text-sm text-teal-700 space-y-2">
                  <li>• Upload high-quality photos with good lighting</li>
                  <li>• Include photos of all rooms, especially kitchen and bathrooms</li>
                  <li>• Show the exterior and any outdoor spaces</li>
                  <li>• Highlight unique features and amenities</li>
                </ul>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="btn-secondary px-8 py-3"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="btn-primary px-12 py-4 text-lg"
                  >
                    Publish Property
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OwnerDashboard;
