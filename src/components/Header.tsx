
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/28f45773-a45d-4885-85c3-90a57d69dd0c.png" 
              alt="Rentify Logo" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-gray-900">RENTIFY</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-600 hover:text-gray-900'} px-3 py-2 transition-all duration-200 font-medium`}
            >
              HOME
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-600 hover:text-gray-900'} px-3 py-2 transition-all duration-200 font-medium`}
            >
              ABOUT US
            </Link>
            <Link 
              to="/qna" 
              className={`${isActive('/qna') ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-600 hover:text-gray-900'} px-3 py-2 transition-all duration-200 font-medium`}
            >
              QNA
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-600 hover:text-gray-900'} px-3 py-2 transition-all duration-200 font-medium`}
            >
              CONTACT
            </Link>
          </nav>

          <Link 
            to="/login" 
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
          >
            LOGIN / REGISTER
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
