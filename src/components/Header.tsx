
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-bold text-gray-900">RENTIFY</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-600 hover:text-gray-900'} px-3 py-2 transition-colors`}
            >
              HOME
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-600 hover:text-gray-900'} px-3 py-2 transition-colors`}
            >
              ABOUT US
            </Link>
            <Link 
              to="/qna" 
              className={`${isActive('/qna') ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-600 hover:text-gray-900'} px-3 py-2 transition-colors`}
            >
              QNA
            </Link>
            <Link 
              to="/services" 
              className={`${isActive('/services') ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-600 hover:text-gray-900'} px-3 py-2 transition-colors`}
            >
              SERVICES
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-600 hover:text-gray-900'} px-3 py-2 transition-colors`}
            >
              CONTACT
            </Link>
          </nav>

          <Link 
            to="/login" 
            className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            LOGIN / REGISTER
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
