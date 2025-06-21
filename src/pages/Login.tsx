
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('tenant');
  const [location, setLocation] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [propertyType, setPropertyType] = useState('');
  const [budget, setBudget] = useState('');
  const navigate = useNavigate();

  const serviceOptions = [
    'Roommate Finder',
    'Family House',
    'Commercial Space',
    'Short-term Rental',
    'Student Housing',
    'Senior Living'
  ];

  const propertyTypes = [
    'Apartment',
    'House',
    'Condo',
    'Townhouse',
    'Commercial Building',
    'Office Space'
  ];

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { 
      email, 
      number, 
      password, 
      accountType, 
      location, 
      selectedServices, 
      propertyType, 
      budget 
    });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <img 
              src="/lovable-uploads/28f45773-a45d-4885-85c3-90a57d69dd0c.png" 
              alt="Rentify Logo" 
              className="h-12 w-auto mx-auto mb-4"
            />
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-gray-600 mt-2">Sign in to your account</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Account Type Selection */}
            <div className="flex space-x-4 mb-6">
              <button
                type="button"
                onClick={() => setAccountType('tenant')}
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                  accountType === 'tenant'
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Tenant
              </button>
              <button
                type="button"
                onClick={() => setAccountType('owner')}
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                  accountType === 'owner'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Owner
              </button>
            </div>

            {/* Basic Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Location Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {accountType === 'tenant' ? 'Preferred Location' : 'Property Location'}
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200"
                placeholder={accountType === 'tenant' ? "Enter your preferred location" : "Enter your property location"}
                required
              />
            </div>

            {/* Tenant-specific fields */}
            {accountType === 'tenant' && (
              <>
                {/* Service Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What are you looking for?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceOptions.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => handleServiceToggle(service)}
                        className={`p-3 rounded-xl border-2 text-sm font-medium transition-all duration-200 ${
                          selectedServices.includes(service)
                            ? 'bg-teal-50 border-teal-500 text-teal-700'
                            : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200"
                  >
                    <option value="">Select budget range</option>
                    <option value="0-500">$0 - $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-1500">$1,000 - $1,500</option>
                    <option value="1500-2000">$1,500 - $2,000</option>
                    <option value="2000+">$2,000+</option>
                  </select>
                </div>
              </>
            )}

            {/* Owner-specific fields */}
            {accountType === 'owner' && (
              <>
                {/* Property Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200"
                  >
                    <option value="">Select property type</option>
                    {propertyTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Additional Owner Info */}
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                  <h4 className="font-medium text-emerald-900 mb-2">Property Owner Benefits</h4>
                  <ul className="text-sm text-emerald-700 space-y-1">
                    <li>• List unlimited properties</li>
                    <li>• Advanced tenant screening</li>
                    <li>• Rent collection management</li>
                    <li>• Property analytics dashboard</li>
                  </ul>
                </div>
              </>
            )}
            
            <div className="text-right">
              <Link to="/forgot-password" className="text-sm text-teal-600 hover:text-teal-800 transition-colors duration-200">
                Forgot Password?
              </Link>
            </div>
            
            <button
              type="submit"
              className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover-lift ${
                accountType === 'tenant'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white'
                  : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white'
              }`}
            >
              Sign In as {accountType === 'tenant' ? 'Tenant' : 'Property Owner'}
            </button>
          </form>
          
          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{' '}
            <Link to="/register" className="text-teal-600 hover:text-teal-800 font-medium transition-colors duration-200">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
