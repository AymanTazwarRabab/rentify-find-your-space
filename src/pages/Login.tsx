
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const Login = () => {
  const [activeTab, setActiveTab] = useState<'tenant' | 'owner'>('tenant');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn, user } = useAuth();

  // Redirect authenticated users to appropriate dashboard
  useEffect(() => {
    if (user) {
      // Fetch user profile to determine redirect
      const getUserProfile = async () => {
        const { data: profile } = await supabase
          .from('profiles')
          .select('user_type')
          .eq('id', user.id)
          .single();
        
        if (profile?.user_type === 'Tenant') {
          navigate('/tenant-dashboard');
        } else {
          navigate('/owner-dashboard');
        }
      };
      
      getUserProfile();
    }
  }, [user, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      console.log('Attempting to login with:', formData.email);
      
      const { data, error } = await signIn(formData.email, formData.password);
      
      if (error) {
        console.error('Login error:', error);
        
        // Handle specific error messages
        if (error.message.includes('invalid_credentials') || error.message.includes('Invalid login credentials')) {
          toast.error('Invalid email or password. Please check your credentials.');
        } else if (error.message.includes('email_not_confirmed')) {
          toast.error('Please verify your email before logging in.');
        } else {
          toast.error(error.message);
        }
        return;
      }

      if (data.user) {
        toast.success('Login successful!');
        
        // Fetch user profile to determine redirect
        const { data: profile } = await supabase
          .from('profiles')
          .select('user_type')
          .eq('id', data.user.id)
          .single();
        
        if (profile?.user_type === 'Tenant') {
          navigate('/tenant-dashboard');
        } else {
          navigate('/owner-dashboard');
        }
      }
    } catch (error: any) {
      console.error('Login error:', error);
      toast.error('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">LOGIN</h2>
          
          {/* Tab Navigation */}
          <div className="flex mb-6 bg-gray-100 rounded-full p-1">
            <button
              type="button"
              onClick={() => setActiveTab('tenant')}
              className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'tenant'
                  ? 'bg-teal-500 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              TENANT
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('owner')}
              className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'owner'
                  ? 'bg-teal-500 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              OWNER
            </button>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
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
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 rounded-full font-semibold hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing In...' : `Login as ${activeTab === 'tenant' ? 'Tenant' : 'Owner'}`}
            </button>
          </form>
          
          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{' '}
            <Link to="/register" className="text-teal-600 hover:text-teal-800 font-medium">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
