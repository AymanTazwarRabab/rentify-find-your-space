
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'sonner';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    location: '',
    userType: 'Tenant',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);
    
    try {
      const userData = {
        name: formData.name,
        phone: formData.number,
        location: formData.location,
        user_type: formData.userType
      };

      const { data, error } = await signUp(formData.email, formData.password, userData);
      
      if (error) {
        toast.error(error.message);
        return;
      }

      if (data.user) {
        toast.success('Account created successfully!');
        
        // Redirect based on user type
        if (formData.userType === 'Tenant') {
          navigate('/tenant-dashboard');
        } else {
          navigate('/owner-dashboard');
        }
      }
    } catch (error: any) {
      toast.error('Registration failed. Please try again.');
      console.error('Registration error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
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
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                required
              />
            </div>
            
            <div>
              <input
                type="password"
                name="password"
                placeholder="ENTER YOUR PASSWORD"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                required
                minLength={6}
              />
            </div>
            
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="CONFIRM YOUR PASSWORD"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                required
                minLength={6}
              />
            </div>
            
            <div>
              <input
                type="text"
                name="location"
                placeholder="YOUR LOCATION"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
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
                  className="px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
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
                  className="w-8 h-8 border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-gray-400 hover:border-teal-500 transition-colors"
                >
                  +
                </button>
                <button
                  type="button"
                  className="w-8 h-8 border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-gray-400 hover:border-teal-500 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 rounded-full font-semibold hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating Account...' : 'Register'}
            </button>
          </form>
          
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-teal-600 hover:text-teal-800 font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
