import React, { useState, useEffect } from 'react';
import { Search, MapPin, Home, Users, DollarSign } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';

interface Property {
  id: string;
  type: string;
  location: string;
  rooms: string | null;
  rent: number;
  measurement: string | null;
  description: string | null;
  is_available: boolean;
}

const TenantDashboard = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [budgetRange, setBudgetRange] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login');
    }
  }, [user, authLoading, navigate]);

  // Fetch properties from database
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const { data, error } = await supabase
          .from('properties')
          .select('*')
          .eq('is_available', true)
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching properties:', error);
          return;
        }

        setProperties(data || []);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchProperties();
    }
  }, [user]);

  const categories = [
    { id: 'all', label: 'All Properties', icon: Home },
    { id: 'family', label: 'Family House', icon: Home },
    { id: 'bachelor', label: 'Bachelor', icon: Users },
    { id: 'commercial', label: 'Commercial', icon: DollarSign },
    { id: 'roommate', label: 'Roommate', icon: Users }
  ];

  const locations = [
    'All Locations',
    ...Array.from(new Set(properties.map(p => p.location))).sort()
  ];

  const budgetRanges = [
    'All Budgets',
    '0 - 10000 ৳',
    '10000 - 20000 ৳',
    '20000 - 30000 ৳',
    '30000+ ৳'
  ];

  const filteredProperties = properties.filter(property => {
    const matchesCategory = activeCategory === 'all' || 
      property.type.toLowerCase().includes(activeCategory);
    const matchesLocation = !selectedLocation || selectedLocation === 'All Locations' || 
      property.location === selectedLocation;
    const matchesSearch = !searchTerm || 
      property.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesBudget = true;
    if (budgetRange && budgetRange !== 'All Budgets') {
      const rent = property.rent;
      switch (budgetRange) {
        case '0 - 10000 ৳':
          matchesBudget = rent <= 10000;
          break;
        case '10000 - 20000 ৳':
          matchesBudget = rent > 10000 && rent <= 20000;
          break;
        case '20000 - 30000 ৳':
          matchesBudget = rent > 20000 && rent <= 30000;
          break;
        case '30000+ ৳':
          matchesBudget = rent > 30000;
          break;
      }
    }
    
    return matchesCategory && matchesLocation && matchesSearch && matchesBudget;
  });

  if (authLoading || loading) {
    return (
      <div className="page-container">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-2xl font-bold text-teal-600">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-white via-teal-50 to-cyan-50 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 animate-pulse-glow"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-header text-center animate-bounce-in">
            Find Your Perfect Home
          </h1>
          <p className="section-subtitle text-center animate-slide-up">
            Browse through verified properties in your preferred location
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-8 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by property type or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-teal-200 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Section */}
        <div className="mb-12 animate-slide-up">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-teal-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <MapPin className="mr-3 text-teal-500" />
              Filter Properties
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                <select
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                >
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover-lift ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-teal-50 hover:text-teal-700'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Available Properties ({filteredProperties.length})
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <div 
                key={property.id} 
                className="animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <PropertyCard
                  type={property.type}
                  location={property.location}
                  rooms={property.rooms || ''}
                  rent={`${property.rent} ৳`}
                  measurement={property.measurement}
                  bgColor="bg-gradient-to-r from-teal-500 to-cyan-500"
                />
              </div>
            ))}
          </div>
          
          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Home className="w-12 h-12 text-teal-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Properties Found</h3>
              <p className="text-gray-600">Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl p-8 text-white text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">Need Help Finding Your Perfect Home?</h3>
          <p className="text-lg mb-6 opacity-90">Our team is here to assist you with personalized recommendations</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover-lift">
              Contact Support
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300 hover-lift">
              Schedule Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantDashboard;
