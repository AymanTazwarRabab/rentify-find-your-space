
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    location: '',
    userType: 'Tenant',
    otp: ''
  });
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGetOTP = () => {
    setOtpSent(true);
    console.log('OTP sent to:', formData.email);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">REGISTER</h2>
          
          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="ENTER YOUR NAME"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                required
              />
            </div>
            
            <div>
              <input
                type="tel"
                name="number"
                placeholder="ENTER YOUR NUMBER"
                value={formData.number}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                required
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="ENTER YOUR EMAIL"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                required
              />
            </div>
            
            <div>
              <input
                type="text"
                name="location"
                placeholder="YOUR LOCATION"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                required
              />
            </div>
            
            <div>
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700">REGISTER AS:</span>
                <select
                  name="userType"
                  value={formData.userType}
                  onChange={handleInputChange}
                  className="px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                >
                  <option value="Tenant">Tenant</option>
                  <option value="House owner">House owner</option>
                </select>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Drag your NID</span>
              <div className="flex space-x-2">
                <button
                  type="button"
                  className="w-8 h-8 border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-gray-400 hover:border-yellow-500 transition-colors"
                >
                  +
                </button>
                <button
                  type="button"
                  className="w-8 h-8 border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-gray-400 hover:border-yellow-500 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
            
            {!otpSent ? (
              <button
                type="button"
                onClick={handleGetOTP}
                className="w-full bg-yellow-500 text-white py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors"
              >
                Get OTP
              </button>
            ) : (
              <div className="space-y-4">
                <input
                  type="text"
                  name="otp"
                  placeholder="Paste your OTP"
                  value={formData.otp}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors"
                >
                  Register
                </button>
              </div>
            )}
          </form>
          
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
